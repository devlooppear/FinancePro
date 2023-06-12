import styles from './PagesCss/Home.module.css'
import savings from '../../img/financas.png'
import LinkButton from './LinkButton'
import '../bootstrap/css/bootstrap.css'

function Home() {
    return (
        <section className={`${styles.home_container} container-main`}>
            <h1>
                Bem-vindo ao <span>FinancePro</span>
            </h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/novoprojeto" text='Criar Projeto'/>
            <img src={savings} alt='Costs'></img>
        </section>
    )
}

export default Home