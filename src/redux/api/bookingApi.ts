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
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
    }),
    getMyBookings: builder.query({
      query: () => ({
        url: "/my-bookings",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddBookingMutation,
  useGetAllBookingsQuery,
  useGetMyBookingsQuery,
} = bookingApi;
