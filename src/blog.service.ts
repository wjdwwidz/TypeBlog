//메모리에 저장하는 블로그 서비스 클래스
import { PostDto } from './blog.model';
import { BlogFileRepository, BlogRepository } from './blog.repository';

export class BlogService {
    posts = [];
    blogRepository : BlogRepository;

    constructor(){
        this.blogRepository = new BlogFileRepository();
    }

    async getAllPosts(){
        return await this.blogRepository.getAllPost();
    }
    
    createPost(postDto: PostDto){
        this.blogRepository.createPost(postDto);
    }

    // getPost(id){
    // const post = this.posts.find((post)=>{
    //     return post.id === id;
    // });
    // console.log(post);
    // return post;
    // }

    // delete(id){
    //     const filteredPosts = this.posts.filter((post)=> post.id !== id);
    //     this.posts = [...filteredPosts];
    // }

    // updatePost (id, postDto : PostDto){
    //     let updateIndex = this.posts.findIndex((post)=> post.id === id);
    //     const updatePost= {id, ...postDto, updatedDt : new Date()};
    //     this.posts[updateIndex] = updatePost;
    //     return updatePost;
    // }
}

