import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from 'src/products/dto/categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    private configService: ConfigService,
  ) {}
  private categories = [
    {
      id: 1,
      name: 'category 1',
    },
  ];

  findAll() {
    const apiKey = this.configService.get('API_KEY');
    const dbName = this.configService.get('DATABASE_NAME');
    return this.categories;
  }

  findOne(id: number) {
    const category = null;
    if (!category) {
      throw new NotFoundException(`category #${id} not found`);
    }
    return category;
  }

  create(payload: UpdateCategoryDto) {}

  update(id: number, payload: CreateCategoryDto) {
    const category = this.findOne(id);
    if (category) {
    }
  }

  delete(id: number) {}
}
