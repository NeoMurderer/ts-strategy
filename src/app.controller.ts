import { Controller, Get } from "@nestjs/common";
import Car from './orm/models/car.entity';
@Controller('/')
export class ApplicationController {
    @Get() 
    async index() {
        return 'Main Medica'
    }
    @Get('/create')
    async create () {
        return await Car.build({
            name: 'Ford escape',
            age: 5
        })
    }
}