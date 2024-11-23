const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};

const moduleObject = {
  id: "CS101",
  name: "Introduction to Computer Science",
  course: "CS101",
};

export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });

  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  // module variables

  app.get("/lab5/module", (req, res) => {
    res.json(moduleObject);
  });
  
  app.get("/lab5/module/name", (req, res) => {
    res.json({ name: moduleObject.name });
  });
  
  app.get("/lab5/module/name/:name", (req, res) => {
    const { name } = req.params;
    moduleObject.name = name;
    res.json(moduleObject);
  });
  
  // assignment score
  app.put("/lab5/assignment/score", (req, res) => {
    assignmentObject.score = req.body.score;
    res.json(assignmentObject);
  });

  // assignmetn completed
  app.put("/lab5/assignment/completed", (req, res) => {
    assignmentObject.completed = req.body.completed;
    res.json(assignmentObject);
  });
  
  // asignment object
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignmentObject);
  });

};
