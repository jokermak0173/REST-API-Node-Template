const { response, request} = require('express');


const usuariosGet = (req = request, res = response) => {
    const {q, nombre, apiKey} = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apiKey       
    });
}

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    res.status(201).json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {
    const {id, nombre} = req.params;
    res.json({
        msg: 'put API - controlador',
        id,
        nombre
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}