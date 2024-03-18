import { JwtModuleAsyncOptions } from '@nestjs/jwt';
import appConfig from './app.config';

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => ({
    secret: appConfig().appSecret,
    signOptions: { expiresIn: '7d' },
  }),
};
