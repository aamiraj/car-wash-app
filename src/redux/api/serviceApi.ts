import { baseApi } from "./baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: (args: Record<string, string>) => {
        const params = new URLSearchParams(args);
         
        return {
          url: "/services",
          method: "GET",
          params: params
        }
      },
      providesTags: ["services"]
    }),
    getAService: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: ["services"]
    }),
    addAService: builder.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['services']
    }),
    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["services"]
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["services"]
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
