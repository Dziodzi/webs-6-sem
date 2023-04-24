import { PostService } from '../services/PostService';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostDTO } from '../dto/PostDTO';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import Promise from 'bluebird';

@ApiTags('studio')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({
    summary: 'Create post',
  })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Post()
  async create(@Body() body: PostDTO): Promise<PostDTO> {
    return this.postService.createPost(body);
  }

  @ApiOperation({
    summary: 'Get post by id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The post was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<PostDTO> {
    return this.postService.findPostById(id);
  }

  @ApiOperation({
    summary: 'Update content of the post with provided id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiParam({ name: 'content', type: 'string' })
  @ApiResponse({
    status: 200,
    description:
      'The content of the post with provided id was successfully updated',
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
    return this.postService.editTextOfPostById(id, content);
  }

  @ApiOperation({
    summary: 'Delete post with provided id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The post with provided id was successfully deleted',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return this.postService.deletePostById(id);
  }
}
