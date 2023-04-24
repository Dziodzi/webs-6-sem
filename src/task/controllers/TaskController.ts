import { TaskService } from '../services/TaskService';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskDTO } from '../dto/TaskDTO';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import Promise from 'bluebird';

@ApiTags('studio')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({
    summary: 'Create task',
  })
  @ApiResponse({
    status: 201,
    description: 'The task has been successfully created.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Post()
  async create(@Body() body: TaskDTO): Promise<TaskDTO> {
    return this.taskService.createTask(body);
  }

  @ApiOperation({
    summary: 'Get task by id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The task was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<TaskDTO> {
    return this.taskService.findTaskById(id);
  }

  @ApiOperation({
    summary: 'Update content of the task with provided id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiParam({ name: 'content', type: 'string' })
  @ApiResponse({
    status: 200,
    description:
      'The content of the task with provided id was successfully updated',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Patch(':id')
  async editTextById(
    @Param('id') id: string,
    @Body('content') content: string,
  ): Promise<void> {
    return this.taskService.editTextOfTaskById(id, content);
  }

  @ApiOperation({
    summary: 'Delete task with provided id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The task with provided id was successfully deleted',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return this.taskService.deleteTaskById(id);
  }
}
