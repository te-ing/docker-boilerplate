import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entity/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  async createPost() {
    try {
      const post = new PostEntity();
      post.title = String(Math.floor(Math.random() * 10000));
      await this.postRepository.save(post);
      return post;
    } catch {
      throw new HttpException(
        '포스트 생성에 실패했습니다',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getPostList() {
    return await this.postRepository.find();
  }
}
