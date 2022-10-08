import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {AdminModule} from '@adminjs/nestjs'

import {MongooseModule} from "@nestjs/mongoose";
import {BookModule} from "./schemas/book.module";


const DEFAULT_ADMIN = {
    email: 'admin@example.com',
    password: 'password',
}

const authenticate = async (email: string, password: string) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN);
    }
    return null;
};



@Module({
    imports: [
        AdminModule.createAdminAsync({
            useFactory: () => ({
                adminJsOptions: {
                    rootPath: '/admin',
                    resources: [],
                },
                auth: {
                    authenticate,
                    cookieName: 'adminjs',
                    cookiePassword: 'secret'
                },
                sessionOptions: {
                    resave: true,
                    saveUninitialized: true,
                    secret: 'secret'
                },
            }),
        }),
        BookModule,
        MongooseModule.forRoot("mongodb://127.0.0.1", {
            dbName: "Books"
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
}


