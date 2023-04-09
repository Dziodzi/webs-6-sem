import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { AppService } from './app.service';
import session from 'express-session';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private user = '';

  @Get('/')
  @Render('index')
  getMain() {
    return { user: this.user };
  }
  @Get('/reviews')
  @Render('reviews')
  getReviews() {
    console.log('reviews');
    return { user: this.user };
  }

  @Get('/planner')
  @Render('planner')
  getPlanner() {
    console.log('planner');
    return { user: this.user };
  }

  @Get('/programs')
  @Render('programs')
  getPrograms() {
    console.log('programs');
    return { user: this.user };
  }

  @Get('/team')
  @Render('team')
  getTeam() {
    console.log('team');
    return { user: this.user };
  }

  @Get('/login')
  @Render('login')
  getLogin() {
    console.log('login');
    return {};
  }

  @Post('/login')
  @Render('index')
  login(@Body() body: { username: string }): { user: string } {
    const { username } = body;
    this.user = username;
    return { user: this.user };
  }

  @Get('/logoutIndex')
  @Render('index')
  logoutIndex() {
    return { user: null };
  }

  @Get('/logoutPlanner')
  @Render('planner')
  logoutPlanner() {
    return { user: null };
  }

  @Get('/logoutPrograms')
  @Render('programs')
  logoutPrograms() {
    return { user: null };
  }

  @Get('/logoutReviews')
  @Render('reviews')
  logoutReviews() {
    return { user: null };
  }

  @Get('/logoutTeam')
  @Render('team')
  logoutTeam() {
    return { user: null };
  }
}
