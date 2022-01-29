const appointmentsRouter = require('express').Router();
const Appointment = require('../models/appointment');
const logger = require('../utils/logger');

appointmentsRouter.get('/', async (request, response) => {
    const appointment = await Appointment.find({});
    response.json(appointment);
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
    const date = request.body.date;
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(id, {date: date}, {new: true});
        logger.info('update appointment date');
        response.json(updatedAppointment);
    } catch(exeption){
        next(exeption);
    }
})
module.exports = appointmentsRouter