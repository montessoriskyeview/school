import {InfoText} from "../../components/shared/InfoText"
import {CanvasView} from "../../components/shared/Canvas/CanvasView"
import { ListText } from '../../components/shared/ListText';
import {
  DailyScheduleProps,
  YearlyScheduleProps,
  SCHEDULE_ITEMS,
  YEARLY_SCHEDULE_ITEMS
} from './items';
import { NestedListItem } from '../../components/shared/NestedListItem';
import { CollapseContainer } from '../../components/shared/CollapseContainer';
import { Typography } from '../../components/shared/Typography';

export const Schedule = () => {
  return (
    <CanvasView>
      <InfoText
        title="Schedule"
        text="We believe time can be used more effectively and efficiently for students in the classroom and offer a shortened core learning day as well as a full-time option for care. Our full-day learning day is offered from 8:00 am to 4:00 pm, with our core learning day taking place between the hours of 9:00 am - 1:00 pm."
      />
      <CollapseContainer
        title="2024-2025 Learning Year"
        content={<YearlySchedule items={YEARLY_SCHEDULE_ITEMS} />}
      />
      <CollapseContainer
        title="Daily Schedule"
        content={
          <>
            <DailySchedule items={SCHEDULE_ITEMS} />
            <Typography>
              {
                'This is a flexible framework, and the specific activities can be tailored to different age groups and learning objectives.'
              }
            </Typography>
          </>
        }
      />
      {/* <ListText
        title="Calendar"
        items={[
          "Traditional learning year: September 3rd - May 30",
          "Summer camp: June - August",
        ]}
      /> */}
      <ListText
        title="Weekly schedule"
        items={[
          'Full time: Monday through Friday - 8am to 4pm',
          'Part time: Monday through Thursday - 9am to 1pm',
        ]}
      />
    </CanvasView>
  );
};

const DailySchedule = ({ items }: DailyScheduleProps) => {
  return (
    <>
      {items.map(i => (
        <NestedListItem
          key={i.title}
          title={`${i.startTime} - ${i.endTime}`}
          description={[i.title, i.detail]}
        />
      ))}
    </>
  );
};

const YearlySchedule = ({ items }: YearlyScheduleProps) => {
  return (
    <>
      {items.map(i => (
        <NestedListItem
          key={i.startDate + i.endDate}
          title={`${i.startDate}${i.endDate ? ` - ${i.endDate}` : ''}`}
          description={[i.detail]}
        />
      ))}
    </>
  );
};

