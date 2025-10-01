export interface Order {
  id: number;
  customerName: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'canceled';
  total: number;
  items: number;
}
export const orders: Order[] = [{
  id: 10001,
  customerName: 'Emma Johnson',
  date: '2023-06-15',
  status: 'delivered',
  total: 87.45,
  items: 3
}, {
  id: 10002,
  customerName: 'Michael Chen',
  date: '2023-06-18',
  status: 'shipped',
  total: 54.99,
  items: 2
}, {
  id: 10003,
  customerName: 'Sophia Rodriguez',
  date: '2023-06-20',
  status: 'processing',
  total: 128.75,
  items: 4
}, {
  id: 10004,
  customerName: 'James Wilson',
  date: '2023-06-21',
  status: 'processing',
  total: 43.5,
  items: 1
}, {
  id: 10005,
  customerName: 'Olivia Kim',
  date: '2023-06-14',
  status: 'delivered',
  total: 96.2,
  items: 3
}, {
  id: 10006,
  customerName: 'Emma Johnson',
  date: '2023-06-10',
  status: 'delivered',
  total: 65.99,
  items: 2
}, {
  id: 10007,
  customerName: 'Sophia Rodriguez',
  date: '2023-06-19',
  status: 'canceled',
  total: 110.25,
  items: 3
}];