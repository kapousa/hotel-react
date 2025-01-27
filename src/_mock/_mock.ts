export const _id = (index: number) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index}`;

export const _times = (index: number) => {
  const getFormattedDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const today = new Date(); // Get today's date
  const formattedTodayWithTime = `${getFormattedDate(today)} ${today
    .toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    .toLowerCase()}`;
  
  const formattedToday = getFormattedDate(today);

  const dates = Array(24).fill(formattedToday); // Replace all dates with today's date
  dates[0] = formattedTodayWithTime; // Add time for the first element if needed

  return dates[index];
};

export const _fullName = (index: number) =>
  [
    'Billy Stoltenberg',
    'Eloise Ebert',
    'Teresa Luettgen',
    'Salvador Mayert',
    'Dr. Guadalupe Rath',
    'Kelvin Pouros',
    'Thelma Langworth',
    'Kristen Wunsch',
    'Steve Welch',
    'Brian Jacobs',
    'Lillie Schultz',
    'Mr. Conrad Spinka',
    'Charlene Krajcik',
    'Kerry Kuhlman',
    'Betty Hammes',
    'Tony Paucek PhD',
    'Sherri Davis',
    'Angel Rolfson-Kulas',
    'Dr. Lee Doyle-Grant',
    'Cheryl Romaguera',
    'Billy Braun',
    'Adam Trantow',
    'Brandon Von',
    'Willis Ankunding',
  ][index];

export const _price = (index: number) =>
  [
    35.17, 57.22, 64.78, 50.79, 9.57, 61.46, 96.73, 63.04, 33.18, 36.3, 54.42, 20.52, 62.82, 19.96,
    25.93, 70.39, 23.11, 67.23, 14.31, 31.5, 26.72, 44.8, 37.87, 75.53,
  ][index];

export const _company = (index: number) =>
  [
    'Medhurst, Moore and Franey',
    'Hahn, Homenick and Lind',
    'Larkin LLC',
    'Stamm, Larson and Mertz',
    'Spencer, Raynor and Langosh',
    'Lehner - Feeney',
    'Leuschke, Harris and Kuhlman',
    'Gutmann - Kassulke',
    'Turcotte - Runolfsson',
    'Howe - Anderson',
    'Sipes - Yost',
    'Johns - Aufderhar',
    'Schmidt LLC',
    'Smitham - Gerlach',
    'Waelchi - VonRueden',
    'Padberg - Macejkovic',
    'Lemke - Ferry',
    'Koch and Sons',
    'Klein - Rolfson',
    'Weimann LLC',
    'White, Cassin and Goldner',
    'Mohr, Langworth and Hills',
    'Mitchell, Volkman and Prosacco',
    'Streich Group',
  ][index];

export const _boolean = (index: number) =>
  [
    true,
    false,
    true,
    false,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    false,
  ][index];

  export const _postTitles = (index: number) =>
    [
      'Clean and comfortable rooms',
      'Unfriendly staff at reception',
      'Decent stay but overpriced',
      'Great location but noisy at night',
      'Amazing breakfast spread',
      'Dated interiors need renovation',
      'Spacious rooms with limited amenities',
      'Poor WiFi connectivity in rooms',
      'Friendly service and quick response',
      'Underwhelming spa facilities',
      'Exceptional sea view from the balcony',
      'Noisy air conditioning in the room',
      'Smooth check-in process',
      'Lack of vegetarian food options',
      'Perfect for a short business trip',
      'Uncomfortable beds and linens',
      'Conveniently located near attractions',
      'Rude housekeeping staff',
      'Relaxing rooftop pool area',
      'Small bathroom and cramped space',
      'Helpful concierge service',
      'Parking area was too crowded',
      'Value for money experience',
      'Long wait for room service',
    ][index];
  
  export const _description = (index: number) =>
    [
      'The rooms were spotless and very comfortable, ensuring a pleasant stay.',
      'The receptionist was dismissive and unhelpful during check-in, which was disappointing.',
      'The stay was decent, but the overall price didn’t justify the experience.',
      'While the location was central, the noise from the street was disturbing at night.',
      'Breakfast had a wide variety of delicious options that catered to all tastes.',
      'The interiors felt outdated and in need of significant renovation.',
      'The rooms were spacious, but some basic amenities were missing, like an iron or kettle.',
      'The WiFi was unreliable and kept disconnecting, making it hard to work.',
      'Staff members were friendly and quick to respond to our requests.',
      'The spa facilities did not live up to expectations and felt poorly maintained.',
      'The view from the balcony was breathtaking and one of the highlights of our stay.',
      'The air conditioning unit in the room was noisy and disrupted sleep.',
      'The check-in process was smooth and efficient, with no delays.',
      'The hotel lacked sufficient vegetarian options on their menu, which was disappointing.',
      'The setup was ideal for a quick business trip with minimal downtime.',
      'The beds were hard and uncomfortable, making it difficult to get a good night’s sleep.',
      'Located close to key attractions, it was very convenient for sightseeing.',
      'Some of the housekeeping staff were rude and didn’t clean properly.',
      'The rooftop pool area was beautiful and very relaxing to spend time at.',
      'The bathroom was small and felt cramped, making it less comfortable.',
      'The concierge went above and beyond to ensure we had a great experience.',
      'The parking area was too crowded, and it took a long time to find a spot.',
      'Overall, the experience was good and worth the price we paid.',
      'Room service took too long to arrive, which was frustrating.',
    ][index];

export const _taskNames = (index: number) =>
  [
    `Prepare Monthly Financial Report`,
    `Design New Marketing Campaign`,
    `Analyze Customer Feedback`,
    `Update Website Content`,
    `Conduct Market Research`,
    `Develop Software Application`,
    `Organize Team Meeting`,
    `Create Social Media Posts`,
    `Review Project Plan`,
    `Implement Security Protocols`,
    `Write Technical Documentation`,
    `Test New Product Features`,
    `Manage Client Inquiries`,
    `Train New Employees`,
    `Coordinate Logistics`,
    `Monitor Network Performance`,
    `Develop Training Materials`,
    `Draft Press Release`,
    `Prepare Budget Proposal`,
    `Evaluate Vendor Proposals`,
    `Perform Data Analysis`,
    `Conduct Quality Assurance`,
    `Plan Event Logistics`,
    `Optimize SEO Strategies`,
  ][index];

export const _productNames = (index: number) =>
  [
    'Nike Air Force 1 NDESTRUKT',
    'Nike Space Hippie 04',
    'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
    'Nike Blazer Low 77 Vintage',
    'Nike ZoomX SuperRep Surge',
    'Zoom Freak 2',
    'Nike Air Max Zephyr',
    'Jordan Delta',
    'Air Jordan XXXV PF',
    'Nike Waffle Racer Crater',
    'Kyrie 7 EP Sisterhood',
    'Nike Air Zoom BB NXT',
    'Nike Air Force 1 07 LX',
    'Nike Air Force 1 Shadow SE',
    'Nike Air Zoom Tempo NEXT%',
    'Nike DBreak-Type',
    'Nike Air Max Up',
    'Nike Air Max 270 React ENG',
    'NikeCourt Royale',
    'Nike Air Zoom Pegasus 37 Premium',
    'Nike Air Zoom SuperRep',
    'NikeCourt Royale',
    'Nike React Art3mis',
    'Nike React Infinity Run Flyknit A.I.R. Chaz Bear',
  ][index];

  export const _positivetrending = (index: number) =>
    [
      'Outstanding, Exceptional, Amazing, Friendly, Comfortable, Spacious, Clean, Delicious, Relaxing, Convenient, Memorable, Thoughtful, Luxurious, Efficient, Beautiful, Well-maintained, Smooth, Affordable, Perfect, Impressive',
      'Decent, Okay, Adequate, Average, Standard, Basic, Reasonable, Acceptable, Moderate, Sufficient, Convenient (context-dependent), Functional, Manageable, Typical, Serviceable, Passable, Expected, Usable, Routine, Plain',
      'Disappointing, Uncomfortable, Noisy, Cramped, Outdated, Overpriced, Poor, Unreliable, Rude, Unfriendly, Limited, Crowded, Inconvenient, Dirty, Slow, Frustrating, Underwhelming, Small, Inefficient, Unpleasant',
      
    ][index];
