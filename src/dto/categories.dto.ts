import { IsString } from 'class-validator';

export class CreateCategoryDto{
  @IsString()
  readonly productName: string;
}

export class UpdateCategoryDto{
  @IsString()
  readonly productName: string;
}

