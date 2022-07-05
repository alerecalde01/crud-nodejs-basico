const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// create user
router.post("/users", (req, res) => {
    // nos trae los datos del usuario(nom, edad, email)
    const user = userSchema(req.body);

    user
    .save() // guardamos en la base de datos
    .then((data) => res.json(data)) // si sale todo bien respondemos con esos datos 
    .catch((error) =>  res.json({message: error})); // sino mostramos msj de error
});


// obtener usuarios
router.get("/users", (req, res) => {
    userSchema
    .find() // encontramos los usuarios
    .then((data) => res.json(data)) // si sale todo bien respondemos con esos datos 
    .catch((error) =>  res.json({message: error})); // sino mostramos msj de error
});


// obtener un usuario
router.get("/users/:id", (req, res) => {
    const { id } = req.params
    userSchema
    .findById(id) // encontramos los usuarios
    .then((data) => res.json(data)) // si sale todo bien respondemos con esos datos 
    .catch((error) =>  res.json({message: error})); // sino mostramos msj de error
});


// update un usuario
router.put("/users/:id", (req, res) => {
    const { id } = req.params
    const { name, age, email} = req.body

    userSchema
    .updateOne({ _id: id }, { $set:{ name, age, email }}) // pasamos dos objetos, uno el id y el otro los datos a modificar. $set para setear los datos
    .then((data) => res.json(data)) // si sale todo bien respondemos con esos datos 
    .catch((error) =>  res.json({message: error})); // sino mostramos msj de error
});


// delete un usuario
router.delete("/users/:id", (req, res) => {
    const { id } = req.params

    userSchema
    .remove({ _id: id }) // pasamos el id del usuario a eleminar
    .then((data) => res.json(data)) // si sale todo bien respondemos con esos datos 
    .catch((error) =>  res.json({message: error})); // sino mostramos msj de error
});


module.exports = router;