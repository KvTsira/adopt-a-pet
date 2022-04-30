import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_PET } from '../utils/mutations';
import Auth from '../utils/auth';
import { searchPets } from '../utils/API';
import { savePetIds, getSavedPetIds } from '../utils/localStorage';


const SearchPets = () => {
  // create state for holding returned google api data
  const [searchedPets, setSearchedPets] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved Id values
  const [savedPetIds, setSavedPetIds] = useState(getSavedPetIds());

  const [savePet, { error }] = useMutation(SAVE_PET);



  // set up useEffect hook to save `savedIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => savePetIds(savedPetIds);
  });

  // create method to search for  and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchPets(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const savedPet = items.map((pet) => ({
        petId: pet.id,
        owners: pet.volumeInfo.owners || ['No owner to display'],
        title: pet.volumeInfo.title,
        description: pet.volumeInfo.description,
        image: pet.volumeInfo.imageLinks?.thumbnail || '',
      }));

      setSearchedPets(savedPet);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a pet to our database
  const handleSavePet = async (petId) => {
    // find the pet in `searched` state by the matching id
    const petToSave = searchedPets.find((pet) => pet.petId === petId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      console.log(petToSave);
      const { data } = await savePet({
        variables: { savedPet: { ...petToSave } },
      });

      // if pet successfully saves to user's account, save pet id to state
      setSavedPetIds([...savedPetIds, petToSave.petId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <h2>
          {searchedPets.length
            ? `Viewing ${searchedPets.length} results:`
            : 'Search for a pet to begin'}
        </h2>
        <CardColumns>
          {searchedPets.map((pet) => {
            return (
              <Card key={pet.petId} border='dark'>
                {pet.image ? (
                  <Card.Img src={pet.image} alt={`The cover for ${pet.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{pet.title}</Card.Title>
                  <p className='small'>Owners: {pet.owners}</p>
                  <Card.Text>{pet.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedPetIds?.some((savedPetId) => savedPetId === pet.petId)}
                      className='btn-block btn-info'
                      onClick={() => handleSavePet(pet.petId)}>
                      {savedPetIds?.some((savedPetId) => savedPetId === pet.petId)
                        ? 'This pet has already been saved!'
                        : 'Save this Pet!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchPets;
