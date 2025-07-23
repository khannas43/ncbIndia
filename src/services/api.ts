import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface MonthlyData {
  totalSeizures: number
}

interface AnalyticsData {
  alertCount: number
}

interface ReportsData {
  recentCases: number
}


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: ['MonthlyData', 'Analytics', 'Reports'],
  endpoints: (builder) => ({
    getMonthlyData: builder.query<MonthlyData, void>({

      query: () => ({ url: '/monthly-data' }),
      providesTags: ['MonthlyData'],
    }),
    postMonthlyData: builder.mutation<unknown, unknown>({
      query: (body) => ({
        url: '/monthly-data',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['MonthlyData'],
    }),
    getAnalytics: builder.query<AnalyticsData, void>({
      query: () => ({ url: '/analytics' }),
      providesTags: ['Analytics'],
    }),
    getReports: builder.query<ReportsData, void>({

      query: () => ({ url: '/reports' }),
      providesTags: ['Reports'],
    }),
  }),
})

export const {
  useGetMonthlyDataQuery,
  usePostMonthlyDataMutation,
  useGetAnalyticsQuery,
  useGetReportsQuery,
} = api
