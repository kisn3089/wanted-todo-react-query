import { createConnection } from './models/db';
import app from './app';

createConnection();

export const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
