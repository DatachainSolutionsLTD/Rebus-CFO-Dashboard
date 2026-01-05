import { useState } from 'react';
import ExecutiveHealth from './components/ExecutiveHealth';
import ExecutiveHealthChart from './components/ExecutiveHealthChart';
import BudgetVariations from './components/BudgetVariations';
import BudgetVariationsChart from './components/BudgetVariationsChart';
import PCAOverview from './components/PCAOverview';
import FinancialBarChart from './components/FinancialBarChart';
import AuditLogTable from './components/AuditLogTable';
import SCurveProgress from './components/SCurveProgress';
import RightSidebar from './components/RightSidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Header */}
      <header className="bg-[#0F172A] text-white py-6 px-8 sticky top-0 z-50 shadow-md">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Construction Closeout Dashboard</h1>
            <p className="text-sm text-gray-300 mt-1">Financial Control & Project Completion Overview</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-gray-400">Last Updated</p>
              <p className="text-sm font-semibold">Dec 15, 2024 - 09:30 AM</p>
            </div>
            <button className="bg-white text-[#0F172A] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Export Report
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto flex gap-6 p-8">
        {/* Left Main Content */}
        <div className="flex-1 space-y-6">
          {/* Executive Health */}
          <ExecutiveHealth />
          <ExecutiveHealthChart />

          {/* Budget & Variations */}
          <BudgetVariations />
          <BudgetVariationsChart />

          {/* PCA Overview */}
          <section>
            <PCAOverview />
          </section>

          {/* Financial Bar Chart */}
          <section>
            <FinancialBarChart />
          </section>

          {/* Audit Log Table */}
          <section>
            <AuditLogTable />
          </section>

          {/* S-Curve Progress */}
          <section>
            <SCurveProgress />
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="w-80 sticky top-24 h-fit">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}
