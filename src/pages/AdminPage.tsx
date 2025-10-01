import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Package, ShoppingBag, BarChart3, Search, Edit, Trash2, Plus, ChevronDown, ChevronUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { users } from '../data/users';
import { products } from '../data/products';
import { orders } from '../data/orders';
const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  return <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center">
            <span className="mr-4 text-gray-600">Welcome, Admin</span>
            <Link to="/">
              <Button variant="secondary" size="small">
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
        {/* Admin Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="flex overflow-x-auto">
            <button onClick={() => setActiveTab('dashboard')} className={`flex items-center px-6 py-4 text-sm font-medium ${activeTab === 'dashboard' ? 'text-pink-600 border-b-2 border-pink-500' : 'text-gray-600 hover:text-gray-900'}`}>
              <BarChart3 size={18} className="mr-2" />
              Dashboard
            </button>
            <button onClick={() => setActiveTab('users')} className={`flex items-center px-6 py-4 text-sm font-medium ${activeTab === 'users' ? 'text-pink-600 border-b-2 border-pink-500' : 'text-gray-600 hover:text-gray-900'}`}>
              <Users size={18} className="mr-2" />
              Users
            </button>
            <button onClick={() => setActiveTab('products')} className={`flex items-center px-6 py-4 text-sm font-medium ${activeTab === 'products' ? 'text-pink-600 border-b-2 border-pink-500' : 'text-gray-600 hover:text-gray-900'}`}>
              <Package size={18} className="mr-2" />
              Products
            </button>
            <button onClick={() => setActiveTab('orders')} className={`flex items-center px-6 py-4 text-sm font-medium ${activeTab === 'orders' ? 'text-pink-600 border-b-2 border-pink-500' : 'text-gray-600 hover:text-gray-900'}`}>
              <ShoppingBag size={18} className="mr-2" />
              Orders
            </button>
          </div>
        </div>
        {/* Dashboard Content */}
        {activeTab === 'dashboard' && <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Sales
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      $1,528.75
                    </h3>
                  </div>
                  <div className="bg-green-100 p-2 rounded">
                    <BarChart3 size={20} className="text-green-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-green-600 flex items-center font-medium">
                    <ArrowUpRight size={16} className="mr-1" /> 12.5%
                  </span>
                  <span className="text-gray-500 ml-2">from last month</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Orders
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      156
                    </h3>
                  </div>
                  <div className="bg-blue-100 p-2 rounded">
                    <ShoppingBag size={20} className="text-blue-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-green-600 flex items-center font-medium">
                    <ArrowUpRight size={16} className="mr-1" /> 8.2%
                  </span>
                  <span className="text-gray-500 ml-2">from last month</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Customers
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      1,352
                    </h3>
                  </div>
                  <div className="bg-purple-100 p-2 rounded">
                    <Users size={20} className="text-purple-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-green-600 flex items-center font-medium">
                    <ArrowUpRight size={16} className="mr-1" /> 4.3%
                  </span>
                  <span className="text-gray-500 ml-2">from last month</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Avg. Order Value
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      $42.50
                    </h3>
                  </div>
                  <div className="bg-yellow-100 p-2 rounded">
                    <Package size={20} className="text-yellow-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-red-600 flex items-center font-medium">
                    <ArrowDownRight size={16} className="mr-1" /> 2.1%
                  </span>
                  <span className="text-gray-500 ml-2">from last month</span>
                </div>
              </div>
            </div>
            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900">
                  Recent Orders
                </h2>
                <Button variant="secondary" size="small">
                  View All
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-4 py-3">Order ID</th>
                      <th className="px-4 py-3">Customer</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Total</th>
                      <th className="px-4 py-3">Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map(order => <tr key={order.id} className="border-b">
                        <td className="px-4 py-3 font-medium text-gray-900">
                          #{order.id}
                        </td>
                        <td className="px-4 py-3">{order.customerName}</td>
                        <td className="px-4 py-3">{order.date}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-2 py-1 text-xs rounded-full ${order.status === 'delivered' ? 'bg-green-100 text-green-800' : order.status === 'shipped' ? 'bg-blue-100 text-blue-800' : order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-4 py-3">${order.total.toFixed(2)}</td>
                        <td className="px-4 py-3">{order.items}</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Best Selling Products */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900">
                  Best Selling Products
                </h2>
                <Button variant="secondary" size="small">
                  View All
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-4 py-3">Product</th>
                      <th className="px-4 py-3">Category</th>
                      <th className="px-4 py-3">Price</th>
                      <th className="px-4 py-3">Sales</th>
                      <th className="px-4 py-3">Rating</th>
                      <th className="px-4 py-3">Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.slice(0, 5).map(product => <tr key={product.id} className="border-b">
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <div className="w-10 h-10 mr-3 rounded overflow-hidden">
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="font-medium text-gray-900">
                              {product.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3">{product.category}</td>
                        <td className="px-4 py-3">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="px-4 py-3">
                          {Math.floor(product.reviewCount * 1.5)}
                        </td>
                        <td className="px-4 py-3">
                          {product.rating.toFixed(1)}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-2 py-1 text-xs rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>}
        {/* Users Content */}
        {activeTab === 'users' && <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-lg font-bold text-gray-900">
                User Management
              </h2>
              <div className="flex w-full sm:w-auto gap-4">
                <div className="relative flex-grow sm:flex-grow-0">
                  <input type="text" placeholder="Search users..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
                  <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
                <Button>
                  <Plus size={16} className="mr-1" /> Add User
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Join Date</th>
                    <th className="px-4 py-3">Orders</th>
                    <th className="px-4 py-3">Total Spent</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => <tr key={user.id} className="border-b">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {user.name}
                      </td>
                      <td className="px-4 py-3">{user.email}</td>
                      <td className="px-4 py-3">{user.joinDate}</td>
                      <td className="px-4 py-3">{user.orderCount}</td>
                      <td className="px-4 py-3">
                        ${user.totalSpent.toFixed(2)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-sm text-gray-600">Showing 1-5 of 120 users</p>
              <div className="flex space-x-1">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  Previous
                </button>
                <button className="px-3 py-1 bg-pink-500 text-white rounded-md text-sm">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>}
        {/* Products Content */}
        {activeTab === 'products' && <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-lg font-bold text-gray-900">
                Product Management
              </h2>
              <div className="flex w-full sm:w-auto gap-4">
                <div className="relative flex-grow sm:flex-grow-0">
                  <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
                  <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
                <Button>
                  <Plus size={16} className="mr-1" /> Add Product
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">Product</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Rating</th>
                    <th className="px-4 py-3">Reviews</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => <tr key={product.id} className="border-b">
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 mr-3 rounded overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="font-medium text-gray-900">
                            {product.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">{product.category}</td>
                      <td className="px-4 py-3">${product.price.toFixed(2)}</td>
                      <td className="px-4 py-3">{product.rating.toFixed(1)}</td>
                      <td className="px-4 py-3">{product.reviewCount}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-1 text-xs rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Showing 1-6 of 24 products
              </p>
              <div className="flex space-x-1">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  Previous
                </button>
                <button className="px-3 py-1 bg-pink-500 text-white rounded-md text-sm">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>}
        {/* Orders Content */}
        {activeTab === 'orders' && <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-lg font-bold text-gray-900">
                Order Management
              </h2>
              <div className="flex w-full sm:w-auto gap-4">
                <div className="relative flex-grow sm:flex-grow-0">
                  <input type="text" placeholder="Search orders..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
                  <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
                <Button variant="secondary">
                  <ChevronDown size={16} className="mr-1" /> Filter
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">Order ID</th>
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Total</th>
                    <th className="px-4 py-3">Items</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => <tr key={order.id} className="border-b">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        #{order.id}
                      </td>
                      <td className="px-4 py-3">{order.customerName}</td>
                      <td className="px-4 py-3">{order.date}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-1 text-xs rounded-full ${order.status === 'delivered' ? 'bg-green-100 text-green-800' : order.status === 'shipped' ? 'bg-blue-100 text-blue-800' : order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-3">${order.total.toFixed(2)}</td>
                      <td className="px-4 py-3">{order.items}</td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-sm text-gray-600">Showing 1-7 of 42 orders</p>
              <div className="flex space-x-1">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  Previous
                </button>
                <button className="px-3 py-1 bg-pink-500 text-white rounded-md text-sm">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};
export default AdminPage;