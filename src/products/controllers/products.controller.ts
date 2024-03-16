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
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import {
  CreateProductDto,
  FilterProductsDto,
  UpdateProductDto,
} from '../dto/products.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOneProduct(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @Get()
  @ApiOperation({ summary: 'Lista de productos' })
  getProducts(@Query() params: FilterProductsDto) {
    return this.productsService.findAll(params);
  }

  @Post()
  createProduct(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateProduct(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  deleteProduct(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.delete(id);
  }
}
