import { Inject, Component } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from '../../interfaces/cat.interface';
import { CatSchema } from '../../schemas/cats.schema';

@Component()
export class CatsService {
    constructor (
        @Inject('CatModelToken')
        private readonly catModel: Model<Cat>,
    ) {}
    async create(createCatDto: Cat): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return await createdCat.save();
      }
    async findAll(): Promise<Cat[]> {
        return await this.catModel.find().exec()
    }
}