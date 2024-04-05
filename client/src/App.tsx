import { HelloWorld } from "@components/HelloWorld";
import { Button } from "@components/ui/button";
import { useState } from "react";
import { Invoice } from "./interfaces/InvoiceInterface";

import api from '@/api/index';

export const App = () => {

  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const handleAddInvoices = async () => {
    try {
      const { data } = await api.addInvoices();
      console.log('added --> ', { data });
    } catch (error) {
      console.warn('error adding invoices --> ', error);
    }
  };

  const handleGetInvoices = async () => {
    try {
      const { data } = await api.getInvoices();
      setInvoices(data);
    } catch (error) {
      console.warn('error getting invoices --> ', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <HelloWorld />

      <div className="flex gap-8">
        <Button variant='outline' onClick={handleAddInvoices}>
          dodaj faktury
        </Button>
        <Button variant='outline' onClick={handleGetInvoices}>
          pobierz faktury
        </Button>
      </div>

      {invoices && (
        <div className="flex flex-col p-5">
          {invoices.map(invoice => (
            <p key={invoice.id} className="font-mono">{JSON.stringify(invoice)}</p>
          ))}
        </div>
      )}
    </div>
  )
}