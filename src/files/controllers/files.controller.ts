<<<<<<< HEAD
import { Controller, Post } from "@nestjs/common";
import { FilesService } from "../services/files.service";

@Controller('files')
export class FilesController {
    constructor (private readonly filesService: FilesService) {}
   
    @Post('product')
    UploadImage () {
        return 'Hola Mundo';
    }
}
=======
import { Controller, Post } from '@nestjs/common';
import { FilesService } from '../services/files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('product')
  UploadImage() {
    return 'Hola Mundo';
  }
}
>>>>>>> c0fc9c5c4be05aac411a4a4fb88e0cee7b3ab454
