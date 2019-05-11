const express = require("express");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
/*
    server.get("/profile/:id", (req: { params: { id: any; }; }, res: any) => {
        return app.render(req, res, "/profile", { id: req.params.id });
    });
*/
    server.get("*", (req: any, res: any) => {
        return handle(req, res);
    });

    server.listen(port, (err: any) => {
        if (err) throw err;
        console.log(`> Readyss on http://localhost:${port}`);
    });
});
