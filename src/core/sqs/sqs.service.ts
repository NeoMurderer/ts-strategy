import { Component } from "@nestjs/common";
import { delay } from "bluebird";

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
    async create (queue: Queue) {
        return await true // SQSModule.rsmq.createQueue(queue)
    }
    async send(message: Message, queue: Queue): Promise<Number> {
        const messageID = await SQSModule.rsmq.sendMessage({
            qname: queue.qname,
            message: JSON.stringify(message)
        })
        return messageID
    }
}