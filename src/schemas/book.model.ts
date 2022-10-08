import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {ApiProperty} from "@nestjs/swagger";
import * as mongoose from "mongoose";


@Schema()
export class Book extends mongoose.Document {
    @Prop()
    @ApiProperty({example: 1, description: "The age of the Cat"})
    name: string;

    @ApiProperty({
        example: "Maine Coon",
        description: "The breed of the Cat",
    })
    @Prop()
    description: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);


