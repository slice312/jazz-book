import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";


@Schema()
export class Book extends mongoose.Document {
    @Prop()
        name: string;

    @Prop()
        description: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);


