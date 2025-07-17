import { Description, School, Assignment, Info } from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IResourceItem {
  title: string;
  description: string;
  link: string;
  category: 'form' | 'document' | 'info';
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
}

export const getResourcesByType = (
  userType: 'parents' | 'staff'
): IResourceItem[] => {
  if (userType === 'parents') {
    return getParentResources();
  } else {
    return getStaffResources();
  }
};

const getParentResources = (): IResourceItem[] => {
  return [
    {
      title: 'Parent Handbook',
      description: 'Comprehensive guide for parents about our program',
      link: '/public/handbook.pdf',
      category: 'document',
      Icon: Description,
    },
    {
      title: 'Emergency Contact Form',
      description: 'Update emergency contact information',
      link: '/documents/emergency-contact.pdf',
      category: 'form',
      Icon: Assignment,
    },
    {
      title: 'Medical Release Form',
      description: 'Authorization for medical treatment if needed',
      link: '/documents/medical-release.pdf',
      category: 'form',
      Icon: Assignment,
    },
    {
      title: 'Tuition Payment Schedule',
      description: 'Monthly payment schedule and policies',
      link: '/documents/tuition-schedule.pdf',
      category: 'document',
      Icon: Description,
    },
    {
      title: 'School Calendar',
      description: 'Academic calendar with holidays and events',
      link: '/documents/school-calendar.pdf',
      category: 'document',
      Icon: School,
    },
    {
      title: 'Parent Communication Guidelines',
      description: 'How to stay connected with teachers and staff',
      link: '/documents/communication-guidelines.pdf',
      category: 'info',
      Icon: Info,
    },
  ];
};

const getStaffResources = (): IResourceItem[] => {
  return [
    {
      title: 'Staff Handbook',
      description: 'Complete guide for staff members',
      link: '/documents/staff-handbook.pdf',
      category: 'document',
      Icon: Description,
    },
    {
      title: 'Emergency Procedures',
      description: 'Protocols for emergency situations',
      link: '/documents/emergency-procedures.pdf',
      category: 'document',
      Icon: Description,
    },
    {
      title: 'Curriculum Guidelines',
      description: 'Montessori curriculum standards and objectives',
      link: '/documents/curriculum-guidelines.pdf',
      category: 'document',
      Icon: School,
    },
    {
      title: 'Student Assessment Form',
      description: 'Template for student progress assessments',
      link: '/documents/assessment-form.pdf',
      category: 'form',
      Icon: Assignment,
    },
    {
      title: 'Incident Report Form',
      description: 'Document incidents and accidents',
      link: '/documents/incident-report.pdf',
      category: 'form',
      Icon: Assignment,
    },
    {
      title: 'Professional Development Resources',
      description: 'Training materials and development opportunities',
      link: '/documents/professional-development.pdf',
      category: 'info',
      Icon: Info,
    },
    {
      title: 'Daily Schedule Template',
      description: 'Standard daily schedule for classrooms',
      link: '/documents/daily-schedule.pdf',
      category: 'document',
      Icon: School,
    },
  ];
};
