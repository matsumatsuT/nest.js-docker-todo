import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/user/user.service'
import { SignInDto } from './dto/auth.dto'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: SignInDto) {
    const user = await this.userService.user({ email: data.email })

    if (user.password !== data.password) {
      throw new UnauthorizedException('Invalid email or password')
    }

    const payload = { sub: user.id, email: user.email, name: user.name }

    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
