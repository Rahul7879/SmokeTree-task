import express from "express";
const port = process.env.PORT || 5000;
const app = express();
import "./db/index.js"
import router from "./routes/router.js";
app.use(express.json());
app.use(router);

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})


