import Grid from '@mui/material/GridLegacy'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import {
  useGetMonthlyDataQuery,
  useGetAnalyticsQuery,
  useGetReportsQuery,
} from '../services/api'

export default function DashboardPage() {
  const { data: monthlyData, isLoading: loadingMonthly } = useGetMonthlyDataQuery()
  const { data: analyticsData, isLoading: loadingAnalytics } = useGetAnalyticsQuery()
  const { data: reportsData, isLoading: loadingReports } = useGetReportsQuery()

  const seizures = monthlyData?.totalSeizures ?? 0
  const alerts = analyticsData?.alertCount ?? 0
  const recentCases = reportsData?.recentCases ?? 0

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly Seizures
            </Typography>
            {loadingMonthly ? (
              <CircularProgress />
            ) : (
              <Typography variant="h4">{seizures}</Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Alerts
            </Typography>
            {loadingAnalytics ? (
              <CircularProgress />
            ) : (
              <Typography variant="h4">{alerts}</Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent Cases
            </Typography>
            {loadingReports ? (
              <CircularProgress />
            ) : (
              <Typography variant="h4">{recentCases}</Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
