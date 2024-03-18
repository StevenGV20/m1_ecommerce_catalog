import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import {
  CreateProductDto,
  FilterProductsDto,
  UpdateProductDto,
} from '../dto/products.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  findAll(params: FilterProductsDto) {
    if (params) {
      const filters: FilterQuery<Product> = {};
      const { limit, offset } = params;
      const { minPrice, maxPrice } = params;
      const {category} = params
      if (minPrice && maxPrice) {
        filters.price = { $gte: minPrice, $lte: maxPrice };
      }
      if(category){
        filters.category = category;
      }
      return this.productModel
        .find(filters)
        .populate('category')
        .skip(offset)
        .limit(limit)
        .exec();
    }
    return this.productModel.find().populate('category').exec();
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).populate('category').exec();
    if (!product) {
      throw new NotFoundException(`product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    const product = this.productModel.create(payload);
    return product;
  }

  update(id: string, changes: UpdateProductDto) {
    const product = this.productModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!product) {
      throw new NotFoundException(`product #${id} not found`);
    }
    return product;
  }

  delete(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
