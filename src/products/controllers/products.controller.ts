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
import { ProductsService } from '../services/products.service';
import { CreateProductDto, FilterProductsDto } from '../dto/products.dto';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService:ProductsService){}

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOneProduct(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @Get()
  getProducts(@Query() params: FilterProductsDto) {
    return this.productsService.findAll(params);
  }

  @Post()
  createCategory(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }
}
