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
import { CreateProductDto } from '../dto/products.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService:ProductsService){}

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOneProduct(@Res() response:Response, @Param('id', ParseIntPipe) id: number) {
    this.productsService.findOne(id);
  }

  @Get()
  getProducts(@Query() params: any) {
    const { limit, offset } = params;
    this.productsService.findAll();
  }

  @Post()
  createCategory(@Body() payload: CreateProductDto) {
    this.productsService.create(payload);
  }
}
