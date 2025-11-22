// app/(Kambaz)/Courses/Assignments/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import db from "../../../Database/assignment.json"; // ✅ note singular name

const initialState = {
  assignments: db, // ✅ your JSON array
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      const newAssignment = {
        _id: uuidv4(),
        title: payload.title,
        description: payload.description,
        points: payload.points,
        dueDate: payload.dueDate,
        availableFrom: payload.availableFrom,
        availableUntil: payload.availableUntil,
        course: payload.course,
      };
      state.assignments.push(newAssignment);
    },
    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === payload._id ? { ...a, ...payload } : a
      );
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;