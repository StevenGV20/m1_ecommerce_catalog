import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dto/products.dto';

@Injectable()
export class ProductsService {

  findAll(){

  }

  findOne(id:number){
    const product = null;
    if (!product) {
      throw new NotFoundException(`product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {

  }

  update(payload: UpdateProductDto) {

  }
}
