import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get(':customerId')
  getCustomer(@Param('customerId') customerId: string) {
    return `customer ${customerId}`;
  }
}
