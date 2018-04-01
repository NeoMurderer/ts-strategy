import { Module } from "@nestjs/common";

import { DoctorController } from './doctor.controller';

@Module({
    controllers: [DoctorController],
    imports: []
})

export class RouterModule {}

