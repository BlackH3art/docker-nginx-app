import { Controller, Inject, Get } from '@nestjs/common';

import { InvoiceService } from './invoice.service';
import { Prisma, SaleInvoice } from '@prisma/client';

@Controller('invoices')
export class InvoiceController {
  constructor(@Inject(InvoiceService) private invoiceService: InvoiceService) {}

  @Get('/')
  getInvoices(): Promise<SaleInvoice[]> {
    return this.invoiceService.getInvoices();
  }

  @Get('/add')
  addInvoices(): Promise<Prisma.BatchPayload> {
    return this.invoiceService.addInvoices();
  }
}
