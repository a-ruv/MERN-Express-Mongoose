const {Joke} = require('../models/jokes.model');

const createJoke = async (data) => {
    const joke = await Joke.create(data);
    return joke
}

const getAllJokes = async () => {
    const jokes = await Joke.find();
    return jokes
}

const getJokeById = async (id) => {
    const joke = await Joke.findById(id);
    return joke
}

const deleteJoke = async (id) => {
    const joke = await Joke.findByIdAndDelete(id);
    return joke
}

const updateJoke = async (id, data) => {
    const joke = await Joke.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });
    return joke
}

const randomJoke = async () => {
    const randomJokes = await Joke.aggregate(
        [ { $sample: { size: 1 } } ]
     )
    return randomJokes
}

module.exports = {createJoke, getAllJokes, getJokeById, deleteJoke, updateJoke, randomJoke}