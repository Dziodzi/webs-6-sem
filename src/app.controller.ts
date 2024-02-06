import { Get, Controller, Render, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';r
import { AppService } from './app.service';
import session from 'express-session';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private user = '';

  @ApiOperation({
    summary: 'Gets the statics of index page',
  })
  @ApiResponse({
    status: 200,
    description: 'The page was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get()
  @Render('index')
  getMain() {
    return { user: this.user };
  }

  @ApiOperation({
    summary: 'Gets the statics of team page',
  })
  @ApiResponse({
    status: 200,
    description: 'The page was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get('/team')
  @Render('team')
  getTeam() {
    console.log('team');
    return { user: this.user };
  }

  @ApiOperation({
    summary: 'Gets the statics of programs page',
  })
  @ApiParam({ name: 'username', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The page was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })

  @Get('/programs')
  @Render('programs')
  getPrograms() {
    console.log('programs');
    return { user: this.user };
  }

  @ApiOperation({
    summary: 'Gets the statics of planner page',
  })
  @ApiParam({ name: 'username', type: 'string' })
  @ApiResponse({
    status: 201,
    description: 'The page was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get('/planner')
  @Render('planner')
  getPlanner() {
    console.log('planner');
    return { user: this.user };
  }

  @ApiOperation({
    summary: 'Gets the statics of reviews page',
  })
  @ApiParam({ name: 'username', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The page was successfully provided.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Get('/reviews')
  @Render('reviews')
  getReviews() {
    console.log('reviews');
    return { user: this.user };
  }

  @ApiOperation({
    summary: 'Gets the statics of login page',
  })
  @ApiResponse({
    status: 200,
    description: 'The page was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })

  @Post('/login')
  @Render('index')
  login(@Body() body: { username: string }): { user: string } {
    const { username } = body;
    this.user = username;
    return { user: this.user };
  }


  @ApiOperation({
    summary: 'Logging out',
  })
  @ApiResponse({
    status: 200,
    description: 'The log out was successfully provided',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  
  @Get('/logoutIndex')
  @Render('index')
  logoutIndex() {
    return { user: null };
  }
}
