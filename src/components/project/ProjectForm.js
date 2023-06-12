import styles from './ProjectCss/ProjectFrom.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import { useEffect, useState } from 'react'

function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCatgegories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect( () =>{  fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((resp) => resp.json()).then(
        (data) => {
            setCatgegories(data)
        }
    ).catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
        })

    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type='text'
            text='Nome do Projeto'
            name='name'
            placeholder='Insira o nome do projeto'
            handleOnChange={handleChange}
            value={project.name}
            ></Input>
            <Input 
            type='number'
            text='Orçamento do projeto'
            name='budget'
            placeholder='Insira o orçamento total'
            handleOnChange={handleChange}
            value={project.budget ? project.budget : ''}
            >
            </Input>
            <Select
            name='category_id'
            text='Selecione a categoria'
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}>
            </Select>
            <SubmitButton text={btnText}></SubmitButton>
        </form>
    )
}

export default ProjectForm