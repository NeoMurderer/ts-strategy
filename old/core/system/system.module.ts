import { Module } from '@nestjs/common'
import { SystemCheck } from './system.check'
import DatabaseModule from '../orm/database.module';
@Module({
    components: [SystemCheck],
    imports: [DatabaseModule]
})
export default class SystemModule {}
