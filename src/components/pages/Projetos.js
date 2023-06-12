import { useLocation } from 'react-router-dom';
import styles from './PagesCss/Projetos.module.css';
import Message from './Message';
import LinkButton from './LinkButton';
import Container from './Container';
import ProjectCard from '../project/ProjectCard';
import { useState, useEffect } from 'react';
import Loading from '../pages/Loading';

function Projetos() {
  const [projects, setProjects] = useState([]);
  const location = useLocation();
  const message = location.state && location.state.message ? location.state.message : '';
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
        setRemoveLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setProjects(projects.filter((project) => project.id !== id));
          setProjectMessage('Projeto removido com sucesso!');
        } else {
          setProjectMessage('Falha ao remover o projeto!');
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={`${styles.project_container} container-main`}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/novoprojeto" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category ? project.category.name : ''}
              key={project.id}
              handleRemove={removeProject}
            />
          ))
        ) : removeLoading ? (
          <p>Não há projetos cadastrados.</p>
        ) : (
          <Loading />
        )}
      </Container>
    </div>
  );
}

export default Projetos;
