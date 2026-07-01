import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";   

const app = express();

app.use(cors());
app.use("/api/products", productsRouter);

app.get("/up", (req, res) => {
    res.json({
        status: "OK",
        message: "Servidor activo y funcionando correctamente",
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

