import '../tailwind.css';
import { Container } from "../components/Container";
import { Input } from "../components/Input";
import { ItemRepo } from "../components/ItemRepo";
import { useState } from "react";
import { Button } from "../components/Button";
import { api } from "../services/api";
import {Image} from "../components/Image";
import {ItemSearch} from "../components/ItemSearch";

function App() {
  const [repos, setRepo] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('')

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);
        if (!isExist) {
          setRepo(prev => [...prev, data]);
          setCurrentRepo('');
        } else {
          alert('Repository exists!');
        }
      } else {
        alert('Repository not found');
      }
    } catch (error) {
      alert('Error fetching repository');
    }
  };

  const handleRemoveRepo = (id) => {
    console.log('Removendo', id);
    setRepo(repos.filter(repo => repo.id !== id));

  }

  return (
      <>
    <Container>
      <ItemSearch currentRepo={currentRepo} setCurrentRepo={setCurrentRepo} handleSearchRepo={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} key={repo.id}/>)}
    </Container>
      </>
  );
}

export default App;
