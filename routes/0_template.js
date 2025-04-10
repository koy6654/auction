import { Router } from "express";
import { fileURLToPath } from "url";
import { basename } from "path";
import { template as pages } from "../model/pages.js";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const routeFolder = basename(__filename, ".js");

pages.forEach(({ path, title }) => {
  router.get(`/${path}`, (req, res) => {
    res.render(`${routeFolder}/${path}`, {
      path: `${routeFolder}/${path}`,
      title,
    });
  });
});

export default router;
