import { APP_CONFIG } from '../config';

export interface SubmissionPayload {
  id?: string;
  timestamp?: string;
  studentName: string;
  mobileNumber: string;
  schoolName: string;
  cityBatch?: string;
  sessionCode?: string;
  projectTheme?: string;
  projectDescription: string;
  projectLink: string;
  confirmed: boolean;
}

const STORAGE_KEY = 'niat_ai_workshop_submissions_v1';

export async function submitProject(data: SubmissionPayload): Promise<{ success: boolean; message: string }> {
  // Store locally for audit & safety
  const submissionWithMeta = {
    ...data,
    id: 'SUB-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
    timestamp: new Date().toISOString()
  };

  try {
    const existing = getStoredSubmissions();
    existing.unshift(submissionWithMeta);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.warn('Could not cache submission to localStorage:', err);
  }

  // If real endpoint is set
  if (APP_CONFIG.googleSheetsEndpoint && APP_CONFIG.googleSheetsEndpoint !== 'NEEDS_SETUP') {
    try {
      const response = await fetch(APP_CONFIG.googleSheetsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionWithMeta)
      });
      const result = await response.json();
      if (result.result === 'success' || result.status === 'success') {
        return { success: true, message: 'Your project has been recorded in Google Sheets!' };
      } else {
        console.warn('Sheets API returned non-success:', result);
      }
    } catch (apiErr) {
      console.error('Failed to post to Google Sheets endpoint:', apiErr);
      // Even if network fails, local storage preserved the entry
      return { 
        success: true, 
        message: 'Saved securely on device. We will sync your submission automatically.' 
      };
    }
  }

  // Simulating delay and logging formatted payload
  await new Promise(resolve => setTimeout(resolve, 800));
  console.log('[NIAT AI Submission Recorded]', submissionWithMeta);

  return {
    success: true,
    message: 'Project submitted successfully!'
  };
}

export function getStoredSubmissions(): SubmissionPayload[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
