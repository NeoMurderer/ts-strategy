import { Module } from '@nestjs/common'
import DatabaseModule from '../core/orm/database.module';

import { DoctorRoute } from './api/doctor.controller';

@Module({
    controllers: [DoctorRoute],
    components: [],
    imports: [DatabaseModule]
})

export default class RouterModule {}