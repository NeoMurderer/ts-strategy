import { Controller, Get } from "@nestjs/common";

@Controller('/')
export class ApplicationController {
    @Get() 
    async index() {
        return 'Main Medica'
    }
}