  // src/pages/Dashboard.js
  import React from 'react';
  import Topbar from '../components/Topbar';
  import Sidebar from '../components/Sidebar';
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
  

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
      <div style={{ flex: 1, overflowY: 'auto' }} className="p-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Total Sales */}
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

          {/* Total Orders */}
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

          {/* Total Visitors */}
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

          {/* Monthly Target */}
          <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow">
            <div className="text-sm text-gray-600">Monthly Target</div>
            <ResponsiveContainer width={120} height={120}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Achieved', value: 85 },
                    { name: 'Remaining', value: 15 }
                  ]}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  innerRadius={40}
                  outerRadius={55}
                  paddingAngle={2}
                >
                  <Cell fill="#f97316" />
                  <Cell fill="#e5e7eb" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p className="mt-2 text-gray-600 text-sm">85% – Great progress!</p>
          </div>
        </div>

        {/* Revenue chart + Top sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-xl p-4 shadow">
            <div className="text-lg font-semibold mb-2">Revenue Analytics</div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#FF8042" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <div className="text-lg font-semibold mb-2">Top Categories</div>
            <ul>
              <li>Electronics – $1,200,000</li>
              <li>Fashion – $950,000</li>
              <li>Home & Kitchen – $750,000</li>
              <li>Beauty & Personal Care – $500,000</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <div className="text-lg font-semibold mb-2">Traffic Sources</div>
            <ul>
              <li>Direct Traffic – 40%</li>
              <li>Organic Search – 30%</li>
              <li>Social Media – 15%</li>
              <li>Email Campaigns – 5%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  };

  export default Dashboard;
