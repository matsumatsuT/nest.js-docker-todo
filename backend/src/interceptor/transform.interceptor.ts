import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { UserEntity } from 'src/entities/user.entity'

@Injectable()
export class ExcludePasswordInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (Array.isArray(data)) {
          return data.map((item) => this.removePassword(item))
        }
        return this.removePassword(data)
      }),
    )
  }

  // APIで公開したくないのでpasswordを除外する
  private removePassword(data: UserEntity) {
    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = data
      return result
    }
    return data
  }
}
