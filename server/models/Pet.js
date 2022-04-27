const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPets` array in User.js
const petSchema = new Schema({
  name: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved pets id from pets api
  petId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = petSchema;
