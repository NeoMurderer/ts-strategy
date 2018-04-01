import { Component } from "@nestjs/common";
import { DatabaseService } from '../orm/database.service';

@Component()
export class SystemCheck {
    constructor (private readonly dbService: DatabaseService) {}
    async database() {
        const status = this.dbService.getStatus()
    }
} 