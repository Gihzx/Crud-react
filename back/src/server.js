const express = require("express");
//usado para permitir que aplicação web que estão rodando em um domicio (origem) acessem o msm dominio
const cors = require("cors");

const { getAllItems, insertItem } = require("./allItems");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`funcionando na porta ${PORT}`);
});

//rotas para buscar todos os itens

app.get("/", async (req, res) => {
  try {
    const item = await getAllItems();
    res.status(200).json(item);
  } catch (erro) {
    res.status(500).json({ error: error.massage });
  }
});
app.post("/insertitem", async (req, res) => {
  const { title, autor } = req.body;
  try {
    const result = await insertItem(title, autor);
    res.status(201).json(result);
  } catch {
    res.status(500).json({ error: error.massage });
  }
});
