
export default function ExecutiveHealth() {
  const kpis = [
    {
      label: 'Total Closeout Packages',
      value: '1,240',
      icon: 'ri-folder-line',
      color: '#0F172A'
    },
    {
      label: 'Completed',
      value: '840',
      percentage: '68%',
      icon: 'ri-checkbox-circle-line',
      color: '#10B981',
      bgColor: 'bg-green-50'
    },
    {
      label: 'In Progress',
      value: '310',
      percentage: '25%',
      icon: 'ri-time-line',
      color: '#F59E0B',
      bgColor: 'bg-amber-50'
    },
    {
      label: 'Rejected / Returned',
      value: '90',
      percentage: '7%',
      icon: 'ri-close-circle-line',
      color: '#EF4444',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="bg-white">
      <h2 className="text-lg font-bold text-[#0F172A] mb-4">Executive Health</h2>
      <div className="grid grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className={`${kpi.bgColor || 'bg-[#F1F5F9]'} rounded-lg p-6 border border-gray-100 shadow-sm`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg`} style={{ backgroundColor: `${kpi.color}15` }}>
                <i className={`${kpi.icon} text-xl`} style={{ color: kpi.color }}></i>
              </div>
              {kpi.percentage && (
                <span className="text-xs font-semibold px-2 py-1 rounded" style={{ color: kpi.color, backgroundColor: `${kpi.color}20` }}>
                  {kpi.percentage}
                </span>
              )}
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: kpi.color }}>
              {kpi.value}
            </div>
            <div className="text-sm text-gray-600 font-medium">{kpi.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
