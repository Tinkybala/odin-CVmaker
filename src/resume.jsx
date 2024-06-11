import './styles/resume.css'

function EducationCard({school, course, date, gpa, grading}){

    return(
        <div className="card">
            <h3>{school}</h3>
            <div className='line'>
                <p>{course}; GPA: {gpa}/{grading}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

function ExperienceCard({company, role, description, start, end}){
    return(
        <div className="card">
                <h3>{company}</h3>
            <div className='line'>
                <p>{role}</p>
                <p>{start} - {end}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}


export {EducationCard, ExperienceCard}