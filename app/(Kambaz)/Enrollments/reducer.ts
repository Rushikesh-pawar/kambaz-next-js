import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

// Load enrollments from localStorage if available
const loadEnrollmentsFromStorage = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("enrollments");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        return initialEnrollments;
      }
    }
  }
  return initialEnrollments;
};

const initialState = {
  enrollments: loadEnrollmentsFromStorage(),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollUser: (state, { payload: { userId, courseId } }) => {
      // Check if enrollment already exists
      const exists = state.enrollments.some(
        (e: any) => e.user === userId && e.course === courseId
      );
      if (!exists) {
        const newEnrollment = {
          _id: uuidv4(),
          user: userId,
          course: courseId,
        };
        state.enrollments = [...state.enrollments, newEnrollment];
        // Persist to localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
        }
      }
    },
    unenrollUser: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.user === userId && e.course === courseId)
      );
      // Persist to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
      }
    },
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
      // Persist to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("enrollments", JSON.stringify(enrollments));
      }
    },
  },
});

export const { enrollUser, unenrollUser, setEnrollments } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

