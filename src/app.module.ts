import { Module } from '@nestjs/common'
import AuthModule from './auth/auth.module';
import DatabaseModule from './orm/database.module';
import ApiModule from './api/api.module';
@Module({
    components: [],
    imports: [AuthModule, ApiModule]
})
export default class ApplicationModule {}