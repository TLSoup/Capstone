const router = require('express').Router();
let ClothingModel = require('../models/clothing.model');

router.get('/', (req, res) => {
    const { _id } = req.body;

    if (_id) {
        // return document searched by _id
        ClothingModel.find({ _id })
            .then(document => {
                res.status(200).json(document);
            })
            .catch(err => {
                res.status(404).send(`Did not find item. Error: ${err}`);
            });
    } else {
        // return all documents
        ClothingModel.find()
            .then(document => {
                res.status(200).json(document);
            })
            .catch(err => {
                res.status(404).send(`Did not find item. Error: ${err}`);
            });
    }
});

router.post('/createNewClothing', (req, res) => {
    const { clothingType, clothingBrand, clothingStyle, clothingChest, clothingWaist, clothingHip, clothingInseam, clothingSize } = req.body;

    let newClothingDocument = new ClothingModel({
        clothingType,
        clothingBrand,
        clothingStyle,
        clothingChest,
        clothingWaist,
        clothingHip,
        clothingInseam,
        clothingSize,
    });

    newClothingDocument.save().then(document => {
        console.log(document);
        console.log()

        res.status(200).send(`Successfully added item!`);
    }).catch(err => {
        res.status(400).send(`Failed to add item. Error: ${err}`);
    });
});

router.patch('/', (req, res) => {
    const { _id, newClothingType, newClothingBrand, newClothingStyle, newClothingChest, newClothingWaist, newClothingHip, newClothingInseam, newClothingSize } = req.body;

    let updatedClothingDocument = {};

    //check for existence of object properties
    if (newClothingType) updatedClothingDocument.clothingType = newClothingType;
    if (newClothingBrand) updatedClothingDocument.clothingStyle = newClothingStyle;
    if (newClothingChest) updatedClothingDocument.clothingChest = newClothingChest;
    if (newClothingWaist) updatedClothingDocument.clothingWaist = newClothingWaist;
    if (newClothingHip) updatedClothingDocument.clothingHip = newClothingHip;
    if (newClothingInseam) updatedClothingDocument.clothingInseam = newClothingInseam;
    if (newClothingSize) updatedClothingDocument.clothingSize = newClothingSize;

    ClothingModel.findOneAndUpdate({ _id }, updatedClothingDocument, { new: true })
        .then(document => {
            res.status(200).json(document);
        })
        .catch(err => {
            res.status(404).send(`Did not find item to update. Error: ${err}`);
        })
});

router.delete('/', (req, res) => {
    const { _id } = req.body;

    ClothingModel.findOneAndDelete({ _id })
        .then(document => {
            res.status(200).json(document);
        })
        .catch(err => {
            res.status(404).send(`Did not find item to delete. Error: ${err}`);
        });
});

module.exports = router;