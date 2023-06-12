import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import Layout from '../pages/Layout.js';
import NoPage from '../pages/NoPage.js';
import Projetos from '../pages/Projetos.js';
import NovoProjeto from '../pages/NovoProjeto.js';
import Project from '../pages/Project.js';

function Rotas() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="projetos" element={<Projetos />} />
        <Route path="novoprojeto" element={<NovoProjeto />} />
        <Route path="project/:id" element={<Project/>} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default Rotas;
