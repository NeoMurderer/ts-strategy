import { Controller, Get } from "@nestjs/common";
import Doctor from '../../models/doctor.entity';

@Controller('doctors')
export class DoctorRoute {
    @Get('/') 
    async findAll() {
        try {
            return await Doctor.findAll()
        } catch(error) {
            return error.message
        }
    }
}
