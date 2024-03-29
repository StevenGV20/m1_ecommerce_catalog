import { IsString,IsNumber,IsNotEmpty,IsUrl, IsPositive, IsOptional, Min, ValidateIf, ValidateNested, IsMongoId, IsArray } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
export class CreateProductDto{
  @IsString()
  @IsNotEmpty({message:"El campo productName no puede ser vacio"})
  @ApiProperty({description: "Nombre del producto"})
  readonly productName: string;

  @IsString()
  @IsNotEmpty({message:"El campo productDescription no puede ser vacio"})
  @ApiProperty({description: "Descripcion del producto"})
  readonly productDescription: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive({message:"El campo price debe ser mayor o igual a 0"})
  @ApiProperty({description: "Precio del producto"})
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive({message:"El campo stock debe ser mayor o igual a 0"})
  @ApiProperty({description: "Stock del producto"})
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({description: "URL de la imagen del producto"})
  readonly image: string;

  @IsNotEmpty({message:"Debes elegir una categoria"})
  @ApiProperty({description: "Categoria del producto"})
  @IsMongoId()
  readonly category: string;

  @IsNotEmpty({message: "Agregar palabras clave para filtrar el producto rapidamente."})
  @IsArray()
  @ApiProperty({description: "Agregar palabras clave para filtrar el producto rapidamente."})
  readonly quickFilter: any;
}

export class UpdateProductDto extends PartialType(CreateProductDto){}


export class FilterProductsDto{
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;

  @IsOptional()
  @Min(0)
  minPrice: number;

  @ValidateIf((params) => params.minPrice)
  @IsPositive()
  maxPrice: number;

  @IsOptional()
  @IsMongoId()
  category: string;
}

