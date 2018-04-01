import { Sequelize } from 'sequelize-typescript'
import { eHealth } from './providers/ehealth';
export const esbProviders = [
  {
    provide: 'eHealth',
    useFactory: async () => {
        const eHealthProvider = new eHealth()
        return eHealthProvider
    }
  }
]
