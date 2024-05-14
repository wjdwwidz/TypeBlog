import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
    @Prop({type: String, required: false})
    id : string;

    @Prop({type:String, required: true})
    title : string;

    @Prop({type:String, required:true})
    content : string;

    @Prop({type:String, required:true})
    name : string;

    @Prop({type:Date, required:true})
    createdDt : Date;

    @Prop({type:Date, required:false})
    updatedDt : Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);