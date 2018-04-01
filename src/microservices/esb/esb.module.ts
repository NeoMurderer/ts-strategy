import { Module, Global } from '@nestjs/common'

import { esbProviders } from './esb.providers';
import { ESBController } from './esb.controller';


@Module({
    controllers: [ESBController],
    components: [...esbProviders],
    exports: [...esbProviders],
})
export default class ESBModule {}