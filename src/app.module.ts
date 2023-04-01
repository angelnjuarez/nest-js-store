import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { CustomersController } from './controllers/customers.controller';
import { BrandsController } from './controllers/brands.controller';
import { UsersController } from './controllers/users.controller';
import { OrdersController } from './controllers/orders.controller';
import { ProductService } from './services/product.service';

@Module({
  imports: [],
  controllers: [
    ProductsController,
    CategoriesController,
    CustomersController,
    BrandsController,
    UsersController,
    OrdersController,
  ],
  providers: [AppService, ProductService],
})
export class AppModule {}
