import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get(':brandId')
  getBrand(@Param('brandId') brandId: string) {
    return `brand ${brandId}`;
  }
}
