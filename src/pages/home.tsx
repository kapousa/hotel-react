import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OverviewAnalyticsView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
<title>Hotel Feedback Dashboard | Live Guest Insights</title>
<meta name="description" content="Stay ahead with our AI-powered hotel feedback dashboard. Get real-time insights into guest preferences, platform reviews, and enhancement opportunities from sources like Booking.com and TripAdvisor." />
<meta name="keywords" content="hotel feedback, guest insights, real-time analytics, Booking.com reviews, TripAdvisor reviews, AI dashboard, hotel enhancement, live updates, traveler feedback, platform integration" />
<meta name="author" content="Hatem Gad" />

<meta property="og:type" content="website" />
<meta property="og:title" content="Hotel Feedback Dashboard | Real-Time Guest Insights" />
<meta property="og:description" content="Access live updates and detailed insights into guest feedback across platforms. Enhance your services with data from Booking.com, TripAdvisor, and more." />
<meta property="og:image" content="/assets/images/og-image.png" />
<meta property="og:url" content="https://your-project-url.com" />
<meta property="og:site_name" content="Hotel Feedback Dashboard" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Hotel Feedback Dashboard | Real-Time Guest Insights" />
<meta name="twitter:description" content="Analyze guest feedback and preferences from top platforms like Booking.com and TripAdvisor. Get actionable insights with AI-powered analytics." />
<meta name="twitter:image" content="/assets/images/twitter-image.png" />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="theme-color" content="#6971f9" />

      </Helmet>

      <OverviewAnalyticsView />
    </>
  );
}
