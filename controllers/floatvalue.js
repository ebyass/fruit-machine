const axios = require('axios')
const Float= require('../models/float')

async function getValue(req, res) {
	try {
		const value = await Float.find()
		res.status(200).json(value)
	}catch (err) {
		res.json(err)
	}
}

async function updateValue(req, res, next) {
	const floatId = req.params.id
	try{
		const float = await Float.findById(floatId)
		if(!float) throw new Error(notFound)
		Object.assign(float, req.body) //merge the objects together to to do the update
		await float.save()
		res.status(202).json(float)
	} catch (err) {
		next(err)
	}
}

async function createValue(req, res, next) {
	const float = await Float.find()
	console.log('here',float)
	if(float.length > 1) {
		res.sendStatus(409)
	} else {
		try {
			const createValue = await Float.create(req.body)
			res.status(201).json(createValue)
		} catch(err) {
			next(err)
		}
	}
}

module.exports = {
	getValue,
	updateValue,
	createValue
}
