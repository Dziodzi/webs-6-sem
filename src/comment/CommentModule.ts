import { CommentController } from './controllers/CommentController';
import { CommentService } from './services/CommentService';
import { Module } from '@nestjs/common';

@Module({
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
