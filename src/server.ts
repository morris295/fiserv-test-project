import express from "express";
import bodyParser from "body-parser";

import * as parsingController from "./controllers/parse-controller";
import * as indexController from "./controllers/index-controller";

const app = express();

app.set("port", 3000);
app.use(bodyParser.json());

app.post("/api/v1/parse", parsingController.parseV1);
app.post("/api/v2/parse", parsingController.parseV2);
app.get("/", indexController.index);

app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});