
import { Note, Attachment, WorkflowEvent } from './types';

export const MOCK_NOTES: Note[] = [
  { id: 'DMO/2025-26/125', title: 'DMO2/2025-26/125', created: '18/12/2025', subject: 'test-55', requester: 'Pradeep Gupta-SBIMF', department: 'Demo2', boardMeetings: '', subCategory: 'Data management', status: 'Submitted to Patti Fernandez-SBIMF', noteType: 'Non-Financial' },
  { id: 'IT/2025-26/1363', title: 'IT/2025-26/1363', created: '17/12/2025', subject: 'test-52', requester: 'Pradeep Gupta-SBIMF', department: 'Information Tec...', boardMeetings: '', subCategory: 'Hardware', status: 'Pending', noteType: 'Financial' },
  { id: 'DMO/2025-26/124', title: 'DMO2/2025-26/124', created: '17/12/2025', subject: 'test-50', requester: 'vineet singh', department: 'Demo2', boardMeetings: '', subCategory: 'Hardware', status: 'Approved', noteType: 'Non-Financial' },
  { id: 'DMO/2025-26/123', title: 'DMO2/2025-26/123', created: '17/12/2025', subject: 'button-check', requester: 'Robin Singh', department: 'Demo2', boardMeetings: '', subCategory: 'Hardware', status: 'Rejected', noteType: 'Non-Financial' },
  { id: 'DMO/2025-26/122', title: 'DMO2/2025-26/122', created: '16/12/2025', subject: 'Bug Check- 1057', requester: 'Robii Singh', department: 'Demo2', boardMeetings: '', subCategory: 'Change Request', status: 'Draft', noteType: 'Non-Financial' },
  { id: 'DMO/2025-26/121', title: 'DMO2/2025-26/121', created: '15/12/2025', subject: 'test-02', requester: 'Nestor Wilke-SBIMF', department: 'Demo2', boardMeetings: '', subCategory: 'Digital Asset', status: 'Returned', noteType: 'Financial' },
];

export const MOCK_ATTACHMENTS: Attachment[] = [
  { name: 'Proposal_V2.pdf', size: '1.4 MB', type: 'PDF Document' },
  { name: 'Budget_Plan_2025.xlsx', size: '425 KB', type: 'Spreadsheet' },
];

export const MOCK_WORKFLOW_HISTORY: WorkflowEvent[] = [
  { date: '18 DEC 2025', time: '10:24 AM', event: 'Note Created', user: 'Pradeep Gupta' },
  { date: '18 DEC 2025', time: '11:15 AM', event: 'Route initiated to Reviewer', user: 'System Agent' },
];
