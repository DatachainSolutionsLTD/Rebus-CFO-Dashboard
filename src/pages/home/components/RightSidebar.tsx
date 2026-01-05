
export default function RightSidebar() {
  const delayedPackages = [
    { name: 'Fire Safety Certification', days: 18, contractor: 'SafeGuard Systems' },
    { name: 'Elevator Commissioning', days: 12, contractor: 'Vertical Transport Co.' },
    { name: 'BMS Integration', days: 9, contractor: 'Smart Building Tech' },
    { name: 'Facade Inspection Report', days: 7, contractor: 'Exterior Solutions' },
    { name: 'Acoustic Testing', days: 5, contractor: 'Sound Engineering Ltd' }
  ];

  const highValueClaims = [
    { contractor: 'Steel Structures Inc.', amount: '$185,000', status: 'Under Review' },
    { contractor: 'MEP Contractors Ltd.', amount: '$142,000', status: 'Disputed' },
    { contractor: 'Concrete Solutions', amount: '$98,000', status: 'Pending Approval' }
  ];

  const tradeCompletion = [
    { trade: 'Electrical', percentage: 92, color: '#10B981' },
    { trade: 'Plumbing', percentage: 88, color: '#F59E0B' },
    { trade: 'Structural', percentage: 95, color: '#10B981' },
    { trade: 'HVAC', percentage: 85, color: '#F59E0B' },
    { trade: 'Fire Protection', percentage: 78, color: '#EF4444' }
  ];

  return (
    <div className="space-y-6">
      {/* Top 5 Delayed Packages */}
      <div className="bg-[#F1F5F9] rounded-lg p-5 border border-gray-100 shadow-sm">
        <h3 className="text-base font-bold text-[#0F172A] mb-4 flex items-center gap-2">
          <i className="ri-alarm-warning-line text-[#EF4444]"></i>
          Top 5 Delayed Packages
        </h3>
        <div className="space-y-3">
          {delayedPackages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <div className="text-sm font-semibold text-[#0F172A] flex-1">{pkg.name}</div>
                <div className="bg-red-100 text-[#EF4444] px-2 py-1 rounded text-xs font-bold whitespace-nowrap ml-2">
                  {pkg.days}d
                </div>
              </div>
              <div className="text-xs text-gray-500">{pkg.contractor}</div>
            </div>
          ))}
        </div>
      </div>

      {/* High Value Claims */}
      <div className="bg-[#F1F5F9] rounded-lg p-5 border border-gray-100 shadow-sm">
        <h3 className="text-base font-bold text-[#0F172A] mb-4 flex items-center gap-2">
          <i className="ri-money-dollar-circle-line text-[#F59E0B]"></i>
          High Value Claims
        </h3>
        <div className="space-y-3">
          {highValueClaims.map((claim, index) => (
            <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="text-sm font-semibold text-[#0F172A] mb-1">{claim.contractor}</div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-[#EF4444]">{claim.amount}</div>
                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{claim.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trade Completion */}
      <div className="bg-[#F1F5F9] rounded-lg p-5 border border-gray-100 shadow-sm">
        <h3 className="text-base font-bold text-[#0F172A] mb-4 flex items-center gap-2">
          <i className="ri-bar-chart-box-line text-[#0F172A]"></i>
          Trade Completion %
        </h3>
        <div className="space-y-4">
          {tradeCompletion.map((trade, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold text-[#0F172A]">{trade.trade}</div>
                <div className="text-sm font-bold" style={{ color: trade.color }}>
                  {trade.percentage}%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${trade.percentage}%`, backgroundColor: trade.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
