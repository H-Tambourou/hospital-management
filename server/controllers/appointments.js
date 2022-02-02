const appointmentsRouter = require('express').Router();
const Appointment = require('../models/appointment');
const logger = require('../utils/logger');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        return authorization.substring(7)
    }
    return null
}

appointmentsRouter.get('/', async (request, response) => {
    const appointment = await Appointment.find({});
    response.json(appointment);
});
appointmentsRouter.post('/', async (request, response, next) => {
    const body = request.body;
    const token = getTokenFrom(request);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if(!decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid'})
    };
    const user = await User.findById(decodedToken.id);
    
    const appointment = new Appointment({
        name: body.name,
        email: body.email,
        number: body.number,
        date: body.date,
        status: false,
        createdBy: user._id
    })
    try{
        const savedAppointment = await appointment.save();
        response.json(savedAppointment);
    }catch(exeption){
        next(exeption)
    }
})

appointmentsRouter.delete('/:id', async (request, response, next) => {
    try{
        await Appointment.findByIdAndRemove(request.params.id);
        response.status(204).end();
    }catch(exeption){
        next(exeption);
    }
})

appointmentsRouter.put('/:id', async (request, response, next) => {
    const id = request.params.id;
    const status = request.body.status;
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(id, {status: status}, {new: true});
        logger.info('update status');
        response.json(updatedAppointment);
    } catch(exeption){
        next(exeption);
    }
})

module.exports = appointmentsRouter