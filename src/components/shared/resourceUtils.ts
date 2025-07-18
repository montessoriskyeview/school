import { Description, School, Assignment, Info } from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IResourceItem {
  title: string;
  description: string;
  link: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  isHighlighted?: boolean;
}

interface IResourceCategories {
  forms: IResourceItem[];
  documents: IResourceItem[];
  information: IResourceItem[];
}

export const getResourcesByType = (
  userType: 'parents' | 'staff'
): IResourceCategories => {
  if (userType === 'parents') {
    return getParentResources();
  } else {
    return getStaffResources();
  }
};

const getParentResources = (): IResourceCategories => {
  return {
    forms: [
      {
        title: 'Medical Release Form',
        description: 'Authorization for medical treatment if needed',
        link: 'https://forms.gle/ffVZTu7zwUq5uwqn6',
        Icon: Assignment,
        isHighlighted: true,
      },
      {
        title: 'Monthly Parent Feedback Form',
        description: 'Feedback form for parents',
        link: 'https://forms.gle/AZMdY2XUUtUUnUQ79',
        Icon: Assignment,
        isHighlighted: true,
      },
    ],
    documents: [
      {
        title: 'Parent Handbook',
        description: 'Comprehensive guide for parents about our program',
        link: '/handbook.pdf',
        Icon: Description,
        isHighlighted: true,
      },
    ],
    information: [
      {
        title: 'School Calendar',
        description: 'Academic calendar with holidays and events',
        link: 'https://calendar.google.com/calendar/u/0?cid=bndsdm1vbnRlc3NvcmlAZ21haWwuY29t',
        Icon: School,
        isHighlighted: true,
      },
      {
        title: 'Parent Communication Guidelines',
        description: 'How to stay connected with teachers and staff',
        link: 'https://docs.google.com/document/d/1JJFfZA7JXo1tRGHWm1H7A4HeN6uyK_pPcBuv5yvxgGQ/edit?usp=sharing',
        Icon: Info,
      },
    ],
  };
};

const getStaffResources = (): IResourceCategories => {
  return {
    forms: [
      {
        title: 'Student Assessment Form',
        description: 'Template for student progress assessments',
        link: '/assessment-form.pdf',
        Icon: Assignment,
        isHighlighted: true,
      },
      {
        title: 'Incident Report Form',
        description: 'Document incidents and accidents',
        link: '/incident-report.pdf',
        Icon: Assignment,
      },
    ],
    documents: [
      {
        title: 'Staff Handbook',
        description: 'Complete guide for staff members',
        link: '/staff-handbook.pdf',
        Icon: Description,
      },
      {
        title: 'Emergency Procedures',
        description: 'Protocols for emergency situations',
        link: '/emergency-procedures.pdf',
        Icon: Description,
      },
      {
        title: 'Curriculum Guidelines',
        description: 'Montessori curriculum standards and objectives',
        link: '/curriculum-guidelines.pdf',
        Icon: School,
      },
      {
        title: 'Daily Schedule Template',
        description: 'Standard daily schedule for classrooms',
        link: '/daily-schedule.pdf',
        Icon: School,
      },
    ],
    information: [
      {
        title: 'Professional Development Resources',
        description: 'Training materials and development opportunities',
        link: '/professional-development.pdf',
        Icon: Info,
      },
    ],
  };
};
