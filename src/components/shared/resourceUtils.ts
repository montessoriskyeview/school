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

// Centralized resource link objects for easy reference
const parentResourceLinks = {
  medicalReleaseForm: 'https://forms.gle/ffVZTu7zwUq5uwqn6',
  monthlyParentFeedbackForm: 'https://forms.gle/AZMdY2XUUtUUnUQ79',
  parentHandbook: '/handbook.pdf',
  schoolCalendar: '/schedule',
  studentWithdrawalForm: 'https://forms.gle/yLLCxgSSZxHSJHKj6',
  parentCommunicationGuidelines:
    'https://docs.google.com/document/d/1JJFfZA7JXo1tRGHWm1H7A4HeN6uyK_pPcBuv5yvxgGQ/edit?usp=sharing',
  complaintForm: 'https://forms.gle/sZRJJQ3eqqydz6zv8',
  studentDietaryIsolationForm: 'https://forms.gle/hdg4cMQkGQUdZFbA9',
};

const staffResourceLinks = {
  monthlyStudentAssessmentForm: 'https://forms.gle/m2rv6LXK5t2KpfDX8',
  incidentReportForm: 'https://forms.gle/BMG6JH1UJwrHTUAp6',
  removalRequestForm: 'https://forms.gle/zBhUA3SfxGgRUc6b7',
  materialOrMaintainanceForm: 'https://forms.gle/f1XtXnpS4UXGB5999',
  staffSuggestionsForm: 'https://forms.gle/wi4wQ8ptbBSvX3Ch7',
  studentWithdrawalForm: 'https://forms.gle/QasjjhNxqE2DUi3D6',
  emergencyProcedures:
    'https://docs.google.com/document/d/1hHweHIfTDGK3PwaowHxVQdlvn26thOPy6K43xmhfjCk/edit?usp=sharing',
  parentCommunicationGuidelines:
    'https://docs.google.com/document/d/1p0v0ffUkCtoA92e0FvTX5FsH_Gb05c7xL8X_kz7V7rU/edit?usp=sharing',
};

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
        link: parentResourceLinks.medicalReleaseForm,
        Icon: Assignment,
        isHighlighted: true,
      },
      {
        title: 'Monthly Parent Feedback Form',
        description: 'Feedback form for parents',
        link: parentResourceLinks.monthlyParentFeedbackForm,
        Icon: Assignment,
        isHighlighted: true,
      },
      {
        title: 'Student Withdrawal Form',
        description:
          'Give us feedback when withdrawing a child from the program',
        link: parentResourceLinks.studentWithdrawalForm,
        Icon: Assignment,
      },
      {
        title: 'Complaint Form',
        description: 'File a complaint about the program',
        link: parentResourceLinks.complaintForm,
        Icon: Assignment,
        isHighlighted: true,
      },
      {
        title: 'Student Dietary Isolation Form',
        description: 'Request to isolate a child from the program',
        link: parentResourceLinks.studentDietaryIsolationForm,
        Icon: Assignment,
      },
    ],
    documents: [
      {
        title: 'Parent Handbook',
        description: 'Comprehensive guide for parents about our program',
        link: parentResourceLinks.parentHandbook,
        Icon: Description,
        isHighlighted: true,
      },
    ],
    information: [
      {
        title: 'School Calendar',
        description: 'Academic calendar with holidays and events',
        link: parentResourceLinks.schoolCalendar,
        Icon: School,
        isHighlighted: true,
      },
      {
        title: 'Parent Communication Guidelines',
        description: 'How to stay connected with teachers and staff',
        link: parentResourceLinks.parentCommunicationGuidelines,
        Icon: Info,
      },
    ],
  };
};

const getStaffResources = (): IResourceCategories => {
  return {
    forms: [
      {
        title: 'Staff Suggestions Form',
        description: 'Suggestions for staff',
        link: staffResourceLinks.staffSuggestionsForm,
        Icon: Assignment,
        isHighlighted: true,
      },
      {
        title: 'Monthly Student Assessment Form',
        description: 'Template for student progress assessments',
        link: staffResourceLinks.monthlyStudentAssessmentForm,
        Icon: Assignment,
        isHighlighted: true,
      },
      {
        title: 'Incident Report Form',
        description: 'Document incidents and accidents',
        link: staffResourceLinks.incidentReportForm,
        Icon: Assignment,
      },
      {
        title: 'Removal Request Form',
        description: 'Request to remove a child from the program',
        link: staffResourceLinks.removalRequestForm,
        Icon: Assignment,
      },
      {
        title: 'Material or Maintainance Requeest Form',
        description: 'Request for materials or maintainance',
        link: staffResourceLinks.materialOrMaintainanceForm,
        Icon: Assignment,
      },
      {
        title: 'Student Withdrawal Form',
        description: 'Reflection and feedback when a parent withdraws a child',
        link: staffResourceLinks.studentWithdrawalForm,
        Icon: Assignment,
      },
    ],
    documents: [
      {
        title: 'Emergency Procedures',
        description: 'Protocols for emergency situations',
        link: staffResourceLinks.emergencyProcedures,
        Icon: Description,
      },
      {
        title: 'Parent Communication Guidelines',
        description:
          'How to communicate with concerned or even frustrated parents',
        link: staffResourceLinks.parentCommunicationGuidelines,
        Icon: Info,
        isHighlighted: true,
      },
    ],
    information: [],
  };
};
