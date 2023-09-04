import { Module } from '@nestjs/common';
import { FilespdfController } from './controllers/filespdf.controller';
import { FilespdfService } from './services/filespdf.service';

@Module({
    controllers: [FilespdfController],
    providers: [FilespdfService],

})

export class FilespdfModule {}