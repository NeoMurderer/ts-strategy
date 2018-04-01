
import { NestFactory } from '@nestjs/core'
import { RouterModule } from './router.module';
async function bootsrap() {
    const app = await NestFactory.create(RouterModule)
    app.listen(8001)
}

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
  
    // Fork workers.
    console.info('numCPUs', numCPUs)
    for (let i = 0; i < numCPUs / 2; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    bootsrap()
    console.log(`Worker ${process.pid} started`);
}

export class Router {}