import { Sequelize } from 'sequelize-typescript'
import { DatabaseService } from './database.service'

import * as mongoose from 'mongoose'

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'tree',
        password: 'tree',
        database: 'ts',
        operatorsAliases: false,
        logging: false,
      })
      const models = await DatabaseService.syncModels(sequelize)
      await sequelize.sync()
      return sequelize
    },
  },
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/nest'),
  },
];