import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Doctor } from '../../interface/Doctor';

@Controller()
export class ESBController {
  @MessagePattern({ cmd: 'index' })
  index(): Doctor {
    return {
        id: 1,
        name: 'Popov'
    }
  }
}