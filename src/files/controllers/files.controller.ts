import { Controller, Post, Get, UseInterceptors, UploadedFile, BadRequestException } from "@nestjs/common";
import { FilesService } from "../services/files.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { fileFilter } from "src/helpers/fileFilter.helper";
import { diskStorage } from "multer";
import { fileNamer } from "src/helpers/fileNamer.helper";

@Controller('files')
export class FilesController {
    constructor (private readonly filesService: FilesService) {}
   
   
   
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        //llamamos a filter de multer y le asignamos nuestro helper
        fileFilter: fileFilter,

        //Definimos el almacenamiento en donde se va guardar el archivo y lo renombramos 
        storage: diskStorage({
            destination: './static/products/',
            filename: fileNamer,

        }),
    }),
    )
    uploadFile (@UploadedFile() file: Express.Multer.File) {
          if (!file) {
            throw new BadRequestException('Asegurese que el archivo es una imagen');

          }            

          return {
             fileName: file.filename, 

          };
        }
    }




    // @Get('product/:imageId')
    // getImage() {
    // return 'Hola Mundo';

    


   