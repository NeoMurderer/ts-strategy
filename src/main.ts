import { NestFactory } from '@nestjs/core'
import ApplicationModule from './app.module'

async function bootsrap() {
    const app = await NestFactory.create(ApplicationModule)
    app.listen(3000)
}

bootsrap()
