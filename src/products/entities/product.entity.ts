import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Category } from './category.entity';

@Schema()
export class Product extends Document {
  @Prop({ required: true, unique: true })
  productName: string;

  @Prop({ required: true })
  productDescription: string;

  @Prop({ type: Number, required: true, index: true })
  price: number;

  @Prop({ type: Number, required: true })
  stock: number;

  @Prop({ required: true })
  image: string;

  @Prop({ type: Types.ObjectId, ref: Category.name })
  category: Category | Types.ObjectId;

  @Prop({
    type: [{ name: { type: String } }],
  })
  quickFilter: Types.Array<Record<string, any>>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.index({ price: 1, stock: -1 });
