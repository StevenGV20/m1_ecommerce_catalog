import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsController } from './../products/controllers/products.controller';
import { CategoriesController } from './../products/controllers/categories.controller';
import { CategoriesService } from './../products/services/categories.service';
import { ProductsService } from './../products/services/products.service';
import { Product, ProductSchema } from './entities/product.entity';
import { Category, CategorySchema } from './entities/category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Category.name,
        schema: CategorySchema
      },
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductsController, CategoriesController],
  providers: [CategoriesService, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
