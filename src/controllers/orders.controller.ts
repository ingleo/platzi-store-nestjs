import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get(':orderId')
  getOrder(@Param('orderId') orderId: string) {
    return `order ${orderId}`;
  }
}
