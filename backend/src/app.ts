import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes/index.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(routes);

export default app;