import { Controller, Post } from "@nestjs/common";
import { ProveedorService } from "../services/proveedor.service";

@Controller('proveedor')
export class ProveedorController{
   constructor(private readonly proveedorService: ProveedorService) {}

   @Post()
   UploadCategoria() {
       return 'Hola Proveedor'
   }

}