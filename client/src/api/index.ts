import { Invoice } from '@/interfaces/InvoiceInterface';
import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: '/api',
});

const getInvoices = () => api.get<Invoice[]>('/invoices');
const addInvoices = () => api.get('/invoices/add');

export default {
  getInvoices,
  addInvoices,
};
