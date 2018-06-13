import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import DatabaseModule from '../../core/orm/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from '../../schemas/cats.schema';
import { CatsController } from './cats.controller';
import { catsProviders } from './cats.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  components: [CatsService, ...catsProviders],
})
export class CatsModule {}