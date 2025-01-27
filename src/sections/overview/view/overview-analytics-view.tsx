import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _tasks, _posts, _timeline, _times } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Feedback 
      </Typography>
      <Grid container spacing={3}>
      <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="All Platforms"
            percent={2.6}
            total={14000}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-users.svg" />}
            chart={{
              categories: ['6 hr', '3 hrs', '1 hr', '10 min', '1 min'],
              series: [7000, 1000, 3000, 2000, 2000],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Booking.com"
            percent={-7}
            total={8000}
            color="secondary"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-booking.svg" />}
            chart={{
              categories: ['6 hr', '3 hrs', '1 hr', '10 min', '1 min'],
              series: [2600, 1400, 1500, 1000, 1500],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="TripAvisor"
            percent={2.8}
            total={3000}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-tripadvisor.svg" />}
            chart={{
              categories: ['6 hr', '3 hrs', '1 hr', '10 min', '1 min'],
              series: [400, 700, 500, 280, 700],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Others"
            percent={3.6}
            total={1000}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.svg" />}
            chart={{
              categories: ['6 hr', '3 hrs', '1 hr', '10 min', '1 min'],
              series: [506, 300, 203, 540, 470],
            }}
          />
        </Grid>

      <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Overall Feedback"
            chart={{
              series: [
                { label: 'Postive', value: 3500 },
                { label: 'Natural', value: 500 },
                { label: 'Negative', value: 800 }
              ],
            }}
          />
        </Grid>
        
        <Grid xs={12} md={6} lg={8}>
          <AnalyticsConversionRates
            title="Enhancment Progress"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Room cleanliness', 'Food quality', 'Staff behavior', 'Facilities (pool, gym, spa)', 'Internet service'],
              series: [
                { name: '2022', data: [44, 55, 41, 64, 22] },
                { name: '2023', data: [53, 32, 33, 52, 13] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsNews title="Latest Feedback" list={_posts.slice(0, 5)} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsOrderTimeline title="Feedback Trends" list={_timeline} />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits
            title="Reviwers Age Range"
            subheader="(+13%) than last year"
            chart={{
              categories: ['18-30', '31-40', '41-50', '51-60', '60+'],
              series: [
                { name: '2023', data: [43, 33, 22, 37, 67] },
                { name: '2024', data: [51, 70, 47, 67, 40] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentSubject
            title="Demographic Destributions"
            chart={{
              categories: ['UAE', 'North America', 'Europ', 'Asia', 'Middle East', 'Afirca'],
              series: [
                { name: '2022', data: [80, 50, 30, 40, 100, 20] },
                { name: '2023', data: [20, 30, 40, 80, 20, 80] },
                { name: '2024', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

      </Grid>
    </DashboardContent>
  );
}
