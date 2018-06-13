import { Module } from '@nestjs/common'
import DatabaseModule from '../core/orm/database.module';

import { DoctorRoute } from './api/doctor.controller';
import { CatsModule } from './cats/cats.module';

@Module({
    controllers: [DoctorRoute],
    components: [],
    imports: [DatabaseModule, CatsModule],
})

export default class RouterModule {}