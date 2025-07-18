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
        title: 'Emergency Contact Form',
        description: 'Update emergency contact information',
        link: '/emergency-contact.pdf',
        Icon: Assignment,
      },
      {
        title: 'Medical Release Form',
        description: 'Authorization for medical treatment if needed',
        link: '/medical-release.pdf',
        Icon: Assignment,
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
      {
        title: 'Tuition Payment Schedule',
        description: 'Monthly payment schedule and policies',
        link: '/tuition-schedule.pdf',
        Icon: Description,
      },
      {
        title: 'School Calendar',
        description: 'Academic calendar with holidays and events',
        link: '/school-calendar.pdf',
        Icon: School,
      },
    ],
    information: [
      {
        title: 'Parent Communication Guidelines',
        description: 'How to stay connected with teachers and staff',
        link: '/communication-guidelines.pdf',
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
