import { Module } from "@nestjs/common";
import { ProveedorController } from "./controllers/proveedor.controller";
import { ProveedorService } from "./services/proveedor.service";

@Module({
    controllers: [ProveedorController],
    providers: [ProveedorService],
})

export class ProveedorModule {}

