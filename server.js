const app = require('./app');
const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
