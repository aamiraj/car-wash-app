import { baseApi } from "./baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
    }),
    getAllBookings: builder.mutation({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
    }),
    getMyBookings: builder.mutation({
      query: () => ({
        url: "/my-bookings",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddBookingMutation,
  useGetAllBookingsMutation,
  useGetMyBookingsMutation,
} = bookingApi;
