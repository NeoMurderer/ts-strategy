import * as passport from 'passport'
import { Component, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthService } from '../../core/auth/auth.service';

@Component()
export class JwtStrategy extends Strategy  {
    constructor(private readonly authService: AuthService) {
        super(
            {
              jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
              passReqToCallback: true,
              secretOrKey: 'secret',
            },
            async (req, payload, next) => {
                return await this.verify(req, payload, next)
            }
          )
          passport.use(this)
    }
    public async verify(req, payload, done) {
        const isValid = await this.authService.validate(payload)
        if (!isValid) {
            done('JUI', null)
        }
        done(null, payload);
      }
}