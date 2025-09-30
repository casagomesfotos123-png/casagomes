import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";

// ...


dotenv.config();

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());



// Conexão com MongoDB
await connectDB(process.env.MONGO_URI);

// Rota inicial (teste)
app.get("/", (req, res) => {
  res.send("🚀 API rodando...");
});


app.use("/api/products", productRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/auth", authRoutes);
// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor online em http://localhost:${PORT}`));



