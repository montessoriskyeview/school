// startTime="8 am"
// endTime="9 am"
// title="Supervised care"
// detail="Supervised before care program available for full time students"

export interface DailyScheduleItem {
    startTime: string;
    endTime: string;
    title: string;
    detail: string;
}

export interface YearlyScheduleItem {
  startDate: string;
  endDate: string | undefined;
  detail: string;
}

export interface DailyScheduleProps {
  items: DailyScheduleItem[];
}

export interface YearlyScheduleProps {
  items: YearlyScheduleItem[];
}

export const SCHEDULE_ITEMS: DailyScheduleItem[] = [
  {
    startTime: '8am',
    endTime: '9',
    title: 'Supervised Care',
    detail: 'Supervised before care program available for full time students.'
  },
  {
    startTime: '9',
    endTime: '9:30',
    title: 'Arrival & Greetings',
    detail:
      'Students arrive, meet with teachers/advisors for announcements and check-ins.'
  },
  {
    startTime: '9:30',
    endTime: '10:30',
    title: 'Core Academics',
    detail:
      'Focus on foundational skills in reading, writing, and math through hands-on projects and interactive learning. Can be done indoors or outdoors.'
  },
  {
    startTime: '10:30',
    endTime: '11',
    title: 'Movement & Mindfulness',
    detail:
      'Active break outdoors with energizing activities like jump rope, yoga, or team games.'
  },
  {
    startTime: '11',
    endTime: '12pm',
    title: 'Deep Dives',
    detail:
      'Students delve into self-chosen areas of interest through project-based learning, discussions, or guest speakers. Can incorporate outdoor learning gardens or nature exploration.'
  },
  {
    startTime: '12pm',
    endTime: '1pm',
    title: 'Lunch & Social',
    detail:
      'Students enjoy a healthy lunch followed by unstructured playtime or social activities outdoors.'
  },

  {
    startTime: '1pm',
    endTime: '2',
    title: 'Electives & Enrichment',
    detail:
      'Students choose from a variety of electives like art, music, drama, or outdoor skills development workshops.'
  },
  {
    startTime: '2',
    endTime: '3',
    title: 'Project Time',
    detail:
      'Students work on ongoing projects related to core academics or electives, with teacher guidance outdoors or in designated indoor spaces.'
  },
  {
    startTime: '3',
    endTime: '3:30',
    title: 'Reflection & Wrap-up',
    detail:
      "Students share learnings, participate in group discussions, and reflect on the day's activities."
  },
  {
    startTime: '3:30',
    endTime: '4',
    title: 'Dismissal & Aftercare',
    detail:
      'Supervised aftercare program available for students who need to stay longer.'
  }
];

export const YEARLY_SCHEDULE_ITEMS: YearlyScheduleItem[] = [
  {
    startDate: 'September 3',
    endDate: undefined,
    detail: 'First day of learning center',
  },
  {
    startDate: 'October 25',
    endDate: undefined,
    detail: 'Nevada Day, no learning center',
  },
  {
    startDate: 'November 5',
    endDate: undefined,
    detail: 'Election Day, no learning center',
  },
  {
    startDate: 'November 11',
    endDate: undefined,
    detail: 'Veterans Day, no learning center',
  },
  {
    startDate: 'November 28',
    endDate: 'November 29',
    detail: 'Thanksgiving, no learning center',
  },
  {
    startDate: 'December 23',
    endDate: 'January 3',
    detail: 'Winter Break, no learning center',
  },
  {
    startDate: 'January 20',
    endDate: undefined,
    detail: 'MLK Day, no learning center',
  },
  {
    startDate: 'February 17',
    endDate: undefined,
    detail: "Presidents' Day, no learning center",
  },
  {
    startDate: 'March 17',
    endDate: 'March 21',
    detail: 'Spring Break, no learning center',
  },
  {
    startDate: 'April 18',
    endDate: undefined,
    detail: 'Easter holiday, no learning center',
  },
  {
    startDate: 'May 26',
    endDate: undefined,
    detail: 'Memorial Day, no learning center',
  },
  {
    startDate: 'May 30',
    endDate: undefined,
    detail: 'Last day of learning center before summer',
  },
];