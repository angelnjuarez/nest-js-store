import {
  Controller,
  Get,
  //Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  //Res,
} from '@nestjs/common';
//import { Response } from 'express';

import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get('filter') //No dinámico va primero
  filterOne() {
    return {
      message: 'I am filter',
    };
  }

  //Funciona con express//
  // @Get(':productId')
  // @HttpCode(HttpStatus.ACCEPTED)
  // getOne(@Res() response: Response, @Param('productId') productId: string) {
  //   response.status(200).send({
  //     message: 'Producto: ',
  //     body: {
  //       Product: productId,
  //     },
  //   });
  // }

  @Get(':productId') //los slash al final son opcionales, en otros frameworks no.
  @HttpCode(HttpStatus.ACCEPTED) //Código de respuesta
  getOne(@Param('productId') productId: string) {
    //Recibimos el objeto, sin recorrer params
    return this.productService.findOne(+productId); //+ convierte a number
  }

  @Get()
  getProducts() {
    // @Query('limit') limit = 100, //Infiere number
    // @Query('offset') offset = 0,
    // @Query('brand') brand: string,
    return this.productService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'Acción de crear',
    //   payload,
    // };
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   message: 'Acción de actualizar',
    //   id: id,
    //   payload,
    // };
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(+id);
  }
}
