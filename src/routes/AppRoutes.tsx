import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import ProtectedRoute from '../components/ProtectedRoute'

const LoginPage = lazy(() => import('../pages/LoginPage'))
const DashboardPage = lazy(() => import('../pages/DashboardPage'))
const DataEntryPage = lazy(() => import('../pages/DataEntryPage'))
const AnalyticsPage = lazy(() => import('../pages/AnalyticsPage'))
const ReportsPage = lazy(() => import('../pages/ReportsPage'))
const ArchivePage = lazy(() => import('../pages/ArchivePage'))
const SettingsPage = lazy(() => import('../pages/SettingsPage'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<CircularProgress />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<CircularProgress />}>
              <DashboardPage />
            </Suspense>
          }
        />
        <Route
          path="/data-entry"
          element={
            <Suspense fallback={<CircularProgress />}>
              <DataEntryPage />
            </Suspense>
          }
        />
        <Route
          path="/analytics"
          element={
            <Suspense fallback={<CircularProgress />}>
              <AnalyticsPage />
            </Suspense>
          }
        />
        <Route
          path="/reports"
          element={
            <Suspense fallback={<CircularProgress />}>
              <ReportsPage />
            </Suspense>
          }
        />
        <Route
          path="/archive"
          element={
            <Suspense fallback={<CircularProgress />}>
              <ArchivePage />
            </Suspense>
          }
        />
        <Route
          path="/settings"
          element={
            <Suspense fallback={<CircularProgress />}>
              <SettingsPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
