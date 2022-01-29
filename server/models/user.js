const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const useSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    name: String,
    passwordHash: String,
})

useSchema.plugin(uniqueValidator);

useSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject._v;
        //the passwordHash should not be revealed
        delete returnedObject.passwordHash
    }
})
const User = mongoose.model('User', useSchema);
module.exports = User;