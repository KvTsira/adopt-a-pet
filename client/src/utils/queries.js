import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      petCount
      savedPets {
        petId
        owners
        description
        title
        image
        link
      }
    }
  }
`;