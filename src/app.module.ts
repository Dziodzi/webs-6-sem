import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Controller,
  Get,
  Render,
  Req,
  Module,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Injectable()
export class ServerResponse implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      // Действия, выполняемые после вызова обработчика
      tap(() => console.log(`After... ${Date.now() - now}ms`)),
    );
  }
}
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ServerResponse,
    },
    {
      provide: AppService,
      useClass: AppService,
    },
  ],
})
export class AppModule {}

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
