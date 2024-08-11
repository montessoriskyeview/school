import { SchoolList } from '../components/shared/ListText';
import { InfoText } from '../components/shared/InfoText';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { CollapseContainer } from '../components/shared/CollapseContainer';

export const Tuition = () => {
  return (
    <CanvasView>
      <InfoText
        text={
          'Payment is currently accepted through the forms in the registration page (from the menu)'
        }
      />
      <CollapseContainer
        title='Part-time Core Day Only'
        content={
          <SchoolList
            items={[
              '$587.50 monthly for 12 months',
              'OR',
              '$6,750 paid in full (save $300)',
              'Hours: Monday through Thursday - 9am to 1pm'
            ]}
          />
        }
      />
      <CollapseContainer
        title='Full-time School Day'
        content={
          <SchoolList
            items={[
              '$850 monthly for 12 months',
              'OR',
              '$9,900 paid in full (save $300)',
              'Hours: Monday through Friday - 8am to 4pm'
            ]}
          />
        }
      />
      <CollapseContainer
        title='Deposits'
        content={
          <SchoolList
            items={[
              '$400 Deposit Fee (includes registration) before August 31st',
              '$500 Deposit Fee (includes registration) after August 31st'
            ]}
          />
        }
      />
      <CollapseContainer
        title='Tuition includes'
        content={
          <SchoolList
            items={[
              'Curriculum',
              'Fall/Spring school pictures',
              'Monthly “Fun for Everyone” activities',
              'Snacks',
              'Supplies'
            ]}
          />
        }
      />
      <InfoText title='School Calendar Year' text='September 3rd - May 30' />
    </CanvasView>
  );
};
