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
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'test',
      });
      DatabaseService.syncModels(sequelize)
      await sequelize.sync()
      return sequelize
    },
  },
];