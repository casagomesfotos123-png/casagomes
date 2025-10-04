import { Router } from "express";
import Product from "../models/Product.js";

const router = Router();

/**
 * 📌 Listar produtos (ativos e inativos) com paginação + busca + filtro por grupo e jucelino
 * GET /api/products?page=1&limit=12&search=chá&grupo=Bebidas&jucelino=s
 */
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 12, search = "", grupo = "", jucelino = "" } = req.query;

    // 🔎 Monta query dinâmica
    let query = {};

    if (search) {
      query.Descricao = { $regex: search, $options: "i" };
    }

    if (grupo) {
      query.Grupo = grupo;
    }

    if (jucelino) {
      query.Jucelino = jucelino; // "s" ou "n"
    }

    // 🔹 Busca paginada
    const produtos = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    // 🔹 Conta total para paginação
    const total = await Product.countDocuments(query);

    res.json({
      produtos,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({
      message: "Erro ao listar produtos",
      error: err.message,
    });
  }
});

/**
 * 📌 Listar grupos distintos (categorias) — sem duplicar
 * GET /api/products/grupos
 */
router.get("/grupos", async (req, res) => {
  try {
    const grupos = await Product.distinct("Grupo");
    res.json(grupos);
  } catch (err) {
    res.status(500).json({
      message: "Erro ao listar grupos",
      error: err.message,
    });
  }
});


router.get("/principais", async (req, res) => {
  try {
    const { page = 1, limit = 12, search = "", grupo = "", jucelino = "" } = req.query;

    // 🔎 Query fixa com Principais = "s"
    let query = { Principais: "s" };

    if (search) {
      query.Descricao = { $regex: search, $options: "i" };
    }

    if (grupo) {
      query.Grupo = grupo;
    }

    if (jucelino) {
      query.Jucelino = jucelino; // "s" ou "n"
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
    res.status(500).json({
      message: "Erro ao listar produtos principais",
      error: err.message,
    });
  }
});
export default router;
