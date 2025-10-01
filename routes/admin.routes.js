import { Router } from "express";
import Product from "../models/Product.js";
import { upload } from "../middlewares/upload.js";
import cloudinary from "../config/cloudinary.js";
import { auth, isAdmin } from "../middlewares/auth.js"; // 🔒 proteção

const router = Router();

/**
 * 📌 Listar todos os produtos (com filtro por grupo)
 * GET /api/admin/products
 */
router.get("/products", auth, isAdmin, async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "", grupo = "" } = req.query;

    let query = {};

    // filtro por nome
    if (search) {
      query.Descricao = { $regex: search, $options: "i" };
    }

    // filtro por grupo
    if (grupo) {
      query.Grupo = grupo;
    }

    const produtos = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Product.countDocuments(query);

    res.json({
      produtos,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro ao listar produtos", error: err.message });
  }
});

/**
 * 📌 Listar grupos distintos
 * GET /api/admin/products/grupos
 */
router.get("/products/grupos", auth, isAdmin, async (req, res) => {
  try {
    const grupos = await Product.distinct("Grupo");
    res.json(grupos);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro ao listar grupos", error: err.message });
  }
});


/**
 * 📌 Criar novo produto com imagem
 * POST /api/admin/products
 */
router.post("/products", auth, isAdmin, upload.single("Imagem"), async (req, res) => {
  try {
    let imagemUrl = "";

    if (req.file) {
      const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
      const uploadCloud = await cloudinary.uploader.upload(base64, { folder: "produtos" });
      imagemUrl = uploadCloud.secure_url;
    }

    const novo = await Product.create({
  Descricao: req.body.Descricao,
  PrecoVenda: Number(req.body.PrecoVenda) || 0,
  Grupo: req.body.Grupo || "",
  Ativo: req.body.Ativo === "s" ? "s" : "n",
  Jucelino: req.body.Jucelino === "s" ? "s" : "n",
  AtivoJucelino: req.body.AtivoJucelino === "s" ? "s" : "n",
  Principais: req.body.Principais === "s" ? "s" : "n",
  Imagem: imagemUrl || ""
});


    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar produto", error: err.message });
  }
});

/**
 * 📌 Atualizar produto
 * PUT /api/admin/products/:id
 */
router.put("/products/:id", auth, isAdmin, upload.single("Imagem"), async (req, res) => {
  try {
   const data = {
  Descricao: req.body.Descricao,
  PrecoVenda: Number(req.body.PrecoVenda) || 0,
  Grupo: req.body.Grupo || "",
  Ativo: req.body.Ativo === "s" ? "s" : "n",
  Jucelino: req.body.Jucelino === "s" ? "s" : "n",
  AtivoJucelino: req.body.AtivoJucelino === "s" ? "s" : "n",
  Principais: req.body.Principais === "s" ? "s" : "n",
};


    if (req.file) {
      const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
      const uploadCloud = await cloudinary.uploader.upload(base64, { folder: "produtos" });
      data.Imagem = uploadCloud.secure_url;
    }

    const atualizado = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
    if (!atualizado) return res.status(404).json({ message: "Produto não encontrado" });

    res.json(atualizado);
  } catch (err) {
    console.error("❌ Erro no update:", err);
    res.status(500).json({ message: "Erro ao atualizar produto", error: err.message });
  }
});



/**
 * 📌 Excluir produto
 * DELETE /api/admin/products/:id
 */
router.delete("/products/:id", auth, isAdmin, async (req, res) => {
  try {
    const deletado = await Product.findByIdAndDelete(req.params.id);
    if (!deletado) return res.status(404).json({ message: "Produto não encontrado" });

    res.json({ message: "Produto excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao excluir produto", error: err.message });
  }
});

export default router;
