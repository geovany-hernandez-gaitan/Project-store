import { Controller, Post, Res, Param, Get, UseInterceptors, UploadedFile, BadRequestException } from "@nestjs/common";
import { FilesService } from "../services/files.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { fileFilter } from "src/helpers/fileFilter.helper";
import { diskStorage } from "multer";
import { fileNamer } from "src/helpers/fileNamer.helper";
import path from "path";
import { Response } from "express";

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

         // return {
           //  fileName: file.filename, 

           const url = `${file.filename}`;

           return { url };

          }

    
          @Get('product/:imageName')
          findProduct(@Res() res: Response, @Param('imageName') imageName: string){
            const path = this.filesService.getStaticImageName(imageName);

            res.sendFile(path);

          }

          @Get('user/:imageName')
          findUser(@Res() res:Response, @Param('imageName')imageName:string) {
              const path = this.filesService.getStaticImageName(imageName);
          
                  //return path;
                  res.sendFile(path);
                  return path;
        }
      }





    // @Get('product/:imageId')
    // getImage() {
    // return 'Hola Mundo';

    


   