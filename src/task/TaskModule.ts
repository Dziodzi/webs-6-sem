import { TaskService } from './services/TaskService';
import { Module } from '@nestjs/common';
import { TaskController } from './controllers/TaskController';

@Module({
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
