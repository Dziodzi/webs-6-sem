import { PackageService } from '../services/PackageService';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PackageDTO } from '../dto/PackageDTO';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import Promise from 'bluebird';

@ApiTags('studio')
@Controller('packages')
export class PackageController {
  constructor(private readonly packageService: PackageService) {}

  @ApiOperation({
    summary: 'Create package',
  })
  @ApiResponse({
    status: 201,
    description: 'The package has been successfully created.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Post()
  async create(@Body() body: PackageDTO): Promise<PackageDTO> {
    return this.packageService.createPackage(body);
  }

  @ApiOperation({
    summary: 'Get package by id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The package was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get(':id')
  async getPackageById(@Param('id') id: string): Promise<PackageDTO> {
    return this.packageService.findPackageById(id);
  }

  @ApiOperation({
    summary: 'Update content of the package with provided id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiParam({ name: 'content', type: 'string' })
  @ApiResponse({
    status: 200,
    description:
      'The content of the package with provided id was successfully updated',
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
    return this.packageService.editTextOfPackageById(id, content);
  }

  @ApiOperation({
    summary: 'Delete package with provided id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The package with provided id was successfully deleted',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return this.packageService.deletePackageById(id);
  }
}
