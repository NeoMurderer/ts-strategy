import { Controller, Get } from "@nestjs/common";
import Doctor from '../../models/doctor.entity';

@Controller('/doctor')
export class DoctorRoute {
    @Get() 
    async index() {
        return Doctor.build({ name: 'House.md'})
    }
}
