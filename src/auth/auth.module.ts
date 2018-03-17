import * as passport from 'passport'
import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategy/jwt'
import { AuthController } from './auth.controller';
@Module({
    controllers: [AuthController],
    components: [AuthService, JwtStrategy]
})
export default class AuthModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(passport.authenticate('jwt', { session: false }))
            .forRoutes({ path: '/auth/authorized', method: RequestMethod.ALL })
    }
}