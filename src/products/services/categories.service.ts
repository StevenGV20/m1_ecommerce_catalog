import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from 'src/products/dto/categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('MONGO') private database:any,
    private configService: ConfigService,
  ) {}

  async findAll() {
    const categoriesCollection = this.database.collection('categories');
    const categories = await categoriesCollection.find().toArray();
    console.log(categories);
    return categories;
  }

  findOne(id: number) {
    const category = null;
    if (!category) {
      throw new NotFoundException(`category #${id} not found`);
    }
    return category;
  }

  create(payload: CreateCategoryDto) {}

  update(id: number, payload: UpdateCategoryDto) {
    const category = this.findOne(id);
    if (category) {
    }
  }

  delete(id: number) {}
}
