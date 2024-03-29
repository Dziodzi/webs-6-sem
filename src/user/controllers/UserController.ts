import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from '../services/UserService';
import { UserDTO } from '../dto/UserDTO';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('studio')
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Create user',
  })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Post('')
  async create(@Body() body: UserDTO): Promise<UserDTO> {
    return this.userService.createUser(body);
  }

  @ApiOperation({
    summary: 'Get user by username',
  })
  @ApiParam({ name: 'username', type: 'string' })
  @ApiResponse({
    status: 201,
    description: 'The user was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get('/byusername/:username')
  async getUserByUsername(
    @Param('username') username: string,
  ): Promise<UserDTO> {
    return this.userService.findUserUsername(username);
  }

  @ApiOperation({
    summary: 'Get user by id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 201,
    description: 'The user was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get('/byid/:id')
  async getUserById(@Param('id') id: string): Promise<UserDTO> {
    return this.userService.findUserId(id);
  }

  @ApiOperation({
    summary: 'Set admin role to user with provided username',
  })
  @ApiParam({ name: 'username', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The role was successfully assigned',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Patch('/adminroleusername/:username')
  async setUserRoleAdminUsername(@Param('username') username: string) {
    return this.userService.setAdminRoleUsername(username);
  }

  @ApiOperation({
    summary: 'Assign admin role to user with provided id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The role was successfully assigned',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Patch('/adminroleid/:id')
  async setUserRoleAdminId(@Param('id') id: string) {
    return this.userService.setAdminRoleId(id);
  }

  @ApiOperation({
    summary: 'Assign client role to user with provided username',
  })
  @ApiParam({ name: 'username', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The role was successfully assigned',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Patch('/clientroleusername/:username')
  async setUserRoleClientUsername(@Param('username') username: string) {
    return this.userService.setClientRoleUsername(username);
  }

  @ApiOperation({
    summary: 'Assign client role to user with provided id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The role was successfully assigned',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Patch('/clientroleid/:id')
  async setUserRoleClientId(@Param('id') id: string) {
    return this.userService.setClientRoleId(id);
  }

  @ApiOperation({
    summary: 'Delete user with provided username',
  })
  @ApiParam({ name: 'username', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The user was successfully deleted',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Delete('/byusername/:username')
  async deleteUserByUsername(@Param('username') username: string) {
    return this.userService.deleteUserByUsername(username);
  }

  @ApiOperation({
    summary: 'Delete the user with provided id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The user was successfully deleted',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Delete('/byid/:id')
  async deleteUserById(@Param('id') id: string) {
    return this.userService.deleteUserById(id);
  }
}
