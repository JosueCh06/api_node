import expres from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import authorRouter from './routes/author_router'

const app=expres()

// Settings
app.set("port", 3005)

// Middlewares
app.use(morgan("dev"))
app.use(expres.json())
app.use(cors())

//Routes
app.use("/api/authors", authorRouter)


export default app;