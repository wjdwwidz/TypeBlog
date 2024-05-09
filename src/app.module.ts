import { Module } from '@nestjs/common';
import {BlogController} from './blog.controller';
import {BlogService} from './blog.service';
import {BlogFileRepository} from './blog.repository';

@Module({
    imports: [], //외부 모듈 호출시 사용
    controllers : [BlogController],
    providers : [BlogService, BlogFileRepository],
})
export class AppModule {}
