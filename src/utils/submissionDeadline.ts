/**
 * =======================================================================
 *  SUBMISSION DEADLINE CYCLE UTILITY
 * =======================================================================
 * Automates weekly Wednesday project submission deadlines for Class 12 AI Workshops.
 *
 * Rules:
 * 1. Each submission challenge cohort activates on SATURDAY (00:00 IST).
 * 2. The deadline is the immediately following WEDNESDAY at 9:00 PM IST (Saturday + 4 days).
 *    - For example: Saturday 12th Sept 2026 -> Active deadline: Wednesday 16th Sept 2026, 9:00 PM IST.
 * 3. The portal remains ACTIVE from Saturday through Wednesday 9:00 PM IST.
 * 4. Once Wednesday 9:00 PM IST passes (Wednesday night, Thursday, Friday):
 *    - The current cycle is marked PASSED / CLOSED.
 * 5. On the next SATURDAY (00:00 IST):
 *    - It automatically updates to the next Wednesday (e.g. Wednesday 23rd Sept 2026, 9:00 PM IST)
 *      and becomes ACTIVE again.
 */

export interface SubmissionDeadlineInfo {
  targetISO: string;
  displayFull: string;
  displayShort: string;
  displayOrdinal: string;
  dateOnly: string;
  targetDate: Date;
  isActive: boolean;
  isExpired: boolean;
  nextCohortDisplay: string;
  nextDeadlineDisplay: string;
}

export function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const SHORT_MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
];

/**
 * Calculates the current weekly submission cycle based on IST (UTC+5:30).
 *
 * @param currentDate Optional reference date (defaults to new Date())
 */
export function getSubmissionDeadlineInfo(currentDate: Date = new Date()): SubmissionDeadlineInfo {
  // Convert reference date to IST components
  const utcMs = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;
  const istMs = utcMs + 5.5 * 3600000;
  const istDate = new Date(istMs);

  const istYear = istDate.getUTCFullYear();
  const istMonth = istDate.getUTCMonth();
  const istDay = istDate.getUTCDate();
  const istDayOfWeek = istDate.getUTCDay(); // 0: Sun, 1: Mon, ..., 6: Sat

  // Determine days since anchor Saturday:
  // Saturday (6): 0 days
  // Sunday (0): 1 day
  // Monday (1): 2 days
  // Tuesday (2): 3 days
  // Wednesday (3): 4 days
  // Thursday (4): 5 days
  // Friday (5): 6 days
  let daysSinceSaturday: number;
  if (istDayOfWeek === 6) {
    daysSinceSaturday = 0;
  } else {
    daysSinceSaturday = istDayOfWeek + 1;
  }

  // Anchor Saturday Date in IST
  const anchorSatUtc = Date.UTC(istYear, istMonth, istDay - daysSinceSaturday, 0, 0, 0);
  const anchorSat = new Date(anchorSatUtc);

  // Target Wednesday is Anchor Saturday + 4 days at 21:00 IST (15:30 UTC)
  const targetWedYear = anchorSat.getUTCFullYear();
  const targetWedMonth = anchorSat.getUTCMonth();
  const targetWedDay = anchorSat.getUTCDate() + 4;

  const targetWedTimestamp = Date.UTC(targetWedYear, targetWedMonth, targetWedDay, 15, 30, 0, 0);
  const targetDate = new Date(targetWedTimestamp);

  // Extract IST values for target Wednesday
  const wedDateInIst = new Date(targetWedTimestamp + 5.5 * 3600000);
  const wedDay = wedDateInIst.getUTCDate();
  const wedMonth = wedDateInIst.getUTCMonth();
  const wedYear = wedDateInIst.getUTCFullYear();

  // Active status rules:
  // - Cohort is active from Saturday 00:00 IST through Wednesday 21:00 IST
  // - On Wednesday after 21:00 IST, Thursday, and Friday, current cycle is expired.
  // - Next cycle activates on the upcoming Saturday.
  const isAfterDeadline = currentDate.getTime() >= targetWedTimestamp;
  const isActive = (istDayOfWeek === 6 || istDayOfWeek <= 3) && !isAfterDeadline;
  const isExpired = !isActive;

  // Formatted date representations
  const ordinal = getOrdinalSuffix(wedDay);
  const monthFull = MONTH_NAMES[wedMonth];
  const monthShort = SHORT_MONTH_NAMES[wedMonth];

  const displayFull = `Wednesday, ${wedDay} ${monthFull} ${wedYear}, 9:00 PM IST`;
  const displayShort = `WEDNESDAY, ${wedDay}${ordinal.toUpperCase()} ${monthShort.toUpperCase()} ${wedYear} · 9:00 PM IST`;
  const displayOrdinal = `Wednesday, ${wedDay}${ordinal} ${monthShort} ${wedYear}, 9:00 PM IST`;
  const dateOnly = `${wedDay}${ordinal} ${monthFull} ${wedYear}`;

  const pad = (n: number) => String(n).padStart(2, '0');
  const targetISO = `${wedYear}-${pad(wedMonth + 1)}-${pad(wedDay)}T21:00:00+05:30`;

  // Next Saturday & next Wednesday details (for closed state display)
  const daysUntilNextSat = (6 - istDayOfWeek + 7) % 7 || 7;
  const nextSatTimestamp = Date.UTC(istYear, istMonth, istDay + daysUntilNextSat, 0, 0, 0);
  const nextSatInIst = new Date(nextSatTimestamp + 5.5 * 3600000);
  const nextSatDay = nextSatInIst.getUTCDate();
  const nextSatMonth = nextSatInIst.getUTCMonth();
  const nextSatYear = nextSatInIst.getUTCFullYear();

  const nextWedDay = nextSatDay + 4;
  const nextWedInIst = new Date(Date.UTC(nextSatYear, nextSatMonth, nextWedDay, 15, 30, 0));
  const nWedDay = nextWedInIst.getUTCDate();
  const nWedMonth = nextWedInIst.getUTCMonth();
  const nWedYear = nextWedInIst.getUTCFullYear();

  const nextCohortDisplay = `Saturday, ${nextSatDay}${getOrdinalSuffix(nextSatDay)} ${SHORT_MONTH_NAMES[nextSatMonth]} ${nextSatYear}`;
  const nextDeadlineDisplay = `Wednesday, ${nWedDay}${getOrdinalSuffix(nWedDay)} ${SHORT_MONTH_NAMES[nWedMonth]} ${nWedYear}`;

  return {
    targetISO,
    displayFull,
    displayShort,
    displayOrdinal,
    dateOnly,
    targetDate,
    isActive,
    isExpired,
    nextCohortDisplay,
    nextDeadlineDisplay,
  };
}
