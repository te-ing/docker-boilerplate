import { Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('api/post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  async createPost() {
    return await this.postService.createPost();
  }

  @Get()
  async getPostList() {
    return await this.postService.getPostList();
  }
}
