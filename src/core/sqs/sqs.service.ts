import { Component } from "@nestjs/common";
import { delay } from "bluebird";
import { SQSModule } from "./sqs.module";
const RSMQPromise = require('rsmq-promise');

export interface Queue {
    qname: string
    vt?: number
    delay?: number
    maxsize?: number
}

export interface Message {

}
@Component()
export class SQSService {
    private rsmq: any
    constructor () {
        this.rsmq = new RSMQPromise({ 
            ns: 'rsmq' 
        })
    }
    async create (queue: Queue): Promise<any> {
        return await this.rsmq.createQueue(queue)
    }
    async send(message: Message, queue: Queue): Promise<Number> {
        const messageID = await this.rsmq.sendMessage({
            qname: queue.qname,
            message: JSON.stringify(message)
        })
        return messageID
    }
}