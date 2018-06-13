import { Controller, Get, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Get('token')
    @HttpCode(HttpStatus.OK)
    public async getToken() {
      return await this.authService.createToken()
    }
    
    @Get('authorized')
    public async authorized() {
      return 'Authorized route'
    }
}