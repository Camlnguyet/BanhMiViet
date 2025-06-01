  // src/pages/Dashboard.js
  import React from 'react';
  import Topbar from '../components/Topbar';
  import Sidebar from '../components/Sidebar';
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

  const revenueData = [
  { month: 'Jan', revenue: 40000 },
  { month: 'Feb', revenue: 30000 },
  { month: 'Mar', revenue: 50000 },
  { month: 'Apr', revenue: 45000 },
  { month: 'May', revenue: 60000 },
  { month: 'Jun', revenue: 70000 },
  ];

  const Dashboard = () => {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Topbar />
          <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto' }}>
            {<div className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="bg-orange-100 rounded-xl p-4 flex items-center justify-between shadow">
    <div>
      <div className="text-sm text-gray-600">Total Sales</div>
      <div className="text-2xl font-bold text-gray-800">$983,410</div>
      <div className="text-sm text-green-600 mt-1">+3.34% vs last week</div>
    </div>
    <div className="bg-orange-500 text-white rounded-full p-3">
      <i className="fas fa-dollar-sign"></i>
    </div>
  </div>

  <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow">
    <div>
      <div className="text-sm text-gray-600">Total Orders</div>
      <div className="text-2xl font-bold text-gray-800">58,375</div>
      <div className="text-sm text-red-600 mt-1">-2.89% vs last week</div>
    </div>
    <div className="bg-gray-200 text-gray-700 rounded-full p-3">
      <i className="fas fa-shopping-cart"></i>
    </div>
  </div>

  <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow">
    <div>
      <div className="text-sm text-gray-600">Total Visitors</div>
      <div className="text-2xl font-bold text-gray-800">237,782</div>
      <div className="text-sm text-green-600 mt-1">+8.02% vs last week</div>
    </div>
    <div className="bg-gray-200 text-gray-700 rounded-full p-3">
      <i className="fas fa-users"></i>
    </div>
  </div>
</div>


            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="card">
                <div className="text-lg font-semibold mb-2">Revenue Analytics</div>
                <ResponsiveContainer width="100%" height={250}>
                <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="card">
                <div className="text-lg font-semibold mb-2">Monthly Target</div>
                <p className="text-gray">85% – Great progress!</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="card">
                <div className="text-lg font-semibold mb-2">Top Categories</div>
                <ul>
                  <li>Electronics – $1,200,000</li>
                  <li>Fashion – $950,000</li>
                  <li>Home & Kitchen – $750,000</li>
                  <li>Beauty & Personal Care – $500,000</li>
                </ul>
              </div>
              <div className="card">
                <div className="text-lg font-semibold mb-2">Traffic Sources</div>
                <ul>
                  <li>Direct Traffic – 40%</li>
                  <li>Organic Search – 30%</li>
                  <li>Social Media – 15%</li>
                  <li>Email Campaigns – 5%</li>
                </ul>
              </div>
            </div>
          </div>}
            
          </div>
        </div>
      </div>
    );
  };

  export default Dashboard;
