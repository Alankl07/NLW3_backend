
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanege from '../models/orphanages';

export default {
    async index(request: Request, response: Response){
        const orphanageRepository = getRepository(Orphanege);

        const orphanages = await orphanageRepository.find();

        return response.json(orphanages);
    },

    async show(request: Request, response: Response){
        const { id } = request.params;
        const orphanageRepository = getRepository(Orphanege);

        const orphanage = await orphanageRepository.findOneOrFail(id);

        return response.json(orphanage);
    },


    async create(request: Request, response: Response) {
        const {
            name, latitude, longitude, about, instructions, opening_hours, open_on_weekends
        } = request.body;
    
        const orphanagesRepository = getRepository(Orphanege)
    
        const orphanage = orphanagesRepository.create({
            name, latitude, longitude, about, instructions,
            opening_hours ,open_on_weekends
        })
    
        const orpha = await orphanagesRepository.save(orphanage)
    
        return response.status(201).json({orphanage});
    }
}