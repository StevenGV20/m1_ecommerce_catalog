import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto,UpdateCategoryDto } from 'src/products/dto/categories.dto';

@Injectable()
export class CategoriesService {
  private categories = [{
    id:1,
    name:"category 1"
  }];

  findAll(){
    return [];
  }

  findOne(id:number){
    const product = null;
    if(!product){
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload:UpdateCategoryDto){

  }

  update(id:number,payload:CreateCategoryDto){
    const category = this.findOne(id);
    if(product){

    }
  }

  delete(id:number){

  }
}
