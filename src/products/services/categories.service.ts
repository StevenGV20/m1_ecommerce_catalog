import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  CreateCategoryDto,
  FilterCategoriesDto,
  UpdateCategoryDto,
} from 'src/products/dto/categories.dto';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  findAll(params: FilterCategoriesDto) {
    if(params){
      const { limit, offset } = params;
      return this.categoryModel.find().skip(offset).limit(limit).exec();
    }
    return this.categoryModel.find().exec();
  }

  async findOne(id: string) {
    const category = await this.categoryModel.findById(id).exec();
    if (!category) {
      throw new NotFoundException(`category #${id} not found`);
    }
    console.log("category",category);
    return category;
  }

  create(payload: CreateCategoryDto) {
    const newCategory = new this.categoryModel(payload);
    return newCategory.save();
  }

  update(id: string, changes: UpdateCategoryDto) {
    const category = this.categoryModel
      .findByIdAndUpdate(id, { $set: changes }, {new: true})
      .exec();
    if (!category) {
      throw new NotFoundException(`category #${id} not found`);
    }
    return category;
  }

  delete(id: string) {
    return this.categoryModel.findByIdAndDelete(id);
  }
}
