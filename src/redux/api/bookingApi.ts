import { baseApi } from "./baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["bookings"]
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["bookings"]
    }),
    getMyBookings: builder.query({
      query: () => ({
        url: "/my-bookings",
        method: "GET",
      }),
      providesTags: ["myBookings"]
    }),
  }),
});

export const {
  useAddBookingMutation,
  useGetAllBookingsQuery,
  useGetMyBookingsQuery,
} = bookingApi;
