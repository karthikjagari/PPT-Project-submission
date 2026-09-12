/**
 * =======================================================================
 *  CENTRAL CONFIGURATION CONSTANTS
 * =======================================================================
 * Single source of truth for all links, deadlines, and project configuration.
 */

// 1. PROJECT SUBMISSION URL (Used for all Project CTAs)
export const PROJECT_SUBMISSION_URL =
  'https://docs.google.com/forms/d/1GykCIHlFkp8oAYe1PGUt6CXgBjTb-F5edMIxMNGj3cQ/viewform?edit_requested=true';

// 2. AI BOOTCAMP REGISTRATION URL (Used for all Join Bootcamp CTAs)
export const BOOTCAMP_REGISTRATION_URL =
  'https://docs.google.com/forms/d/17vhDbnctM0qnfktBP3NSIZMSF4bSERTHWuQUjSrmNJI/edit';

// 3. PROJECT DEADLINE (Automated weekly Wednesday cycle, activates on Saturday)
export { getSubmissionDeadlineInfo } from './utils/submissionDeadline';
import { getSubmissionDeadlineInfo } from './utils/submissionDeadline';

const initialCycle = getSubmissionDeadlineInfo();
export const SUBMISSION_DEADLINE_ISO = initialCycle.targetISO;
export const SUBMISSION_DEADLINE_DISPLAY = initialCycle.displayFull;
export const SUBMISSION_DEADLINE_SHORT = initialCycle.displayShort;

// 4. PROJECT SLIDES / GOOGLE PRESENTATION LINK
export const PROJECT_PPT_URL =
  'https://docs.google.com/presentation/d/1iYbLhSILDeJvySsy0YPWT2ZiEYrOh8UUmIs_kmDWVrs/edit?usp=sharing';
export const PROJECT_PPT_DOWNLOAD_URL =
  'https://docs.google.com/presentation/d/1iYbLhSILDeJvySsy0YPWT2ZiEYrOh8UUmIs_kmDWVrs/export/pptx';

// 5. CITY / BATCH LIST
export const CITY_BATCHES = [
  'Delhi NCR (Offline Session)',
  'Bengaluru (Offline Session)',
  'Mumbai & Pune (Offline Session)',
  'Hyderabad (Offline Session)',
  'Chennai (Offline Session)',
  'Kolkata (Offline Session)',
  'School Campus Partner Batch',
  'Online AI Cohort'
];

export const APP_CONFIG = {
  projectSubmissionUrl: PROJECT_SUBMISSION_URL,
  bootcampRegistrationUrl: BOOTCAMP_REGISTRATION_URL,
  googleSheetsEndpoint: 'NEEDS_SETUP',
  submissionDeadlineISO: SUBMISSION_DEADLINE_ISO,
  submissionDeadlineDisplay: SUBMISSION_DEADLINE_DISPLAY,
  projectPptUrl: PROJECT_PPT_URL,
  attendanceGating: 'OPEN_LINK' as 'OPEN_LINK' | 'REQUIRES_CODE',
  validSessionCodes: ['NIAT2026', 'AI2026', 'CLASS12', 'BOOTCAMP'],
  enableCityBatchSelector: true,
  cityBatches: CITY_BATCHES,
  supportEmail: 'admissions@niat.org.in',
  supportContactNumber: '+91 98765 43210'
};
