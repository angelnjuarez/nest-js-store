import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('products/filter') //No dinámico va primero
  getFilter() {
    return 'I am filter';
  }

  @Get('products/:productId') //los slash al final son opcionales, en otros frameworks no.
  getProduct(@Param('productId') productId: string) {
    //Recibimos el objeto, sin recorrer params
    return `Product ${productId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100, //Infiere number
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
