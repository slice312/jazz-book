import {Body, Controller, Get, Post} from "@nestjs/common";
import {
    ApiOperation,
    ApiResponse,
    ApiTags,
} from "@nestjs/swagger";
import {BookService} from "./book.service";
import {Book} from "./book.model";


@ApiTags("book")
@Controller("book")
export class BookController {
    constructor(private readonly bookService: BookService) {
    }

    @Post()
    @ApiOperation({summary: "Create book"})
    @ApiResponse({status: 403, description: "Forbidden."})
    async addBook(
        @Body("title") title: string,
        @Body("description") description: string
    ) {
        const id = await this.bookService.addNew(title, description);
        return {id};
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: "The found record",
        type: Book,
    })
    async getAllBooks() {
        return await this.bookService.findAll();
    }
}
