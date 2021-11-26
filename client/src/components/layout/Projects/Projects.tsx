import { useState } from 'react'
import Project from './ProjectList'
import './Projects.css'
import { BiWindows } from 'react-icons/bi'
import { BsListUl } from 'react-icons/bs'
import { CgMenuGridR } from 'react-icons/cg'

const projectData = [
    {name: 'Twitter', chipColor: '#EEEFF8', chipFont: '#5B6094', content: 'These project will need a new brand identity where they get recognized', avatar: 'jcvd.jpg', categories: ['branding']},
    {name: 'Wild school', chipColor: '#EDF7F3', chipFont: '#60C199', content: 'The school needs a new plateform for their remote classes', avatar: 'queen.jpeg', categories: ['design', 'code']},
    {name: 'Tesla', chipColor: '#E5F7FA', chipFont: '#28A7C7', content: 'The clients wants a news markup for their website', avatar: 'rambo.jpeg', categories: ['accounting']},
]

function Projects() {
    const [leftSelected, setLeftSelected] = useState<boolean>(false)

    const leftButton = {
        color: leftSelected ? '#319DA4' : '#747474',
        padding: leftSelected ? '0.18rem 0.75rem' : '.25rem 1.25rem .25rem .75rem',
        border: leftSelected ? '0.12rem solid #319DA4' : 'none',
        zIndex: leftSelected ? 10 : 1
    }

    const rightButton = {
        color: leftSelected ? '#747474' : '#319DA4',
        padding: leftSelected ? '.25rem 0.75rem .25rem 1.25rem' : '.18rem 0.75rem',
        border: leftSelected ? 'none' : '0.12rem solid #319DA4',
        zIndex: leftSelected ? 1 : 10
    }
    return (
        <div className="container">
            <div className="title">
                <BiWindows style={{fontSize: '1.75rem', color: '#F65B56'}} />
                <p>Recent project</p>
            </div>
            <div className="display">
                <BsListUl 
                    style={{position: 'relative', backgroundColor: '#E7F5F6', color: leftButton.color, fontSize: '1.75rem', padding: leftButton.padding, borderRadius: '.75rem', border: leftButton.border, zIndex: leftButton.zIndex}}
                    onClick={() => setLeftSelected(true)}
                />
                <CgMenuGridR 
                    style={{position: 'relative', backgroundColor: '#E7F5F6', color: rightButton.color, fontSize: '1.75rem', padding: rightButton.padding, borderRadius: '.75rem', border: rightButton.border, zIndex: rightButton.zIndex, marginLeft:'-.825rem'}}
                    onClick={() => setLeftSelected(false)}
                />
            </div>
            <div className="projects">
                { projectData.map(data => <Project data={data} /> )}
            </div>
        </div>
    )
}

export default Projects