// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import api from './api';

// Define a service using a base URL and expected endpoints
export const ghibliApi = createApi({
  reducerPath: 'ghibliApi',
  baseQuery: fetchBaseQuery({ baseUrl: api.getUri() }),
  endpoints: (builder) => ({
    getFilmById: builder.query({
      query: (id) => (id ? `films/${id}` : 'films'),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFilmByIdQuery } = ghibliApi;
