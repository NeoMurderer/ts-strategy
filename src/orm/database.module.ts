import { Module, Global } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'

import { databaseProviders } from './database.providers';

@Module({
    controllers: [],
    components: [...databaseProviders],
    exports: [...databaseProviders],
})
export default class DatabaseModule {}