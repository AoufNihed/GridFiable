import React from 'react';
import { 
  BarChart3, 
  Bell, 
  Shield, 
  Cloud, 
  Brain,
  ChevronRight,
  Activity,
  AlertTriangle,
  LineChart,
  Users,
  Database,
  Cpu,
  LayoutDashboard,
  Network,
  FileText,
} from 'lucide-react';

function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Energy Monitoring
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Optimize your energy stability with real-time AI monitoring, predictive analytics, and automated alerts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              Start Free Trial
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BarChart3 className="w-8 h-8 text-blue-600" />}
              title="Real-time Analytics"
              description="Monitor energy stability and consumption patterns with interactive dashboards."
            />
            <FeatureCard 
              icon={<Brain className="w-8 h-8 text-blue-600" />}
              title="AI Predictions"
              description="Predict potential issues before they occur with our advanced AI models."
            />
            <FeatureCard 
              icon={<Bell className="w-8 h-8 text-blue-600" />}
              title="Smart Alerts"
              description="Get instant notifications about critical events and anomalies."
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Secure Storage"
              description="Your data is protected with enterprise-grade security measures."
            />
            <FeatureCard 
              icon={<Cloud className="w-8 h-8 text-blue-600" />}
              title="Cloud-Based"
              description="Access your dashboard from anywhere, anytime with cloud deployment."
            />
            <FeatureCard 
              icon={<Activity className="w-8 h-8 text-blue-600" />}
              title="Power Quality"
              description="Monitor and maintain optimal power quality standards."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">How Our AI-Powered Platform Ensures Reliable Electrical Networks</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We use AI, real-time monitoring, and predictive analytics to prevent failures and improve grid reliability.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ProcessCard
              icon={<Database className="w-10 h-10 text-blue-600" />}
              step="1"
              title="Data Collection"
              description="Connects to IoT sensors, SCADA systems, and power grids to collect real-time data on voltage, current, load, and faults."
            />
            <ProcessCard
              icon={<Brain className="w-10 h-10 text-blue-600" />}
              step="2"
              title="AI-Driven Analysis"
              description="Uses Machine Learning to detect patterns, predict failures, and identify anomalies in the grid."
            />
            <ProcessCard
              icon={<BarChart3 className="w-10 h-10 text-blue-600" />}
              step="3"
              title="Visualization & Insights"
              description="Interactive dashboards for real-time monitoring, generating reliability scores, fault alerts, and maintenance reports."
            />
            <ProcessCard
              icon={<Bell className="w-10 h-10 text-blue-600" />}
              step="4"
              title="Automated Reports & Smart Actions"
              description="AI-powered recommendations for grid optimization and alerts for preventive maintenance."
            />
          </div>

          <div className="bg-blue-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-center mb-8">Key Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitCard
                icon={<Activity className="w-6 h-6 text-blue-600" />}
                title="Prevent Failures & Reduce Downtime"
              />
              <BenefitCard
                icon={<Activity className="w-6 h-6 text-blue-600" />}
                title="Optimize Power Distribution Efficiency"
              />
              <BenefitCard
                icon={<AlertTriangle className="w-6 h-6 text-blue-600" />}
                title="AI-Powered Fault Detection & Forecasting"
              />
              <BenefitCard
                icon={<LineChart className="w-6 h-6 text-blue-600" />}
                title="Reduce Maintenance Costs"
              />
              <BenefitCard
                icon={<Brain className="w-6 h-6 text-blue-600" />}
                title="Data-Driven Insights"
              />
              <BenefitCard
                icon={<Shield className="w-6 h-6 text-blue-600" />}
                title="Enhanced Grid Security"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Comprehensive Dashboard Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DashboardFeatureCard
              icon={<LayoutDashboard className="w-8 h-8 text-blue-600" />}
              title="Overview Dashboard"
              features={[
                "Grid Health Status – Live health index",
                "Reliability Score – AI-driven predictions",
                "Real-time Alerts & Anomalies",
                "Energy Consumption Trends",
                "Key KPIs Monitoring"
              ]}
            />
            
            <DashboardFeatureCard
              icon={<Cpu className="w-8 h-8 text-blue-600" />}
              title="AI-Powered Analytics"
              features={[
                "Predictive Maintenance",
                "Load Forecasting",
                "Fault Detection & Analysis",
                "Energy Efficiency Reports",
                "Optimization Insights"
              ]}
            />
            
            <DashboardFeatureCard
              icon={<Network className="w-8 h-8 text-blue-600" />}
              title="Network Monitoring"
              features={[
                "Grid Component Health",
                "Live Grid Map",
                "Historical Performance",
                "Component Status",
                "Network Reliability"
              ]}
            />
            
            <DashboardFeatureCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              title="User Management"
              features={[
                "Multi-user Access",
                "Role-based Permissions",
                "Access Control",
                "User Activity Logs",
                "Team Collaboration"
              ]}
            />
            
            <DashboardFeatureCard
              icon={<FileText className="w-8 h-8 text-blue-600" />}
              title="Automated Reports"
              features={[
                "AI-Generated Reports",
                "Real-time Notifications",
                "Scheduled Reports",
                "Custom Report Builder",
                "Export Capabilities"
              ]}
            />
            
            <DashboardFeatureCard
              icon={<Database className="w-8 h-8 text-blue-600" />}
              title="Integration & API"
              features={[
                "IoT Integration",
                "SCADA Connection",
                "External Database Link",
                "API Access",
                "Data Import/Export"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to optimize your energy system?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of companies already using GridFiable to monitor and optimize their energy stability.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessCard({ icon, step, title, description }: { icon: React.ReactNode, step: string, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
      <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
        {step}
      </div>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitCard({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex-shrink-0">{icon}</div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
    </div>
  );
}

function DashboardFeatureCard({ icon, title, features }: { icon: React.ReactNode, title: string, features: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3 mb-4">
        <div className="flex-shrink-0">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;