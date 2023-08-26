<<<<<<< HEAD
import { Module } from "@nestjs/common";
import { FilesController } from "./controllers/files.controller";
import { FilesService } from "./services/files.service";

@Module({
    controllers: [FilesController],
    providers: [FilesService],
})
export class FilesModule {}
=======
import { Module } from '@nestjs/common';
import { FilesController } from './controllers/files.controller';
import { FilesService } from './services/files.service';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
>>>>>>> c0fc9c5c4be05aac411a4a4fb88e0cee7b3ab454
