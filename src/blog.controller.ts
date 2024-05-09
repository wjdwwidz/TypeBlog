import { Controller, Param, Body, Delete, Get, Post, Put} from '@nestjs/common';
import { BlogService } from './blog.service'

@Controller('blog')
export class BlogController{

    constructor(private blogService : BlogService){}

    @Get()
    getAllPosts(){
        console.log('모든 게시글 가져오기');
        return this.blogService.getAllPosts();
    }

    @Post()
    CreatePost(@Body() postDto){ //HTTP 요청의 body 내용을 post 에 할당
        console.log('게시글 작성');
        this.blogService.createPost(postDto);
        return 'success';
    }

    @Get('/:id')
    async getPost(@Param('id') id:String){
        console.log('게시글 하나 가져오기');

        const post = await this.blogService.getPost(id);
        console.log(post);
        return post;
    }

    @Delete('/:id')
    deletePost(@Param('id') id:String){
        console.log('게시글 삭제');
        this.blogService.delete(id);
        return 'success';
    }
    
    @Put('/:id')
    updatePost(@Param('id') id, @Body() postDto){
        console.log(`[${id}] 게시글 업데이트`, postDto);
        return this.blogService.updatePost(id, postDto);

    }

}