import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class ResponseBodyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const res: any =
      context.getType<string>() === 'graphql'
        ? GqlExecutionContext.create(context).getContext().res // GraphQL
        : context.switchToHttp().getResponse(); // REST / other
    if (!res) {
      return next.handle();
    }
    res.locals ||= {};
    return next.handle().pipe(
      tap((data) => {
        res.locals.responseBody = data;
      }),
    );
  }
}
