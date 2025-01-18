import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(email: string, pass: string) {
    const user = await this.userService.user({ email: email })
    if (user.password !== pass) {
      throw new UnauthorizedException('Invalid email or password')
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user // passwordは返さない

    return result
  }
}
