import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Category extends Document{
  @Prop({type: String})
  categoryName: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

