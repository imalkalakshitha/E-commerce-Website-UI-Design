export interface User {
  id: number;
  name: string;
  email: string;
  joinDate: string;
  orderCount: number;
  totalSpent: number;
}
export const users: User[] = [{
  id: 1,
  name: 'Emma Johnson',
  email: 'emma.johnson@example.com',
  joinDate: '2023-02-15',
  orderCount: 8,
  totalSpent: 345.78
}, {
  id: 2,
  name: 'Michael Chen',
  email: 'michael.chen@example.com',
  joinDate: '2023-03-21',
  orderCount: 5,
  totalSpent: 189.5
}, {
  id: 3,
  name: 'Sophia Rodriguez',
  email: 'sophia.r@example.com',
  joinDate: '2023-01-08',
  orderCount: 12,
  totalSpent: 567.25
}, {
  id: 4,
  name: 'James Wilson',
  email: 'jwilson@example.com',
  joinDate: '2023-04-30',
  orderCount: 3,
  totalSpent: 124.99
}, {
  id: 5,
  name: 'Olivia Kim',
  email: 'olivia.kim@example.com',
  joinDate: '2023-05-17',
  orderCount: 7,
  totalSpent: 298.45
}];