import { Controller, Get } from "@nestjs/common";

@Controller('/car')

export class CarRoute {
    @Get() 
    async index() {
        return 'Main car'
    }
}
