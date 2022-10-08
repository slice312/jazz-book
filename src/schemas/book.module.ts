import {MongooseModule} from "@nestjs/mongoose";
import {Book, BookModel} from "./book.schema";
import {BookService} from "./book.service";
import {Module} from "@nestjs/common";


@Module({
    imports: [MongooseModule.forFeature([{name: Book.name, schema: BookModel}])],
    providers: [BookService],
})
export class BookModule {
}