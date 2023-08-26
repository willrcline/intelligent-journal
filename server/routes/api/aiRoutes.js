const express = require("express")
const router = require('express').Router();
const {callOpenAiApi, getOpenAiApiKey} = require('../ai.js');


router.post('/', async (req, res) => {
    console.log("routes.js openai req.body___________", req.body)

    var prompt = req.body.prompt
    var temperature = req.body.temperature
    try {
        var promptResponse = await callOpenAiApi(prompt, temperature)
        res.status(200).json(promptResponse)
        return
    } catch (err) {
        res.status(500).json(err)
        return
    }
});

router.get('/', async (req, res) => {
    res.json("get_______")
});



module.exports = router