
export default function BudgetVariations() {
  const budgetItems = [
    { label: 'Original Budget', value: '$3.00M', color: '#0F172A' },
    { label: 'Approved Variations', value: '+$350K', color: '#10B981' },
    { label: 'Revised Budget', value: '$3.35M', color: '#0F172A' },
    { label: 'Spend to Date', value: '$2.80M', color: '#F59E0B' },
    { label: 'Balance Budget', value: '$550K', color: '#10B981', status: 'positive' }
  ];

  return (
    <div className="bg-white">
      <h2 className="text-lg font-bold text-[#0F172A] mb-4">Budget & Variations</h2>
      <div className="grid grid-cols-5 gap-4">
        {budgetItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#F1F5F9] rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-sm text-gray-600 font-medium mb-2">{item.label}</div>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl font-bold" style={{ color: item.color }}>
                {item.value}
              </div>
              {item.status === 'positive' && (
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100">
                  <i className="ri-arrow-up-line text-sm text-green-600"></i>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
