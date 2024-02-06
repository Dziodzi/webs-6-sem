import { CommentService } from '../services/CommentService';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentDTO } from '../dto/CommentDTO';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import Promise from 'bluebird';

@ApiTags('studio')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOperation({
    summary: 'Create comment',
  })
  @ApiResponse({
    status: 201,
    description: 'The comment has been successfully created.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Post()
  async create(@Body() body: CommentDTO): Promise<CommentDTO> {
    return this.commentService.createComment(body);
  }

  @ApiOperation({
    summary: 'Get comment by id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The comment was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get(':id')
  async getCommentById(@Param('id') id: string): Promise<CommentDTO> {
    return this.commentService.findCommentById(id);
  }

  @ApiOperation({
    summary: 'Update content of the comment with provided id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiParam({ name: 'content', type: 'string' })
  @ApiResponse({
    status: 200,
    description:
      'The content of the comment with provided id was successfully updated',
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
    return this.commentService.editTextOfCommentById(id, content);
  }

  @ApiOperation({
    summary: 'Delete comment with provided id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The comment with provided id was successfully deleted',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return this.commentService.deleteCommentById(id);
  }
}
