import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter') //No dinámico va primero
  getFilter() {
    return 'I am filter';
  }

  @Get(':productId') //los slash al final son opcionales, en otros frameworks no.
  getProduct(@Param('productId') productId: string) {
    //Recibimos el objeto, sin recorrer params
    return `Product ${productId}`;
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100, //Infiere number
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }
}
