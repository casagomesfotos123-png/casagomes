import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  Referencia: String,
  Descricao: String,
  Unidade: String,
  Grupo: String,
  PrecoPauta: Number,
  PrecoVenda: Number,
  Imagem: String,
  Jucelino: {type: String},
  Ativo: { type: String}
}, { collection: "produto" });

export default mongoose.model("Produtos", productSchema);
