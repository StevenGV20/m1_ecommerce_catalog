import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  Res,
  ParseIntPipe
} from '@nestjs/common';

import { Response } from 'express';
import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto } from 'src/products/dto/categories.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService:CategoriesService){}

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getCategory(@Res() response:Response, @Param('id', ParseIntPipe) id: number) {
    this.categoriesService.findOne(id);
  }

  @Get()
  @ApiOperation({summary:'Lista de productos'})
  getCategoriesPag(@Query() params: any) {
    const { limit, offset } = params;
    this.categoriesService.findAll();
  }

  @Post()
  createCategory(@Body() payload: CreateCategoryDto) {
    this.categoriesService.create(payload);
  }

  @Put(':id')
  updateCategory(@Param('id', ParseIntPipe) id: number, @Body() payload: CreateCategoryDto) {
    this.categoriesService.update(id,payload);
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    this.categoriesService.delete(id);
  }
}
