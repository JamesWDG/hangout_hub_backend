

import app from "./src/app.js";
import { applicationConstants } from "./src/constants.js";
app.listen(applicationConstants.port, () => {
  console.log("Server is running on port 3000");
});