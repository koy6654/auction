// CommonJS To ESM: 기본 제공을 위해 직접 선언
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import createError from "http-errors";
import express, { json, urlencoded, static as express_static } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import testRouter from "./routes/test.js";
import mainRouter from "./routes/1_main.js";
import auctionRouter from "./routes/2_auction.js";
import mapRouter from "./routes/3_map.js";
import eduDataRouter from "./routes/4_edu_data.js";
import statisticsRouter from "./routes/5_statistics.js";
import favoritesRouter from "./routes/6_favorites.js";
import mypageRouter from "./routes/7_mypage.js";
import supportRouter from "./routes/8_support.js";
import detailsRouter from "./routes/9_details.js";

const app = express();

// view engine setup
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express_static(join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/test", testRouter);
app.use("/1_main", mainRouter);
app.use("/2_auction", auctionRouter);
app.use("/3_map", mapRouter);
app.use("/4_edu_data", eduDataRouter);
app.use("/5_statistics", statisticsRouter);
app.use("/6_favorites", favoritesRouter);
app.use("/7_mypage", mypageRouter);
app.use("/8_support", supportRouter);
app.use("/9_details", detailsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
