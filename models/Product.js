import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  Referencia: String,
  Descricao: String,
  Unidade: String,
  Grupo: String,
  PrecoPauta: Number,
  PrecoVenda: Number,
  Imagem: String,
  Ativo: { type: String, default: "s" },        // Vila Emil
  Jucelino: { type: String, default: "n" },     // Loja Jucelino
  AtivoJucelino: { type: String, default: "n" },// Novo campo
  Principais: { type: String, default: "n" },   // Destaque principal
}, { collection: "produto" });

export default mongoose.model("Produtos", productSchema);
