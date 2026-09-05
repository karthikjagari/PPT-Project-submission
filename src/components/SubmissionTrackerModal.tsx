import React, { useState } from 'react';
import { X, Database, Download, Copy, ExternalLink, Check, Code, Search } from 'lucide-react';
import { getStoredSubmissions, SubmissionPayload } from '../utils/storage';
import { GOOGLE_APPS_SCRIPT_SNIPPET } from '../utils/googleSheetsTemplate';
import { APP_CONFIG } from '../config';

interface SubmissionTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmissionTrackerModal: React.FC<SubmissionTrackerModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'submissions' | 'sheets_script'>('submissions');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  if (!isOpen) return null;

  const submissions = getStoredSubmissions();
  const filtered = submissions.filter((s) => {
    const q = searchQuery.toLowerCase();
    return (
      s.studentName?.toLowerCase().includes(q) ||
      s.schoolName?.toLowerCase().includes(q) ||
      s.mobileNumber?.includes(q) ||
      s.projectTheme?.toLowerCase().includes(q)
    );
  });

  const downloadCSV = () => {
    if (submissions.length === 0) {
      alert('No submissions recorded yet.');
      return;
    }
    const headers = [
      'ID',
      'Timestamp',
      'Student Name',
      'Mobile Number',
      'School Name',
      'City/Batch',
      'Theme',
      'Description',
      'Project Link'
    ];
    const rows = submissions.map((s) => [
      s.id || '',
      s.timestamp || '',
      `"${(s.studentName || '').replace(/"/g, '""')}"`,
      s.mobileNumber || '',
      `"${(s.schoolName || '').replace(/"/g, '""')}"`,
      `"${(s.cityBatch || '').replace(/"/g, '""')}"`,
      `"${(s.projectTheme || '').replace(/"/g, '""')}"`,
      `"${(s.projectDescription || '').replace(/"/g, '""')}"`,
      `"${(s.projectLink || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NIAT_AI_Submissions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyScriptToClipboard = () => {
    navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_SNIPPET);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const copyLink = (linkStr: string) => {
    navigator.clipboard.writeText(linkStr);
    setCopiedLink(linkStr);
    setTimeout(() => setCopiedLink(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-white border border-gray-200 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-[#FFFDF8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900 font-['Plus_Jakarta_Sans']">
                Organizer Submission Inspector & Setup
              </h3>
              <p className="text-xs text-gray-500">
                Current Google Sheets Endpoint:{' '}
                <span className="font-mono font-bold text-[#8B1E2D]">
                  {APP_CONFIG.googleSheetsEndpoint}
                </span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center px-6 border-b border-gray-200 gap-6 text-xs font-bold bg-gray-50">
          <button
            onClick={() => setActiveTab('submissions')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'submissions'
                ? 'border-[#8B1E2D] text-[#8B1E2D]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Recorded Submissions ({submissions.length})
          </button>
          <button
            onClick={() => setActiveTab('sheets_script')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'sheets_script'
                ? 'border-[#8B1E2D] text-[#8B1E2D]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Google Apps Script Template</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'submissions' ? (
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search submissions..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 text-xs outline-none focus:border-[#8B1E2D]"
                  />
                </div>

                <button
                  onClick={downloadCSV}
                  className="w-full sm:w-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Submissions (CSV)</span>
                </button>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-12 text-gray-500 text-xs">
                  <p className="font-semibold text-sm mb-1">No submissions found</p>
                  <p>Submissions made through the form will appear here and sync to Google Sheets.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filtered.map((s, idx) => (
                    <div
                      key={s.id || idx}
                      className="p-4 rounded-2xl border border-gray-200 bg-white hover:border-amber-300 transition-colors shadow-2xs"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-gray-900">{s.studentName}</span>
                          <span className="text-[11px] font-mono bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                            {s.mobileNumber}
                          </span>
                          <span className="text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-full">
                            {s.projectTheme}
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-mono">
                          {s.timestamp ? new Date(s.timestamp).toLocaleString('en-IN') : ''}
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 font-medium mb-1">
                        <strong>School:</strong> {s.schoolName} {s.cityBatch ? `• ${s.cityBatch}` : ''}
                      </p>

                      <p className="text-xs text-gray-700 mb-3 line-clamp-2">
                        "{s.projectDescription}"
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                        <span className="text-[11px] font-mono text-gray-400 truncate max-w-xs">
                          {s.projectLink}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => copyLink(s.projectLink)}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-600 hover:text-black"
                          >
                            {copiedLink === s.projectLink ? (
                              <span className="text-emerald-600 flex items-center gap-0.5">
                                <Check className="w-3 h-3" /> Copied
                              </span>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" /> Copy Link
                              </>
                            )}
                          </button>
                          <a
                            href={s.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8B1E2D] hover:underline"
                          >
                            <span>Open Link</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <h4 className="text-sm font-bold text-gray-900 mb-1">
                  Connect submissions to your Google Sheet in 60 seconds:
                </h4>
                <ol className="list-decimal list-inside text-xs text-gray-600 space-y-1">
                  <li>Open your Google Sheet and click <strong>Extensions &gt; Apps Script</strong>.</li>
                  <li>Paste the code snippet below and click <strong>Deploy &gt; New deployment</strong>.</li>
                  <li>Select type: <strong>Web app</strong>, access: <strong>Anyone</strong>.</li>
                  <li>Copy the resulting Web App URL and set it in <code className="bg-gray-100 px-1 py-0.5 rounded text-[#8B1E2D]">src/config.ts</code>.</li>
                </ol>
              </div>

              <div className="relative">
                <button
                  onClick={copyScriptToClipboard}
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-[#8B1E2D] text-white text-xs font-bold hover:bg-[#731724] shadow-xs flex items-center gap-1.5 z-10 cursor-pointer"
                >
                  {copiedScript ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied Script!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code Snippet</span>
                    </>
                  )}
                </button>

                <pre className="p-4 rounded-2xl bg-gray-900 text-slate-200 text-xs font-mono overflow-x-auto max-h-96 leading-relaxed">
                  {GOOGLE_APPS_SCRIPT_SNIPPET.trim()}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
