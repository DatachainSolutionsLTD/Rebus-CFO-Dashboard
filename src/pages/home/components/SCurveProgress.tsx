
export default function SCurveProgress() {
  // S-Curve data points (0-100% progress over 12 months)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const plannedData = [5, 12, 22, 35, 50, 65, 78, 88, 94, 97, 99, 100];
  const actualData = [4, 10, 20, 32, 48, 62, 74, 84, 90, 0, 0, 0]; // Stops at Sep (current)
  const forecastData = [0, 0, 0, 0, 0, 0, 0, 0, 90, 93, 96, 98]; // Starts from Sep

  const currentMonth = 8; // September (index 8)

  return (
    <div className="bg-white">
      <h2 className="text-lg font-bold text-[#0F172A] mb-4">Performance & Progress (S-Curve)</h2>
      <div className="bg-[#F1F5F9] rounded-lg p-8 border border-gray-100 shadow-sm">
        {/* Legend */}
        <div className="flex items-center justify-end gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 border-t-2 border-dashed border-gray-400"></div>
            <span className="text-sm text-gray-600 font-medium">Planned</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-[#0F172A] rounded"></div>
            <span className="text-sm text-gray-600 font-medium">Actual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 border-t-2 border-dotted border-blue-400"></div>
            <span className="text-sm text-gray-600 font-medium">Forecast</span>
          </div>
        </div>

        {/* Chart Container */}
        <div className="relative h-80 bg-white rounded-lg p-6">
          {/* Y-Axis Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pl-6 pr-6 pt-6 pb-12">
            {[100, 80, 60, 40, 20, 0].map((value, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 -translate-y-1/2 text-xs text-gray-500 font-medium w-8 text-right pr-2">
                  {value}%
                </div>
                <div className="ml-10 border-t border-gray-200"></div>
              </div>
            ))}
          </div>

          {/* SVG Chart */}
          <svg className="absolute inset-0 ml-16 mr-6 mt-6 mb-12" viewBox="0 0 1000 300" preserveAspectRatio="none">
            {/* Planned Curve (Dashed Gray) */}
            <polyline
              points={plannedData.map((val, idx) => `${(idx / 11) * 1000},${300 - (val / 100) * 300}`).join(' ')}
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="3"
              strokeDasharray="8,8"
            />

            {/* Actual Curve (Solid Navy) */}
            <polyline
              points={actualData.filter((_, idx) => idx <= currentMonth).map((val, idx) => `${(idx / 11) * 1000},${300 - (val / 100) * 300}`).join(' ')}
              fill="none"
              stroke="#0F172A"
              strokeWidth="4"
            />

            {/* Forecast Curve (Dotted Light Blue) */}
            <polyline
              points={forecastData.map((val, idx) => val > 0 ? `${(idx / 11) * 1000},${300 - (val / 100) * 300}` : '').filter(p => p).join(' ')}
              fill="none"
              stroke="#60A5FA"
              strokeWidth="3"
              strokeDasharray="4,6"
            />

            {/* Current Status Line */}
            <line
              x1={(currentMonth / 11) * 1000}
              y1="0"
              x2={(currentMonth / 11) * 1000}
              y2="300"
              stroke="#EF4444"
              strokeWidth="2"
              strokeDasharray="6,4"
            />
          </svg>

          {/* Current Status Label */}
          <div
            className="absolute top-2 bg-[#EF4444] text-white px-3 py-1 rounded text-xs font-semibold"
            style={{ left: `${((currentMonth / 11) * 100) - 5}%` }}
          >
            Current Status
          </div>

          {/* X-Axis Labels */}
          <div className="absolute bottom-0 left-16 right-6 flex justify-between">
            {months.map((month, index) => (
              <div key={index} className="text-xs text-gray-600 font-medium">
                {month}
              </div>
            ))}
          </div>
        </div>

        {/* Status Summary */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Planned Progress</div>
            <div className="text-2xl font-bold text-gray-400">94%</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Actual Progress</div>
            <div className="text-2xl font-bold text-[#0F172A]">90%</div>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <div className="text-xs text-red-600 mb-1">Variance</div>
            <div className="text-2xl font-bold text-[#EF4444]">-4%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
