
import { useState } from 'react';

export default function AuditLogTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const tableData = [
    { item: 'HVAC System', os: '$420,000', purchase: '$385,000', processed: '$385,000', issued: '$385,000', cs: '$35,000' },
    { item: 'Electrical Infrastructure', os: '$680,000', purchase: '$650,000', processed: '$620,000', issued: '$600,000', cs: '$80,000' },
    { item: 'Plumbing & Drainage', os: '$290,000', purchase: '$275,000', processed: '$275,000', issued: '$270,000', cs: '$20,000' },
    { item: 'Structural Steel', os: '$850,000', purchase: '$820,000', processed: '$800,000', issued: '$780,000', cs: '$70,000' },
    { item: 'Fire Protection System', os: '$340,000', purchase: '$325,000', processed: '$320,000', issued: '$315,000', cs: '$25,000' },
    { item: 'Facade & Cladding', os: '$520,000', purchase: '$495,000', processed: '$490,000', issued: '$485,000', cs: '$35,000' },
    { item: 'Interior Fit-Out', os: '$380,000', purchase: '$360,000', processed: '$355,000', issued: '$350,000', cs: '$30,000' },
    { item: 'Roofing System', os: '$210,000', purchase: '$198,000', processed: '$195,000', issued: '$192,000', cs: '$18,000' },
    { item: 'Flooring & Finishes', os: '$165,000', purchase: '$158,000', processed: '$155,000', issued: '$152,000', cs: '$13,000' },
    { item: 'Landscaping', os: '$125,000', purchase: '$118,000', processed: '$115,000', issued: '$112,000', cs: '$13,000' }
  ];

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredData = tableData.filter(row =>
    row.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#0F172A]">Closeout Data Table (Audit Log)</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent"
            />
          </div>
          <button className="bg-[#10B981] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#059669] transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer">
            <i className="ri-file-excel-line"></i>
            Export to Excel
          </button>
        </div>
      </div>

      <div className="bg-[#F1F5F9] rounded-lg border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#0F172A] text-white">
              <tr>
                {['Item', 'O/S Value', 'Purchase Value', 'Processed Value', 'Issued Value', 'C/S Value'].map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-4 text-left text-sm font-semibold cursor-pointer hover:bg-[#1e293b] transition-colors"
                    onClick={() => handleSort(header.toLowerCase().replace(/\//g, '').replace(/ /g, ''))}
                  >
                    <div className="flex items-center gap-2">
                      {header}
                      <i className="ri-arrow-up-down-line text-xs"></i>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-[#0F172A]">{row.item}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.os}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.purchase}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.processed}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.issued}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-[#10B981]">{row.cs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
