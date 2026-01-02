import React, { useState } from 'react';
import { Search, Download, Clock, Ban, CheckCircle, RotateCcw, FileText } from 'lucide-react';
import { MOCK_NOTES } from '../constants';
import { Note } from '../types';

interface DashboardProps {
  onRowClick: (note: Note) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onRowClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredTablet, setHoveredTablet] = useState<{ card: string; label: string } | null>(null);
  const [clickedTablet, setClickedTablet] = useState<{ card: string; label: string } | null>(null);

  const stats = [
    {
      label: 'Pending',
      icon: <Clock className="w-5 h-5" />,
      color: 'border-blue-500',
      stripColor: 'bg-blue-500',
      textColor: 'text-blue-500',
      tablets: [
        { label: 'BY ME', value: 0 },
        { label: 'BY OTHER', value: 0 },
      ],
    },
    {
      label: 'Rejected',
      icon: <Ban className="w-5 h-5" />,
      color: 'border-red-500',
      stripColor: 'bg-red-500',
      textColor: 'text-red-500',
      tablets: [
        { label: 'BY ME', value: 0 },
        { label: 'BY OTHER', value: 0 },
      ],
    },
    {
      label: 'Approved',
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'border-purple-500',
      stripColor: 'bg-purple-500',
      textColor: 'text-purple-500',
      tablets: [
        { label: 'BY ME', value: 0 },
        { label: 'BY OTHER', value: 0 },
      ],
    },
    {
      label: 'Returned',
      icon: <RotateCcw className="w-5 h-5" />,
      color: 'border-amber-500',
      stripColor: 'bg-amber-500',
      textColor: 'text-amber-500',
      tablets: [{ label: 'RETURNED', value: 0 }],
    },
    {
      label: 'Draft',
      icon: <FileText className="w-5 h-5" />,
      color: 'border-cyan-500',
      stripColor: 'bg-cyan-500',
      textColor: 'text-cyan-500',
      tablets: [
        { label: 'BY ME', value: 0 },
        { label: 'PIPELINE', value: 0 },
      ],
    },
  ];

  const filteredNotes = MOCK_NOTES.filter(
    (n) =>
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 md:p-12 min-h-screen bg-[#E9F0F8]">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-xl font-bold text-slate-800 mb-8 ml-2">Notes Overview</h1>

        {/* Status Cards */}
        <div className="flex flex-wrap gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden flex-1 min-w-[210px] bg-white rounded-[24px] p-5 shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-transparent transition-all duration-300"
            >
              {/* Top Color Strip */}
              <div
                className={`absolute top-0 left-0 right-0 h-[5px] ${stat.stripColor}`}
              />

              <div className="flex justify-between items-center mb-6 mt-1 px-1">
                <span className="text-lg font-bold text-slate-700">{stat.label}</span>
                <div className={`${stat.textColor} opacity-80`}>{stat.icon}</div>
              </div>

              <div className="flex gap-2">
                {stat.tablets.map((tablet) => {
                  const isActive =
                    (hoveredTablet?.card === stat.label &&
                      hoveredTablet?.label === tablet.label) ||
                    (clickedTablet?.card === stat.label &&
                      clickedTablet?.label === tablet.label);

                  return (
                    <div
                      key={tablet.label}
                      onMouseEnter={() =>
                        setHoveredTablet({ card: stat.label, label: tablet.label })
                      }
                      onMouseLeave={() => setHoveredTablet(null)}
                      onClick={() =>
                        setClickedTablet({ card: stat.label, label: tablet.label })
                      }
                      className={`flex-1 flex flex-col items-center justify-center py-3 px-1 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        isActive
                          ? `${stat.color} bg-white shadow-sm`
                          : 'border-transparent bg-[#F7F9FB]'
                      }`}
                    >
                      <p
                        className={`text-[9px] font-bold tracking-widest mb-1 ${
                          isActive ? stat.textColor : 'text-slate-400'
                        }`}
                      >
                        {tablet.label}
                      </p>
                      <p className="text-xl font-bold text-slate-800 leading-none">
                        {tablet.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex justify-end gap-3 mb-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none w-64 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button className="flex items-center gap-2 px-5 py-2 bg-[#94a3b8] text-white rounded-lg text-xs font-bold hover:bg-[#7e8e9f] transition-colors shadow-sm uppercase tracking-wider">
            <Download className="w-3.5 h-3.5" />
            Export to Excel
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-left">
              <thead className="bg-[#94a3b8] text-white">
                <tr>
                  {['Title', 'Created', 'Subject', 'Requester', 'Department', 'Board/Committee Meetings', 'Sub Category'].map(
                    (h) => (
                      <th key={h} className="p-3">
                        <input
                          placeholder={h}
                          className="w-full bg-white text-slate-800 px-3 py-1.5 rounded-md text-[11px] shadow-sm"
                        />
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {filteredNotes.map((note, idx) => (
                  <tr
                    key={note.id}
                    onClick={() => onRowClick(note)}
                    className={`cursor-pointer transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'
                    } hover:bg-[#f1f5f9]`}
                  >
                    <td className="p-4 text-[11px] font-bold text-blue-600 underline">
                      {note.title}
                    </td>
                    <td className="p-4 text-[11px]">{note.created}</td>
                    <td className="p-4 text-[11px]">{note.subject}</td>
                    <td className="p-4 text-[11px]">{note.requester}</td>
                    <td className="p-4 text-[11px]">{note.department}</td>
                    <td className="p-4 text-[11px]">{note.boardMeetings}</td>
                    <td className="p-4 text-[11px]">{note.subCategory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
