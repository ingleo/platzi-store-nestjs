import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId')
  getCategory(@Param('categoryId') categoryId: string) {
    return `category ${categoryId}`;
  }

  @Get(':id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `category ${id} - product ${productId}`;
  }
}
