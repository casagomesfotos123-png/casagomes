import { Router } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = Router();

/**
 * 📌 Criar usuário admin inicial
 * POST /api/auth/seed
 */
router.post("/seed", async (_req, res) => {
  const existe = await User.findOne({ email: "admin@admin.com" });
  if (existe) return res.json({ message: "Admin já existe" });

  const user = new User({
    nome: "Administrador",
    email: "admin@admin.com",
    senha: "admin123", // será hash automaticamente
    role: "admin"
  });

  await user.save();
  res.json({ message: "Usuário admin criado", email: user.email, senha: "admin123" });
});

/**
 * 📌 Login
 * POST /api/auth/login
 */
router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Usuário não encontrado" });

  const senhaOk = await user.compararSenha(senha);
  if (!senhaOk) return res.status(400).json({ message: "Senha incorreta" });

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token, user: { id: user._id, nome: user.nome, role: user.role } });
});

export default router;
