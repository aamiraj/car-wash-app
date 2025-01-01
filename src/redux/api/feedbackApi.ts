import { baseApi } from "./baseApi";

const feedbackApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addFeedback: build.mutation({
            query: (data) => ({
                url: "/feedback",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["feedbacks"]
        }),
        getAllFeedbacks: build.query({
            query: () => ({
                url: "/feedback/all",
                method: "GET"
            }),
            providesTags: ["feedbacks"]
        }),
        getMyFeedbacks: build.query({
            query: () => ({
                url: "/feedback/me",
                method: "GET"
            })
        })
    })
})

export const { useAddFeedbackMutation, useGetAllFeedbacksQuery, useGetMyFeedbacksQuery } = feedbackApi;