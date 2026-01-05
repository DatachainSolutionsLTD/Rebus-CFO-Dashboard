export default function ExecutiveHealthChart() {
  const chartData = [
    { label: 'Total Packages', value: 1240, color: '#0F172A' },
    { label: 'Completed', value: 840, color: '#10B981' },
    { label: 'In Progress', value: 310, color: '#F59E0B' },
    { label: 'Rejected', value: 90, color: '#EF4444' }
  ];

  const maxValue = 1400;
  const gridLines = [0, 280, 560, 840, 1120, 1400];

  return (
    <div className="bg-white mt-6">
      <div className="bg-[#F1F5F9] rounded-lg p-8 border border-gray-100 shadow-sm">
        {/* Chart Container */}
        <div className="relative" style={{ height: '400px', paddingTop: '40px', paddingBottom: '60px' }}>
          {/* Y-Axis Labels and Grid Lines */}
          <div className="absolute left-0 top-10 bottom-16 w-16 flex flex-col justify-between">
            {[...gridLines].reverse().map((value, index) => (
              <div key={index} className="relative flex items-center">
                <span className="text-xs text-gray-500 font-medium w-14 text-right pr-2">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Grid Lines */}
          <div className="absolute left-16 right-0 top-10 bottom-16 flex flex-col justify-between">
            {gridLines.map((value, index) => (
              <div key={index} className="w-full border-t border-gray-200"></div>
            ))}
          </div>

          {/* Bars Container */}
          <div className="absolute left-16 right-0 top-10 bottom-16 flex items-end justify-around px-12">
            {chartData.map((item, index) => {
              const heightPercentage = (item.value / maxValue) * 100;
              return (
                <div key={index} className="flex flex-col items-center justify-end" style={{ width: '80px', height: '100%' }}>
                  {/* Value Label */}
                  <div 
                    className="text-sm font-bold mb-2 whitespace-nowrap"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>
                  {/* Bar */}
                  <div
                    className="w-full rounded-t-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                    style={{
                      height: `${heightPercentage}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* X-Axis Labels */}
          <div className="absolute left-16 right-0 bottom-0 flex items-center justify-around px-12" style={{ height: '50px' }}>
            {chartData.map((item, index) => (
              <div key={index} className="text-sm font-semibold text-gray-700 text-center" style={{ width: '80px' }}>
                {item.label}
              </div>
            ))}
          </div>

          {/* X-Axis Baseline */}
          <div className="absolute left-16 right-0 bottom-16 border-t-2 border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
