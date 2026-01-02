
export interface Note {
  id: string;
  title: string;
  created: string;
  subject: string;
  requester: string;
  department: string;
  boardMeetings: string;
  subCategory: string;
  status: string;
  amount?: string;
  noteType: string;
}

export enum TabType {
  GENERAL = 'GENERAL',
  LOGS = 'LOGS',
  STATUS = 'STATUS'
}

export interface Attachment {
  name: string;
  size: string;
  type: string;
}

export interface WorkflowEvent {
  date: string;
  time: string;
  event: string;
  user: string;
}
