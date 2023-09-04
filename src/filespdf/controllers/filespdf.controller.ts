import { Controller, Post, Get, UseInterceptors, UploadedFile, BadRequestException } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { fileNamer } from "src/helpers/fileNamer.helper";
import { FilespdfService } from '../services/filespdf.service';
import { fileFilterpdf } from "../helpers/filespdfFilter.herper";

@Controller('filespdf')
export class FilespdfController {
    constructor (private readonly filespdfController: FilespdfService) {}
   
   
   
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        //llamamos a filter de multer y le asignamos nuestro helper
        fileFilter: fileFilterpdf,

        //Definimos el almacenamiento en donde se va guardar el archivo y lo renombramos 
        storage: diskStorage({
            destination: './src/filespdf/archivos/',
            filename: fileNamer,

        }),
    }),
    )
    uploadFile (@UploadedFile() file: Express.Multer.File) {
          if (!file) {
            throw new BadRequestException('Asegurese que el archivo es pdf');

          }            

          return {
             fileName: file.filename, 

          };
        }
    }



