import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module';
import { ApplicationController } from './app.controller';
@Module({
    controllers: [ApplicationController],
    components: [],
    imports: [AuthModule]
})
export default class ApplicationModule {}