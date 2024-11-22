import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = { _id: Date.now(), user: userId, course: courseId };
  Database.enrollments = [...Database.enrollments, newEnrollment];
  console.log('Database Enrollments after addition:', Database.enrollments);

  return newEnrollment;
}

export function findUserEnrollments(userId) {
  const { enrollments } = Database;
  const userEnrollments = enrollments.filter((enrollment) => enrollment.user === userId);
  return userEnrollments;
}

export const unenrollUserFromCourse = (userId, courseId) => {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
};