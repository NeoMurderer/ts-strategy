import { Module } from '@nestjs/common';
import { SQSService } from './sqs.service';
const RedisSMQ = require('rsmq-promise')

@Module({
    components: [SQSService],
    imports: []
})
export class SQSModule {
    static rsmq: any;
    rsmq: any
    constructor() {
        this.rsmq = new RedisSMQ({ 
            ns: 'rsmq' 
        })
    }
}