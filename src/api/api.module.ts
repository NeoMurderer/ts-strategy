import { Module } from '@nestjs/common'
import { CarRoute } from './routes/car.route';
@Module({
    controllers: [CarRoute],
    components: [],
    imports: []
})
export default class ApiModule {}