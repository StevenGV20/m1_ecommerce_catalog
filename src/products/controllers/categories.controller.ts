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

import { MongoIdPipe } from '../../common/mongo-id/mongo-id.pipe';
import { Response } from 'express';
import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto,UpdateCategoryDto,FilterCategoriesDto } from 'src/products/dto/categories.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService:CategoriesService){}

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getCategory(@Param('id',MongoIdPipe) id: string) {
    return this.categoriesService.findOne(id);
  }

  @Get()
  @ApiOperation({summary:'Lista de productos'})
  getCategoriesPag(@Query() params: FilterCategoriesDto) {
    return this.categoriesService.findAll(params);
  }

  @Post()
  createCategory(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  updateCategory(@Param('id',MongoIdPipe) id: string, @Body() payload: UpdateCategoryDto) {
    return this.categoriesService.update(id,payload);
  }

  @Delete(':id')
  deleteCategory(@Param('id',MongoIdPipe) id: string) {
    return this.categoriesService.delete(id);
  }
}
