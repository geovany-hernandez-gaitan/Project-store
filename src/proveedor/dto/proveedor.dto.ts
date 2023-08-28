import { IsNotEmpty, IsNumber, IsString, MaxLength, IsOptional, IsDateString  } from "class-validator";

export class CreateproveedorDto {

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    proveedor: string;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsDateString()
    @IsOptional()
    created_at: string;
}