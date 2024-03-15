import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { extend } from 'joi';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document{
  @Prop({required: true})
  productName: string;

  @Prop({required: true})
  productDescription: string;

  @Prop({type: Number,required:true})
  price: number;

  @Prop({type: Number,required:true})
  stock: number;

  @Prop({required:true})
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
