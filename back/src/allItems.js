const connection = require("./connection");

const getAllItems = async () => {
  try {
    const [query] = await connection.execute("SELECT * FROM teste_node.book");
    return query;
  } catch (error) {
    throw new Error(`Erro ao buscar itens: ${error.message}`);
  }
};

async function insertItem(title, autor) {
  try {
    const insertQuery = "INSERT INTO book(title, autor) values(?,?)";
    const values = [title, autor];
    const [result] = await connection.execute(insertQuery, values);
    return result;
  } catch (error) {
    throw new Error(`Erro ao inserir item: ${error.message}`);
  }
}

module.exports = { getAllItems, insertItem };
