import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_API_URL,
  }),
  tagTypes: ['MonthlyData', 'Analytics', 'Reports'],
  endpoints: (builder) => ({
    getMonthlyData: builder.query<any, void>({
      query: () => ({ url: '/monthly-data' }),
      providesTags: ['MonthlyData'],
    }),
    postMonthlyData: builder.mutation<any, any>({
      query: (body) => ({
        url: '/monthly-data',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['MonthlyData'],
    }),
    getAnalytics: builder.query<any, void>({
      query: () => ({ url: '/analytics' }),
      providesTags: ['Analytics'],
    }),
    getReports: builder.query<any, void>({
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
