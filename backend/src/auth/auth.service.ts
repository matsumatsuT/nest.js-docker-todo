import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.userService.user({ email: email })

    if (user.password !== pass) {
      throw new UnauthorizedException('Invalid email or password')
    }

    const payload = { sub: user.id, email: user.name }

    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
