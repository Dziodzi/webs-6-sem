import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/UserModule';
import { CommentModule } from './comment/CommentModule';
import { PostModule } from './post/PostModule';
import { TaskModule } from './task/TaskModule';
import { PackageModule } from './package/PackageModule';

@Module({
  imports: [UserModule, CommentModule, PostModule, TaskModule, PackageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
