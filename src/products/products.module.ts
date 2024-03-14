import { Module } from '@nestjs/common';
import { ProductsController } from './../products/controllers/products.controller';
import { CategoriesController } from './../products/controllers/categories.controller';
import { CategoriesService } from './../products/services/categories.service';
import { ProductsService } from './../products/services/products.service';

@Module({
  controllers: [ProductsController,CategoriesController],
  providers: [CategoriesService,ProductsService]
})
export class ProductsModule {}
