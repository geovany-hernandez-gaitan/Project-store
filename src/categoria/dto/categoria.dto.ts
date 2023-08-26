import { IsNotEmpty, IsNumber, IsString, MaxLength, IsDateString, IsOptional } from 'class-validator';

export class CreatecategoriaDto {
    @IsNotEmpty()
    @IsNumber()
    id?: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    categoria: string;
    
    @IsDateString()
    @IsOptional()
    created_at: string;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;
  }
  