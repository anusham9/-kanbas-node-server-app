export default function HelloRoutes(app) {
  app.get('/hello',(req, res) =>  // respond HTTP GET
   res.send('HELLO WORLD!'));      // "hello world"
   app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')})
  app.listen(4000);}