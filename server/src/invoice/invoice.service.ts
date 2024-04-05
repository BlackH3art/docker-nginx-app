import { Injectable } from '@nestjs/common';
import { Prisma, SaleInvoice } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async getInvoices(): Promise<SaleInvoice[]> {
    return this.prisma.saleInvoice.findMany();
  }

  async addInvoices() {
    const invoices: Prisma.SaleInvoiceCreateInput[] = [
      { name: 'First invoice' },
      { name: 'Second invoice' },
      { name: 'Third invoice' },
    ];

    return this.prisma.saleInvoice.createMany({ data: invoices });
  }
}
