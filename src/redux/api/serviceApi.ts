import { baseApi } from "./baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
    }),
    getAService: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
    }),
    addAService: builder.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        data: data,
      }),
    }),
    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: "PUT",
        data: data,
      }),
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddAServiceMutation,
  useGetAServiceQuery,
  useGetAllServicesQuery,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} = serviceApi;
