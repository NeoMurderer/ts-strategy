import { Controller, Get } from "@nestjs/common";
import { Cat } from "../../interfaces/cat.interface";
import { Model } from 'mongoose';
import { CatsService } from './cats.service';
@Controller('cats')
export class CatsController {
    constructor(
        private readonly catsService: CatsService
    ){}
    @Get('/') 
    async findAll(): Promise<Cat[]> {
        return await this.catsService.findAll()
    }
    @Get('/new') 
    async create(): Promise<Cat> {
        return await this.catsService.create({
            name: 'test',
            age: 20,
            breed: 'test2'
        })
    }
}
