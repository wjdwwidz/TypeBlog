import {Controller} from '@nestjs/common'
import { BlogService } from './blog.service'

@Controller('blog')
export class BlogController{
    blogService : BlogService;
    constructor(){
        this.blogservice = new BlogService();
    }
}