import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpCode,
  HttpStatus,
  Res,
  ParseIntPipe,
} from '@nestjs/common';

/* import { Response } from 'express'; */

import { ProductsService } from '../services/products.service';
import { CustomParseIntPipe } from '../common/custom-parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    /* return {
      message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    }; */
    return this.productService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `product filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    /* response.status(200).send({
      message: `product ${productId}`,
    }); */
    return this.productService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    /* return {
      message: 'Creating action',
      payload,
    }; */
    return this.productService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', CustomParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    /*  return {
      message: 'Updating action',
      id,
      payload,
    }; */
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.remove(+id);
  }
}
