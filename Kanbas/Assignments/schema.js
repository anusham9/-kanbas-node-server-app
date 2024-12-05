import mongoose from 'mongoose';
const assignmentSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    title: { type: String, required: true },
    description: { type: String, default: ""},
    points: String,
    dueDate: Date,
    availableDate: Date,
    until: Date,
    group: {
      type: String,
      enum: ['ASSIGNMENTS', 'QUIZZES', 'EXAMS', 'PROJECT'],
      default: 'ASSIGNMENTS',
      required: true,
    },
    displayGradeAs: {
      type: String,
      enum: ['Percentage', 'Number'],
      default: 'Percentage',
      required: true,
    },
    submissionType: {
      type: String,
      enum: ['Online', 'In Person'],
      default: 'Online',
      required: true,
    },
    assignTo: String,
  },
  { collection: 'assignments' }
);
export default assignmentSchema;
