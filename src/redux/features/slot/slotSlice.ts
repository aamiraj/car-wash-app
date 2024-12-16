import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TSlot {
  slotId: string;
  serviceId: string;
  date: string;
  startTime: string;
  endTime: string;
}

interface TInitialState {
  slot: TSlot | null;
}

const initialState: TInitialState = {
  slot: null,
};

export const slotSlice = createSlice({
  name: "slot",
  initialState,
  reducers: {
    setSelectedSlot: (state, action: PayloadAction<TSlot>) => {
      state.slot = action.payload;
    },
  },
});

export const { setSelectedSlot } = slotSlice.actions;

export default slotSlice.reducer;
