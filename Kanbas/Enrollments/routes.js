import * as enrollmentsDao from './dao.js';

export default function EnrollmentsRoutes(app) {
  const enrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.params;
    enrollmentsDao.enrollUserInCourse(userId, courseId);
    const updatedEnrollments = enrollmentsDao.findUserEnrollments(userId);
    res.status(200).json(updatedEnrollments);
  };
  
  app.post("/api/enrollments/:userId/:courseId", enrollUserInCourse);


  app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
      const status = enrollmentsDao.unenrollUserFromCourse(userId, courseId);
      res.send(status);
    });

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
    res.json(enrollments);
  });
}

