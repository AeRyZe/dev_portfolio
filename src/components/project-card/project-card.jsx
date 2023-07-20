import './project-card.css'

function ProjectCard(props) {
    return (
        <div className='project-card-container'>
            <h2 className='project-card-title'>{props.title}</h2>
            <div className='project-card-preview'>
                <img className='project-card-img' src={props.image} alt='Aperçu du site web'></img>
                {props.link ? <a className='project-card-overlay' href={props.link}>Voir le site web</a> : null}
            </div>
            <p className='project-card-text'><strong>Mission(s) :</strong> {props.text}</p>
            <a className='project-card-code' href={props.code}>Voir le code source</a>
        </div>
    )
}

export default ProjectCard