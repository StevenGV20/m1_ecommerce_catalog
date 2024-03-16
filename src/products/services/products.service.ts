import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { CreateProductDto, FilterProductsDto, UpdateProductDto } from '../dto/products.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Product.name) private productModel : Model<Product>
  ){}

  findAll(params:FilterProductsDto){
    if(params){
      const filters:FilterQuery<Product> = {};
      const { limit, offset } = params;
      const { minPrice, maxPrice } = params;
      if(minPrice && maxPrice){
        filters.price = { $gte: minPrice, $lte: maxPrice};
      }
      return this.productModel.find(filters).skip(offset).limit(limit).exec();
    }
    return this.productModel.find().exec();
  }

  findOne(id: string){
    const product = this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    const product = this.productModel.create(payload);
    return product;
  }

  update(payload: UpdateProductDto) {

  }
}
