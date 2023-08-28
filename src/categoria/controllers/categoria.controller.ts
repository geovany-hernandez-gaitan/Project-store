import { Controller, Post } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";

@Controller('categoria')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {}

    @Post('product')
    UploadCategoria() {
        return 'Hola Categoría'
    }

}