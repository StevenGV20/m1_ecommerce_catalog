import { IsString,IsNumber,IsNotEmpty,IsUrl, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto{
  @IsString()
  @IsNotEmpty({message:"El campo productName no puede ser vacio"})
  readonly productName: string;

  @IsString()
  @IsNotEmpty({message:"El campo productDescription no puede ser vacio"})
  readonly productDescription: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive({message:"El campo price debe ser mayor o igual a 0"})
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive({message:"El campo stock debe ser mayor o igual a 0"})
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto){}
