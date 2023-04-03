import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.ententy';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Injectable()
export class ProductService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 122,
      stock: 10,
      image: 'https://picsum.photos/200/300',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    //Error first
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return this.products;
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.products.splice(index, 1);
      return true;
    }
    throw new NotFoundException(`Product #${id} not found`);
  }
}
