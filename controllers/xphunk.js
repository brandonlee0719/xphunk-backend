const XPhunk = require('../models/xphunk');
const { request } = require('../utils/helper');

const getAll = async function(req, res, next) {
    const objs = await XPhunk.findAll({
        where: req.query
    });
    return res.status(200).json(objs);
}

const create = async function(req, res, next) {
    for (let i = 10000; i < 20000; i++) {
        const url = `https://xphunks.mypinata.cloud/ipfs/QmSH2wPew8BfQcCRwAYs4J7yXZcwVmiUpWX3YrxTH4SLBL/${i}`;
        const result = await request(url)
            .then(res => res).catch(() => null);

        let obj = new Object();
        obj.name = result.name;
        obj.description = result.description;
        obj.image = result.image;
        obj.attributes = result.attributes;

        for (let j = 0; j < result.attributes.length; j++) {
            if (result.attributes[j]['trait_type'] === 'Attribute Count') {
                obj.traitAttributeCount = Number(result.attributes[j]['value']);
            } else if (result.attributes[j]['trait_type'] === 'Blemish') {
                obj.traitBlemish = result.attributes[j]['value'];
            } else if (result.attributes[j]['trait_type'] === 'Ear') {
                obj.traitEar = result.attributes[j]['value'];
            } else if (result.attributes[j]['trait_type'] === 'Eyes') {
                obj.traitEyes = result.attributes[j]['value'];
            } else if (result.attributes[j]['trait_type'] === 'Facial Hair') {
                obj.traitFacialHair = result.attributes[j]['value'];
            } else if (result.attributes[j]['trait_type'] === 'Hair') {
                obj.traitHair = result.attributes[j]['value'];
            } else if (result.attributes[j]['trait_type'] === 'Mouth') {
                obj.traitMouth = result.attributes[j]['value'];
            } else if (result.attributes[j]['trait_type'] === 'Mouth Prop') {
                obj.traitMouthProp = result.attributes[j]['value'];
            } else if (result.attributes[j]['trait_type'] === 'Neck Accessory') {
                obj.traitNeckAccessory = result.attributes[j]['value'];
            } else if (result.attributes[j]['trait_type'] === 'Nose') {
                obj.traitNose = result.attributes[j]['value'];
            } else if (result.attributes[j]['trait_type'] === 'Skin Tone') {
                obj.traitSkinTone = result.attributes[j]['value'];
            } else if (result.attributes[j]['trait_type'] === 'Type') {
                obj.traitType = result.attributes[j]['value'];
            }
        }

        const ret = await XPhunk.create(obj).then(res => {
            return res.get();
        }).catch(err => {
            console.log(err);
            return null;
        });
    }

    return res.status(201).json('success');
}

module.exports = {
    getAll, create
}