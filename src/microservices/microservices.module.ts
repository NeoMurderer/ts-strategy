import { Module, INestMicroservice } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import ESBModule from './esb/esb.module';
import { Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Observable';

export class MicroservicesModule {
    static startMicroservice(): any {
        this.startMicroservice()
    }
    private defaultConfig = {
        transport: Transport.TCP,
        port: 8801
    }
    public startMicroservice(config  = this.defaultConfig): Promise<INestMicroservice> {
        return NestFactory.createMicroservice(ESBModule, config)
    }
    constructor () {
        this.startMicroservice().then((app) => {
            app.listen(() => console.log(`Microservice is listening ${this.defaultConfig.port}`));
        })
    }
}