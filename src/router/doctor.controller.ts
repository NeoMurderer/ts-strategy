import { Controller, Get } from "@nestjs/common";
import { Client, ClientProxy, Transport } from "@nestjs/microservices";
import { Observable } from "rxjs/Observable";
import { Doctor } from "../interface/Doctor";
process.setMaxListeners(0);
@Controller()
export class DoctorController {
    @Client({ transport: Transport.TCP, port: 8801 })
    client: ClientProxy;
    
    @Get()
    call(): Observable<Doctor> {
        try {
            return this.client.send({ cmd: 'index' }, {})
        } catch (error) {
            console.error(error.message)
        }
    }
}