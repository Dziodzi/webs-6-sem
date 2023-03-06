import { CallHandler, ExecutionContext, Injectable, Module, NestInterceptor, Req } from "@nestjs/common";
// import { TemplateEngineModule } from 'template-engine-module';
import { Controller, Get, Render } from '@nestjs/common';
import { Observable, tap } from "rxjs";
/* @Module({
  imports: [
    TemplateEngineModule.forRoot({
      engine: 'pug',
      views: [__dirname + '/views'],
    }),
  ],
})
*/
@Controller()
export class IndexController {
  @Get('/index')
  @Render('index')
  getIndexPage(@Req() req) {
    if (req.user) {
      // Авторизованный пользователь
      return { user: req.user };
    } else {
      // Неавторизованный пользователь
      return { user: null };
    }
  };
  getAboutPage() {
    return {
      pageTitle: 'Главная',
    };
  }
}

@Controller()
export class TeamController {
  @Get('/team')
  @Render('team')
  getAboutPage() {
    return {
      pageTitle: 'Наша команда',
    };
  }
}
@Controller()
export class ProgramsController {
  @Get('/programs')
  @Render('programs')
  getAboutPage() {
    return {
      pageTitle: 'Наша команда',
    };
  }
}

@Controller()
export class PlannerController {
  @Get('/planner')
  @Render('planner')
  getAboutPage() {
    return {
      pageTitle: 'Планер',
    };
  }
}

@Controller()
export class ReviewsController {
  @Get('/reviews')
  @Render('reviews')
  getAboutPage() {
    return {
      pageTitle: 'Отзывы',
    };
  }
}

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const elapsed = Date.now() - now;
        response.header('X-Response-Time', `${elapsed}ms`);
      }),
    );
  }
}
export class AppModule {}
