import ProjectForm from '../project/ProjectForm';
import styles from './PagesCss/NovoProjeto.module.css';
import { useNavigate } from 'react-router-dom';

function NovoProjeto() {
  const navigation = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // redirect with success message
        navigation('/projetos', { state: { type: 'success', message: 'Projeto criado com sucesso!' } });
      })
      .catch((err) => {
        console.log(err);
        // redirect with error message
        navigation('/projetos', { state: { type: 'error', message: 'Não foi possível criar o projeto. Tente novamente.' } });
      });
  }

  return (
    <div className={`${styles.newproject_container} container-main`}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <p>formulário</p>
      <ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
    </div>
  );
}

export default NovoProjeto;
