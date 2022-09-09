const express = require('express');
const { model } = require('mongoose');

const {handleCreateJoke, handleGetAllJokes, handleGetJokeById, handleDeleteJoke, handleUpdateJoke, handleRandomJoke, handleRandomJokes} = require('../controllers/joke.controller')

const router= express.Router();

router.post('/new', handleCreateJoke);
router.get('/', handleGetAllJokes);
router.get('/random/', handleRandomJoke);
router.get('/:id', handleGetJokeById);
router.put('/update/:id', handleUpdateJoke);
router.delete('/delete/:id', handleDeleteJoke);

module.exports = {jokesRouter: router};

