import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter') //No dinámico va primero
  filterOne() {
    return {
      message: 'I am filter',
    };
  }

  @Get(':productId') //los slash al final son opcionales, en otros frameworks no.
  getOne(@Param('productId') productId: string) {
    //Recibimos el objeto, sin recorrer params
    return {
      message: 'Producto: ',
      body: {
        Product: productId,
      },
    };
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100, //Infiere number
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      messege: 'Litado de productos',
      body: {
        limit,
        offset,
        brand,
      },
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Acción de actualizar',
      id: id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
