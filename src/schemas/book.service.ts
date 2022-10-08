import {Model} from "mongoose";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";

import {Book, BookDocument} from "./book.schema";


@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name) private readonly bookModel: Model<BookDocument>
    ) {
    }

    async addNew(title: string) {
        const newBook = new this.bookModel({

        });
    }

    async findAll(): Promise<Book[]> {
        return this.bookModel.find()
            .exec();
    }
}