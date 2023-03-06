import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  getIndex() {
    console.log('test');
    return {};
  }

  @Get('/reviews')
  @Render('reviews')
  getReviews() {
    console.log('reviews');
    return {};
  }

  @Get('/planner')
  @Render('planner')
  getPlanner() {
    console.log('planner');
    return {};
  }

  @Get('/programs')
  @Render('programs')
  getPrograms() {
    console.log('programs');
    return {};
  }

  @Get('/team')
  @Render('team')
  getTeam() {
    console.log('team');
    return {};
  }
}
