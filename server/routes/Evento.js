const express = require ('express')
const router = express.Router()
const { Evento } = require('../models')

router.get('/', async (req, res, next)=>{
    const listaEventos = await Evento.findAll();
    res.json(listaEventos);
});

router.post('/', async (req, res)=>{
    const evento = req.body;
    await Evento.create(evento); 
    res.json(evento)
});

module.exports = router;
