export interface VolunteerOpportunity {
  title: string;
  description: string;
  timeCommitment: string;
  skills: string;
}

export const parentInvolvementContent = {
  heroTitle: '🤝 Parent Involvement Opportunities',
  heroDescription:
    'As a parent cooperative, we thrive on the active participation of our families. Every parent contributes to creating an exceptional learning environment for all children.',
  workHoursTitle: '📋 Work Hour Requirements',
  workHoursItems: [
    'Each family commits to 20 hours of volunteer work per semester',
    'Work hours can be fulfilled through various opportunities based on your skills and schedule',
    'Flexible scheduling accommodates working parents and different availability',
    'Work hours directly reduce your membership fees - every hour saves money',
    'Track your hours easily through our online system',
    'Families can work together to fulfill requirements and build community',
  ],
  volunteerSectionTitle: '🌟 Volunteer Opportunities',
  volunteerSectionDescription:
    'Choose from a variety of meaningful ways to contribute to our learning community',
  volunteerOpportunities: [
    {
      title: '🎨 Classroom Assistant',
      description:
        'Help with daily activities, material preparation, and student guidance',
      timeCommitment: '2-4 hours per week',
      skills:
        'Patience, love for children, willingness to learn Montessori methods',
    },
    {
      title: '🌿 Garden & Outdoor Learning',
      description:
        'Maintain our beautiful outdoor spaces and lead nature-based activities',
      timeCommitment: '3-5 hours per month',
      skills:
        'Gardening experience, outdoor enthusiasm, basic maintenance skills',
    },
    {
      title: '📚 Library & Reading Program',
      description:
        'Organize our library, lead reading sessions, and book selection',
      timeCommitment: '2-3 hours per week',
      skills: 'Love of reading, organizational skills, storytelling ability',
    },
    {
      title: '🍎 Snack & Nutrition Coordinator',
      description:
        'Plan healthy snacks, coordinate with families, manage food programs',
      timeCommitment: '4-6 hours per month',
      skills: 'Nutrition knowledge, food safety awareness, coordination skills',
    },
    {
      title: '🎭 Special Events & Field Trips',
      description:
        'Plan and coordinate community events, celebrations, and educational trips',
      timeCommitment: '5-8 hours per month',
      skills: 'Event planning, communication, creativity, organizational skills',
    },
  ] as VolunteerOpportunity[],
  governanceTitle: '🏛️ Governance Participation',
  governanceItems: [
    'Board of Directors: Elected parent representatives who guide cooperative policy',
    'Education Committee: Focus on curriculum, teaching methods, and learning outcomes',
    'Finance Committee: Manage budget, fees, and financial planning',
    'Facilities Committee: Oversee maintenance, improvements, and campus development',
    'Events Committee: Plan community gatherings, fundraisers, and celebrations',
    'Communication Committee: Manage newsletters, website, and community outreach',
    'All families have voting rights in major cooperative decisions',
    'Monthly member meetings provide input on important issues',
  ],
  benefitsTitle: '💡 Benefits of Parent Involvement',
  benefitsItems: [
    "<strong>For Your Child:</strong> Seeing parents actively involved in their education builds confidence, strengthens family bonds, and creates positive associations with learning.",
    "<strong>For Your Family:</strong> Build meaningful relationships with other families, develop new skills, and have direct input into your child's educational experience.",
    '<strong>For Our Community:</strong> Create a stronger, more connected learning environment where every family contributes to the success of all children.',
  ],
  ctaTitle: '🚀 Ready to Get Involved?',
  ctaDescription:
    'Contact us to learn more about volunteer opportunities and how you can contribute to our thriving cooperative community. Every family brings unique skills and perspectives that make our learning environment richer for everyone.',
};
