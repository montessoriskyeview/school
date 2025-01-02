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
              '$6,750 per school year',
              'OR',
              '$750 paid monthly for September through May',
              'Year round financing is available at $587.50 per month from September through August'
            ]}
          />
        }
      />
      <CollapseContainer
        title='Full-time School Day'
        content={
          <SchoolList
            items={[
              '$9,900 per school year',
              'OR',
              '$1,100 paid monthly for September through May',
              'Year round financing is available at $850 per month from September through August'
            ]}
          />
        }
      />
      <CollapseContainer
        title='Registration'
        content={
          <SchoolList
            items={[
              '$400 Registration Fee before August 31st',
              '$500 Registration Fee after August 31st'
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
      <InfoText
        text={
          <em>
            Please note that processing fees are not included in the total cost
            and range from 1% to 5% depending on your selected payment method.
          </em>
        }
      />
    </CanvasView>
  );
};
