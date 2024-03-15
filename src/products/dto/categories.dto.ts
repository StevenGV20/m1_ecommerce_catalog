import { IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCategoryDto{
  @IsString()
  @ApiProperty({description: "Nombre de la categoria"})
  readonly categoryName: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto){}

