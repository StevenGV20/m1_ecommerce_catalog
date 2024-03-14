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
    const category = null;
    if(!category){
      throw new NotFoundException(`category #${id} not found`);
    }
    return category;
  }

  create(payload:UpdateCategoryDto){

  }

  update(id:number,payload:CreateCategoryDto){
    const category = this.findOne(id);
    if(category){

    }
  }

  delete(id:number){

  }
}
