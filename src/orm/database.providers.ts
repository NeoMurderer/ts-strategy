import { Sequelize } from 'sequelize-typescript'
import { DatabaseService } from './database.service'
export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      /* const sequelize = {
        async sync () {},
        models: Array,
        addModels(models: Array<any>) {
          this.models = models
          console.info('Add models', models)
        }
      } */
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '46.37.213.81',
        port: 3306,
        username: 'root',
        password: 'test',
        database: 'ts',
      });
      DatabaseService.syncModels(sequelize)
      await sequelize.sync()
      return sequelize
    },
  },
];