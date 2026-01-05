
export default function PCAOverview() {
  const pcaData = [
    {
      label: 'Total PCA Value',
      value: '$4.20M',
      description: 'Paid + Approved Not Paid + Under Review',
      icon: 'ri-funds-line',
      color: '#0F172A',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Paid to Contractor',
      value: '$2.90M',
      description: '69% of Total PCA',
      icon: 'ri-check-double-line',
      color: '#10B981',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Certified/Approved Not Paid',
      value: '$850K',
      description: '20% of Total PCA',
      icon: 'ri-file-check-line',
      color: '#F59E0B',
      bgColor: 'bg-amber-50'
    },
    {
      label: 'Pending Review/Claims',
      value: '$450K',
      description: '11% of Total PCA',
      icon: 'ri-time-line',
      color: '#EF4444',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="bg-white">
      <h2 className="text-lg font-bold text-[#0F172A] mb-2">Commercial & Cashflow (PCA Logic)</h2>
      <p className="text-sm text-gray-600 mb-4">PCA Value = Paid + Approved Not Paid + Under Review</p>
      <div className="grid grid-cols-4 gap-4">
        {pcaData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg`} style={{ backgroundColor: `${item.color}15` }}>
                <i className={`${item.icon} text-2xl`} style={{ color: item.color }}></i>
              </div>
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: item.color }}>
              {item.value}
            </div>
            <div className="text-sm font-semibold text-gray-800 mb-1">{item.label}</div>
            <div className="text-xs text-gray-500">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
