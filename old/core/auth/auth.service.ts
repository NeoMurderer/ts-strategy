import { Component } from "@nestjs/common";
import * as jwt from 'jsonwebtoken'

interface Token {
    expires_in: number
    token: string
}

@Component()
export class AuthService {
    async createToken(): Promise<Token> {
        const expiresIn = 60 * 60
        const secretOrKey = 'secret'
        const user = { email: 'test@local.host' };
        const token = jwt.sign(user, secretOrKey, { expiresIn })
        return {
            expires_in: expiresIn,
            token,
        }
    }
    validate(payload): Boolean {
        // TODO: check if payload valid
        return true
    }
}