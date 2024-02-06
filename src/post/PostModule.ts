import { PostService } from './services/PostService';
import { Module } from '@nestjs/common';
import { PostController } from './controllers/PostController';

@Module({
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
