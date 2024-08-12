import { useState, useEffect } from "react";

import "./atyles.css";
import api from "../api";
function Home() {
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");
  const [books, setBook] = useState([]);
  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = async () => {
    try {
      const response = await api.get("");
      setBook(response.data);
    } catch (error) {
      console.error(`Erro ao buscar dados`);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/insertitem", {
        title,
        autor,
      });
    } catch (error) {
      console.error("erro ao encerir dado", error);
    }
  }
  return (
    <>
      <h1>Inserir novo item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Autor:</label>
          <input
            type="text"
            value={autor}
            onChange={(e) => {
              setAutor(e.target.value);
            }}
          />
          <button type="submit">Inserir</button>
        </div>
      </form>
      <h1>Tabela de livro</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>autor</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item) => {
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.id}</td>
              <td>{item.id}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
}
export default Home;
