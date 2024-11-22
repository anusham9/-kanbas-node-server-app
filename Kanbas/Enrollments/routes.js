import * as enrollmentsDao from './dao.js';

export default function EnrollmentsRoutes(app) {
  const enrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.params;
    enrollmentsDao.enrollUserInCourse(userId, courseId);
  
    // Fetch updated enrollments for the user
    const updatedEnrollments = enrollmentsDao.findUserEnrollments(userId);
  
    // Return the updated list of enrollments
    res.status(200).json(updatedEnrollments);
  };
  
  app.post("/api/enrollments/:userId/:courseId", enrollUserInCourse);

  app.get("/api/enrollments/:userId", (req, res) => {
    let { userId } = req.params;
  
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        return res.sendStatus(401);
      }
      userId = currentUser._id; 
    }
  
    const enrollments = enrollmentsDao.findUserEnrollments(userId);
    console.log('Enrollments for user:', userId, enrollments); 

    res.json(enrollments);
  });
}

