import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: "/users",
                method: "GET"
            })
        }),
        updateUserRole: builder.mutation({
            query: ({ id, role }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body: { role }
            })
        })
    }),
})

export const { useGetAllUsersQuery, useUpdateUserRoleMutation } = userApi