import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  @Get(':productId')
  getProducts(@Param('productId') productId: any) {
    return `product ${productId}`;
  }
}
