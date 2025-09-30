import multer from "multer";

// Armazena o arquivo em memória para enviar ao Cloudinary
const storage = multer.memoryStorage();
export const upload = multer({ storage });
