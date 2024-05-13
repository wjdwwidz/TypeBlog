import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {BlogController} from './blog.controller';
import {BlogService} from './blog.service';
import {BlogFileRepository, BlogMongoRepository} from './blog.repository';
import {Blog, BlogSchema} from "./blog.schema";

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://wjdwwidz:98EnUav1hag183S2@typeblog.2mo5hrp.mongodb.net/?retryWrites=true&w=majority&appName=TypeBlog',
        ),
        MongooseModule.forFeature([ { name : Blog.name, schema : BlogSchema }]),
    ], //외부 모듈 호출시 사용
    controllers : [BlogController],
    providers : [BlogService, BlogFileRepository,BlogMongoRepository],
})
export class AppModule {}
