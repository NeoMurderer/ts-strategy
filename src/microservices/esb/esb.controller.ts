import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Doctor } from '../../interfaces/doctor.interface';

@Controller()
export class ESBController {
  @MessagePattern({ cmd: 'index' })
  index(): Doctor {
    return {
        name: 'Popov'
    }
  }
}