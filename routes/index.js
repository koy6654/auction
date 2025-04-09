import { Router } from "express";
const router = Router();
import { pages } from "../model/pages.js";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "niceauction", pages });
});

export default router;
