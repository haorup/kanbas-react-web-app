import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { clear } from "console";
const initialState = {
  assignments: assignments,
  assignment: { course: "", title: "", description: "", points: 0, dueDate: "", availableDate: "", _id: ""},
};
const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        ...state.assignment,
        _id: new Date().getTime().toString(),
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      );
    },
    setAssignment: (state, { payload: assignment }) => {
      state.assignment = assignment;
    },
    clearAssignment: (state) => {
      state.assignment = { course: "", title: "", description: "", points: 0, dueDate: "", availableDate: "", _id: "" };
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, clearAssignment } =
  assignmentSlice.actions;
export default assignmentSlice.reducer;
