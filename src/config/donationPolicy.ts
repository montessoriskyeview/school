export const donationPolicy = {
  legalStatus:
    'Montessori Skye View is transitioning to a 501(c)(3) nonprofit model.',
  familyParticipation: {
    hoursPerSemester: 20,
    hoursPerYear: 40,
    inLieuDonationPerHour: 25,
  },
  programs: {
    fullTime: {
      annualSuggestedDonation: '$9,900',
      monthlySuggestedDonationSchoolYear: '$1,100',
      monthlySuggestedDonationYearRound: '$850',
      schoolYearMonthsLabel: 'September through May',
      yearRoundMonthsLabel: 'September through August',
    },
    partTime: {
      annualSuggestedDonation: '$6,750',
      monthlySuggestedDonationSchoolYear: '$750',
      monthlySuggestedDonationYearRound: '$587.50',
      schoolYearMonthsLabel: 'September through May',
      yearRoundMonthsLabel: 'September through August',
    },
  },
  enrollment: {
    earlyDonation: '$400',
    standardDonation: '$500',
    earlyDeadlineLabel: 'Before August 31st',
    standardDeadlineLabel: 'After August 31st',
  },
  meals: {
    suggestedDonationPerDay: '$3',
  },
  messaging: {
    sectionHeading: 'Suggested Family Donation Options',
    registrationHeading: 'Enrollment Donation Guidelines',
  },
} as const;
