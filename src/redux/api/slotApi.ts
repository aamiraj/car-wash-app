import { baseApi } from "./baseApi";

interface ArgsType {
  serviceId: string;
  date: string
}

export const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addASlot: builder.mutation({
      query: (data) => ({
        url: "/services/slots",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["slots"]
    }),
    getSlotsOfService: builder.query({
      query: (args: ArgsType) => {
        const params = new URLSearchParams([...Object.entries(args)]);

        return {
          url: "/slots/availability",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["slots"]
    }),
    getAllSlots: builder.query({
      query: () => ({
        url: "/slots/availability",
        method: "GET",
      }),
      providesTags: ["slots"]
    }),
    changeSlotStatus: builder.mutation({
      query: (data) => ({
        url: `/slots/${data?.id}`,
        method: "PATCH",
        body: { slotStatus: data?.slotStatus }
      })
    })
  }),
});

export const {
  useAddASlotMutation,
  useGetSlotsOfServiceQuery,
  useGetAllSlotsQuery,
  useChangeSlotStatusMutation } = slotApi;
