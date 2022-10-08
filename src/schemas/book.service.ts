import {Model} from "mongoose";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";

import {Book} from "./book.model";


@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name) private readonly bookModel: Model<Book>
    ) {
    }

    async addNew(title: string, description: string) {
        const newBook = new this.bookModel({
            name: title,
            description: description
        });
        const result = await newBook.save();
        console.log("RESULT", result);
        return result.id as string;
    }

    async findAll(): Promise<Book[]> {
        return this.bookModel.find()
            .exec();
    }
}