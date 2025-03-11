import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import {
  Activity,
  AlertTriangle,
  Bell,
  Calendar,
  Download,
  Filter,
  MessageSquare,
  RefreshCcw,
  X
} from 'lucide-react';

// Generate data based on date range
const generateData = (days: number) => {
  return Array.from({ length: days }, (_, i) => ({
    time: days === 1 ? `${i}:00` : `Day ${i + 1}`,
    voltage: 220 + Math.random() * 10 - 5,
    current: 50 + Math.random() * 20 - 10,
  }));
};

const generateFaultData = (days: number) => {
  return Array.from({ length: days }, (_, i) => ({
    day: days === 7 
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]
      : `Day ${i + 1}`,
    faults: Math.floor(Math.random() * 5),
    severity: Math.floor(Math.random() * 100),
  }));
};

const generateReliabilityData = (months: number) => {
  return Array.from({ length: months }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    score: 85 + Math.random() * 10,
  }));
};

const consumptionData = [
  { name: 'Industrial', value: 400 },
  { name: 'Commercial', value: 300 },
  { name: 'Residential', value: 200 },
  { name: 'Others', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const generateAlerts = (count: number) => {
  const types = ['critical', 'warning', 'info'];
  const messages = [
    'Voltage spike detected in Sector A',
    'Transformer load approaching threshold',
    'Scheduled maintenance completed',
    'Power factor below optimal range',
    'Grid frequency fluctuation detected',
    'Backup system activated',
    'Network congestion in Zone B',
    'Temperature alert in substation',
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    type: types[Math.floor(Math.random() * types.length)],
    message: messages[Math.floor(Math.random() * messages.length)],
    time: `${Math.floor(Math.random() * 60)} mins ago`,
  }));
};

function Dashboard() {
  const [dateRange, setDateRange] = useState('24h');
  const [showAllAlerts, setShowAllAlerts] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [customDate, setCustomDate] = useState(new Date().toISOString().split('T')[0]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    voltage: true,
    current: true,
    faults: true,
    severity: true,
  });

  // Get data based on date range
  const getDataForRange = () => {
    switch (dateRange) {
      case '7d':
        return {
          voltage: generateData(7),
          fault: generateFaultData(7),
          reliability: generateReliabilityData(7),
        };
      case '30d':
        return {
          voltage: generateData(30),
          fault: generateFaultData(30),
          reliability: generateReliabilityData(12),
        };
      default:
        return {
          voltage: generateData(24),
          fault: generateFaultData(7),
          reliability: generateReliabilityData(12),
        };
    }
  };

  const data = getDataForRange();
  const alerts = generateAlerts(showAllAlerts ? 10 : 3);

  const handleExport = () => {
    const exportData = {
      voltageData: data.voltage,
      faultData: data.fault,
      reliabilityData: data.reliability,
      consumptionData,
      alerts,
      dateRange,
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `network-data-${dateRange}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Network Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  filterOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button 
                onClick={handleExport}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button 
                onClick={() => {
                  const newData = getDataForRange();
                  // Force re-render with new data
                  setDateRange(prev => prev);
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <RefreshCcw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Filter Panel */}
        {filterOpen && (
          <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Data Filters</h3>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.voltage}
                  onChange={(e) => setFilters(prev => ({ ...prev, voltage: e.target.checked }))}
                  className="rounded text-blue-600"
                />
                <span>Voltage</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.current}
                  onChange={(e) => setFilters(prev => ({ ...prev, current: e.target.checked }))}
                  className="rounded text-blue-600"
                />
                <span>Current</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.faults}
                  onChange={(e) => setFilters(prev => ({ ...prev, faults: e.target.checked }))}
                  className="rounded text-blue-600"
                />
                <span>Faults</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.severity}
                  onChange={(e) => setFilters(prev => ({ ...prev, severity: e.target.checked }))}
                  className="rounded text-blue-600"
                />
                <span>Severity</span>
              </label>
            </div>
          </div>
        )}

        {/* Date Range Selector */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg ${
              dateRange === '24h' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => {
              setDateRange('24h');
              setShowCalendar(false);
            }}
          >
            24h
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              dateRange === '7d' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => {
              setDateRange('7d');
              setShowCalendar(false);
            }}
          >
            7d
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              dateRange === '30d' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => {
              setDateRange('30d');
              setShowCalendar(false);
            }}
          >
            30d
          </button>
          <div className="relative">
            <button
              className={`px-4 py-2 rounded-lg ${
                showCalendar ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <Calendar className="w-4 h-4" />
            </button>
            {showCalendar && (
              <div className="absolute top-12 right-0 bg-white p-4 rounded-lg shadow-lg z-10">
                <input
                  type="date"
                  value={customDate}
                  onChange={(e) => {
                    setCustomDate(e.target.value);
                    setDateRange('custom');
                  }}
                  className="border rounded-lg px-3 py-2"
                />
              </div>
            )}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Real-time Monitoring */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Real-time Network Status</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.voltage}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {filters.voltage && (
                    <Line type="monotone" dataKey="voltage" stroke="#8884d8" name="Voltage (V)" />
                  )}
                  {filters.current && (
                    <Line type="monotone" dataKey="current" stroke="#82ca9d" name="Current (A)" />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Fault Detection */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Fault Analysis</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.fault}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  {filters.faults && (
                    <Bar yAxisId="left" dataKey="faults" fill="#8884d8" name="Number of Faults" />
                  )}
                  {filters.severity && (
                    <Bar yAxisId="right" dataKey="severity" fill="#82ca9d" name="Severity Score" />
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Reliability Index */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Network Reliability Trend</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.reliability}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Area type="monotone" dataKey="score" stroke="#8884d8" fill="#8884d8" name="Reliability Score" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Energy Consumption */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Energy Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={consumptionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {consumptionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Alerts</h2>
            <button 
              onClick={() => setShowAllAlerts(!showAllAlerts)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <Bell className="w-4 h-4" />
              <span>{showAllAlerts ? 'Show Less' : 'View All'}</span>
            </button>
          </div>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-start space-x-4 p-4 rounded-lg ${
                  alert.type === 'critical'
                    ? 'bg-red-50'
                    : alert.type === 'warning'
                    ? 'bg-yellow-50'
                    : 'bg-blue-50'
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    alert.type === 'critical'
                      ? 'bg-red-100 text-red-600'
                      : alert.type === 'warning'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {alert.type === 'critical' ? (
                    <AlertTriangle className="w-5 h-5" />
                  ) : alert.type === 'warning' ? (
                    <Activity className="w-5 h-5" />
                  ) : (
                    <MessageSquare className="w-5 h-5" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{alert.message}</p>
                  <p className="text-sm text-gray-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;