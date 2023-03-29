import { Controller, Get , Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Yo soy nuevo, ah';
  }

  @Get('/ruta/') //los slash al final son opcionales, en otros frameworks no.
  hello() {
    return 'con /sas/';
  }

  @Get('products/:productId') //los slash al final son opcionales, en otros frameworks no.
  getProduct(@Param('productId') productId: string) {
    return `Product ${productId}`;
  }
}
