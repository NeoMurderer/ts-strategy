import { Module } from '@nestjs/common';
import { SQSModule } from './core/sqs/sqs.module';
import { SQSService, Queue } from './core/sqs/sqs.service';

// import CoreModule from './core/core.module';
import AuthModule from './core/auth/auth.module';

import ControllersModule from './controllers/controllers.module';
import DatabaseModule from './core/orm/database.module';
import { CatsModule } from './controllers/cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    components: [SQSService],
    imports: [ControllersModule, AuthModule, DatabaseModule, SQSModule]
})

export default class ApplicationModule {
    constructor(sqs: SQSService) {
        sqs.create({ qname: 'General' })
            .then( result =>   console.info('SQSService', result) )
            .catch( error =>   console.error('SQSService', error.message) )
    }
 }
