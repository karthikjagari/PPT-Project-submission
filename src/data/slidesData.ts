import { getSubmissionDeadlineInfo } from '../config';

export interface SlideItem {
  id: number;
  slideNumber: string;
  category: string;
  title: string;
  subtitle?: string;
  accent: string;
  badge?: string;
  content: {
    type: 'cover' | 'themes' | 'flow' | 'steps' | 'prompting' | 'sharing' | 'ideas' | 'deadline' | 'conclusion';
    data: any;
  };
}

export const SLIDES_DATA: SlideItem[] = [
  // Slide 1
  {
    id: 1,
    slideNumber: '01 / 09',
    category: 'Project Brief',
    title: 'AI-POWERED PPT CREATION',
    subtitle: 'Class 12 AI Workshop Hands-on Challenge',
    accent: '#8B1E2D',
    badge: 'NIAT Workshop Challenge',
    content: {
      type: 'cover',
      data: {
        headline: 'AI-POWERED PPT CREATION',
        tagline: 'Turn your ideas into a compelling, professional AI presentation using modern generative tools.',
        tools: ['Gamma.app', 'ChatGPT / Gemini', 'Google Slides'],
        org: 'National Institute of Applied Technology (NIAT)'
      }
    }
  },
  // Slide 2
  {
    id: 2,
    slideNumber: '02 / 09',
    category: 'The Challenge — Pick One Theme',
    title: '3 Powerful Themes',
    subtitle: 'Choose the theme that excites you the most and build your deck around it.',
    accent: '#D97706',
    badge: 'Theme Selection',
    content: {
      type: 'themes',
      data: {
        themes: [
          {
            title: 'Build for India',
            badge: 'Social Impact Startups',
            color: 'border-emerald-300 bg-emerald-50/70 text-emerald-950',
            badgeColor: 'bg-emerald-100 text-emerald-800',
            description:
              'Create solutions that help India grow. Pick a real problem around you — education gaps, waste, water issues — and build an idea that makes life better for people.',
            ideas: ['Govt School AI Tutor', 'Scholarship Finder', 'Smart Waste Tracker']
          },
          {
            title: 'Fix My Student Life',
            badge: 'Student Pain-Point Innovations',
            color: 'border-blue-300 bg-blue-50/70 text-blue-950',
            badgeColor: 'bg-blue-100 text-blue-800',
            description:
              'Solve real problems students face every day like distractions, timetable chaos, study stress, transport issues, peer learning, or even hostel/canteen struggles.',
            ideas: ['AI Study Planner', 'Smart Canteen App', 'Study Group Matcher']
          },
          {
            title: 'Everyday Life Solutions',
            badge: 'Home, Family, Society',
            color: 'border-amber-300 bg-amber-50/70 text-amber-950',
            badgeColor: 'bg-amber-100 text-amber-800',
            description:
              'Think about the small frustrations around you like issues at home, daily routines, family tasks, safety, health, or neighborhood issues & design solutions that improve everyday life.',
            ideas: ['Food-Waste Tracker', 'Water-Leak Alert', 'Family Task Sync']
          }
        ]
      }
    }
  },
  // Slide 3
  {
    id: 3,
    slideNumber: '03 / 09',
    category: 'Project Objective',
    title: "Let's Create Professional Presentations!",
    subtitle: 'Using AI presentation engines to structure real ideas.',
    accent: '#8B1E2D',
    badge: 'Gamma.app Integration',
    content: {
      type: 'flow',
      data: {
        toolName: 'Gamma AI',
        stages: ['Problem Identification', 'AI Solution', 'Actionable Steps', 'Impact & Conclusion'],
        objectiveText:
          'Design and create a complete, structured presentation using AI tools like Gamma. Your presentation should clearly explain a problem, show its impact, propose solutions, outline actionable steps, and deliver a strong conclusion.'
      }
    }
  },
  // Slide 4
  {
    id: 4,
    slideNumber: '04 / 09',
    category: 'Presentation Creation Flow',
    title: 'Step-By-Step Process',
    subtitle: 'From zero idea to complete polished presentation deck.',
    accent: '#0F172A',
    badge: '6 Practical Steps',
    content: {
      type: 'steps',
      data: {
        steps: [
          { num: '01', name: 'Go to Gamma.app', desc: 'Sign up or log in using your student email account.' },
          { num: '02', name: 'Choose Category', desc: 'Pick your preferred theme and clearly define your presentation topic.' },
          { num: '03', name: 'Plan Structure', desc: 'Break deck into Problem, Solution, Feasibility, and Impact.' },
          { num: '04', name: 'Write Prompt', desc: 'Generate high quality outlines using ChatGPT/Gemini and feed to Gamma.' },
          { num: '05', name: 'Review & Refine', desc: 'Customize cards, improve copywriting, and adjust theme styling.' },
          { num: '06', name: 'Download & Share', desc: 'Export to Google Slides and get your shareable link.' }
        ]
      }
    }
  },
  // Slide 5
  {
    id: 5,
    slideNumber: '05 / 09',
    category: 'Project Demonstration',
    title: 'Step 4: Prompt Creation & Slide Generation',
    subtitle: 'Bridging LLMs with Gamma for maximum slide quality.',
    accent: '#8B1E2D',
    badge: 'AI Prompt Technique',
    content: {
      type: 'prompting',
      data: {
        concept: 'My Study Life Transformation with AI',
        chatgpt: {
          title: 'Step A: ChatGPT / Gemini Prompt',
          prompt:
            'Act as a presentation expert. Create a 7-slide outline for Class 12 students on "AI Study Planner for Board Exams". Include Problem, AI Solution, Feature Walkthrough, Time Savings, and Student Outcome.'
        },
        gamma: {
          title: 'Step B: Gamma AI Input',
          prompt:
            'Paste the structured outline directly into Gamma.app -> Choose Presentation -> Select Minimal Warm Theme -> Click Generate!'
        }
      }
    }
  },
  // Slide 6
  {
    id: 6,
    slideNumber: '06 / 09',
    category: 'Share Your Presentation',
    title: 'Step 6: Export & Share Your Link',
    subtitle: 'Crucial step: ensure your slide link is publicly accessible.',
    accent: '#D97706',
    badge: 'Submission Requirement',
    content: {
      type: 'sharing',
      data: {
        steps: [
          { title: 'Click 3-Dot Menu', detail: 'In Gamma, open the menu (⋮) at the top right of your generated deck.' },
          { title: 'Select Export', detail: "Choose 'Export' from the dropdown options." },
          { title: 'Export to Google Slides', detail: 'Click Google Slides so your deck opens directly in your Google Drive.' },
          { title: "Set Permission: 'Anyone with Link'", detail: "Click Share > Under General Access, change to 'Anyone with the link can view'." },
          { title: 'Copy & Submit', detail: 'Copy the link and paste it into the submission form below!' }
        ]
      }
    }
  },
  // Slide 7
  {
    id: 7,
    slideNumber: '07 / 09',
    category: 'PPT Ideas',
    title: 'Your Turn! Example Project Ideas',
    subtitle: 'Need inspiration? Pick any of these prompts or invent your own.',
    accent: '#0F172A',
    badge: 'Inspiration Hub',
    content: {
      type: 'ideas',
      data: {
        groups: [
          {
            theme: 'Build For India',
            ideas: [
              'AI Tutor for Regional Language Government Schools',
              'Smart Scholarship Finder for Rural Students',
              'AI-Driven Smart Waste Management System',
              'Career Guidance Copilot for Small-Town Students'
            ]
          },
          {
            theme: 'Fix My Student Life',
            ideas: [
              'AI Study Planner & Board Exam Revision Timetable',
              'College & Coaching Announcement Hub',
              'Smart Canteen Queue & Pre-Ordering App',
              'Peer Study Matcher for Physics & Maths Doubt Clearing'
            ]
          },
          {
            theme: 'Everyday Life Solutions',
            ideas: [
              'Smart Household Food-Waste Tracker & Recipe Suggester',
              'Home Water-Leak Detection & Alert System',
              'Automated Family Medication & Task Reminder',
              'Smart Waste-Sorting Assistant Using Mobile Vision'
            ]
          }
        ]
      }
    }
  },
  // Slide 8
  {
    id: 8,
    slideNumber: '08 / 09',
    category: 'Project Submission',
    title: 'Submission Guidelines & Deadline',
    subtitle: 'Submit before the clock runs out to be eligible for weekly recognition.',
    accent: '#8B1E2D',
    badge: 'Official Deadline',
    content: {
      type: 'deadline',
      data: {
        howToSubmit: [
          'Complete your presentation deck in Gamma / Google Slides.',
          'Double check that sharing permissions are set to Anyone with link.',
          'Fill out the official project submission form with your presentation link.',
          'Submit your presentation URL for evaluation.'
        ],
        deadlineText: getSubmissionDeadlineInfo().displayOrdinal,
        note: 'Ensure your submission is complete and follows the project guidelines to qualify for evaluation.'
      }
    }
  },
  // Slide 9
  {
    id: 9,
    slideNumber: '09 / 09',
    category: 'NIAT Workshop Concluding Slide',
    title: 'All The Best!',
    subtitle: 'You have the tools. You have the ideas. Now build something real.',
    accent: '#8B1E2D',
    badge: 'BUILD · COMPETE · RISE',
    content: {
      type: 'conclusion',
      data: {
        quote: 'Your project does not need to be perfect. It just needs to be yours.',
        subquote: 'Take the first step. Share your creativity with the world.',
        actionPrompt: 'Scroll down to submit your presentation or join the weekend AI Bootcamp!'
      }
    }
  }
];
