import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtPayload, SignInDto, SignInResponseDto } from './dto/auth.dto'
import { AuthGuard } from './auth.guard'
import { Public } from 'src/metaData'
import { ApiOkResponse } from '@nestjs/swagger'

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOkResponse({
    description: '認証機能',
    type: SignInResponseDto,
  })
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto)
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: Request & { user: JwtPayload }) {
    return req.user
  }
}
