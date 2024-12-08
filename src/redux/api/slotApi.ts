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
    }),
  }),
});

export const { useAddASlotMutation, useGetSlotsOfServiceQuery } = slotApi;
