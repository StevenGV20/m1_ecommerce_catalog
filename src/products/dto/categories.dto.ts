import { IsOptional, IsPositive, IsString, Min } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCategoryDto{
  @IsString()
  @ApiProperty({description: "Nombre de la categoria"})
  readonly categoryName: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto){}

export class FilterCategoriesDto{
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}

