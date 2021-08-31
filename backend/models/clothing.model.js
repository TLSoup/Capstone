const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clothingSchema = new Schema({
    clothingType: {
        type: String,
        required: true,
        unique: false,
    },
    clothingBrand: {
        type: String,
        required: true,
        unique: false,
        lowercase: false,
    },
    clothingStyle: {
        type: String,
        required: false,
        unique: false,
        lowercase: false,
    },
    clothingSize: {
        type: String,
        required: true,
        unique: false,
    },
    clothingChest: {
        type: Number,
        requried: false,
        unique: false,
    },
    clothingWaist: {
        type: Number,
        required: false,
        unique: false,
    },
    clothingHip: {
        type: Number,
        required: false,
        unique: false,
    },
    clothingInseam: {
        type: Number,
        required: false,
        unique: false,
    },
});

module.exports = mongoose.model('Clothing', clothingSchema)