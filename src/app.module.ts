import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module';
import DatabaseModule from './orm/database.module';
import { ApplicationController } from './app.controller';
@Module({
    controllers: [ApplicationController],
    components: [],
    imports: [AuthModule, DatabaseModule]
})
export default class ApplicationModule {}