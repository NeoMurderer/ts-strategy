import { Module } from '@nestjs/common';

import CoreModule from './core/core.module';
import AuthModule from './core/auth/auth.module';

import ControllersModule from './controllers/controllers.module';
import DatabaseModule from './core/orm/database.module';
import { SQSModule } from './core/sqs/sqs.module';
import { SQSService, Queue } from './core/sqs/sqs.service';

@Module({
    components: [SQSService],
    imports: [ControllersModule, AuthModule, DatabaseModule, SQSModule]
})

export default class ApplicationModule {
    constructor(sqs: SQSService) {
        sqs.create({ qname: 'General' })
            .then( result =>   console.info('', result) )
    }
 }
