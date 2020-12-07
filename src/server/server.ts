// @ts-nocheck

require("dotenv").config();
import * as express from "express";
import routes from "./routes";
import * as morgan from "morgan";
import * as helmet from "helmet";
import * as cors from "cors";
import * as compression from "compression";
import * as path from "path";
import * as passport from "passport";

import "./middleware/localstrategy";
import "./middleware/bearerstrategy";

const app = express();

app.use(cors({ origin: true }));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [
        "'self' blob: https://*.fontawesome.com/ https://*.googleapis.com/ https://*.gstatic.com 'unsafe-inline'",
      ],
      connectSrc: ["* data: blob: 'unsafe-inline'"],
    },
  })
);

app.use(compression());
app.use(morgan("dev"));
app.use(passport.initialize());

app.use(express.json());
app.use("/routes", routes);
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
