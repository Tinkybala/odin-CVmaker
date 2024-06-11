import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import './styles/App.css'
import {General, Education, Experience} from './general'
import {EducationCard, ExperienceCard} from './resume'

function Button({text, onClick}){
  return(
    <>
      <button onClick = {onClick}>
        {text}
      </button>
    </>
  )
}

function App(){

  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('Doe')
  const [mail, setMail] = useState('john@college.harvard.edu')
  const [phone, setPhone] = useState('phone number')

  const [educations, setEducations] = useState([{data: {school: "Harvard University", course: "Bachelor of Science in Computer Science", date: "", gpa: "3.8"}, id: uuid()}])
  const [experiences, setExperiences] = useState([{data: {company: 'OpenAI', role: 'Chief AI Engineer', desc: 'I invented chatGPT', start: '', end: ''}, id: uuid()}])

  const [grading, setGrading] = useState([{system: '4.0', id: educations[0].id}])

  function handleChangeEducations(e, id){
    const name = e.target.name
    const value = e.target.value
    console.log(name + " " + value)
    setEducations(educations.map(item => item.id === id ? {...item, data: {...item.data, [name]: value}} : {...item}))
  }

  function addEducations(){
    const id = uuid()
    setEducations([...educations, {data: {school: '', course: '', date: ''}, id: id}])
    setGrading([...grading, {system: '4.0', id: id}])
  }

  function handleChangeExperiences(e, id){
    const name = e.target.name
    const value = e.target.value
    console.log(name)
    setExperiences(experiences.map(item => item.id === id ? {...item, data : {...item.data, [name]: value}} : {...item}))
  }

  function addExperiences(){
    setExperiences([...experiences, {data: {company: '', role: '', desc: '', start: '', end: ''}, id: uuid()}])
  }

  function handleGrading(e, id){
    console.log(e.target.value)
    const value = e.target.value
    setGrading(grading.map(item => item.id === id ? {...item, system: value} : {...item}))
  }

  
  function onChange(stateName){
    switch(stateName){
      case 'firstName':
        return (e) => setFirstName(e.target.value)
        break
      case 'lastName':
        return (e) => setLastName(e.target.value)
        break
      case 'mail':
        return (e) => setMail(e.target.value)
        break
      case 'phone':
        return (e) => setPhone(e.target.value)
        break

    }
 }


  return(
    <>
    <div className='settings'>
        <div className="input">
          <h1>General</h1>
          <General firstName={firstName} lastName={lastName} mail={mail} phone={phone} onChange={onChange}/>
        </div>
        <div className='input'>
        <h1>Education</h1>
          {educations.map(item => <Education
                                    school={item.data.school}
                                    course={item.data.course}
                                    date={item.data.date}
                                    gpa={item.data.gpa}
                                    onChange={(e) => handleChangeEducations(e, item.id)}
                                    onDropChange={(e) => handleGrading(e, item.id)}
                                    key={item.id}
                                  />
                     )
          }
          <Button text="Add Education" onClick={addEducations}/>
        </div>
        <div className='input'>
          <h1>Experience</h1>
          {experiences.map(item => <Experience
                                    company={item.data.company}
                                    role={item.data.role}
                                    desc={item.data.desc}
                                    start={item.data.start}
                                    end={item.data.end}
                                    onChange={(e) => handleChangeExperiences(e, item.id)}
                                    key={item.id}
                                  />
                     )
          }
          <Button text="Add Experience" onClick={addExperiences}/>
        </div>
    </div>
    <div className='output'>
      <div className="resume">
        <div className="header">
            <h1>{firstName} {lastName}</h1>
            <p>{mail} | {phone}</p>
        </div>
        <div className='education'>
          <h2>Education</h2>
          {educations.map((item, i) => <EducationCard
                                    school= {educations[i].data.school}
                                    course= {educations[i].data.course}
                                    date = {educations[i].data.date}
                                    gpa = {educations[i].data.gpa}
                                    grading= {grading[i].system}
                                    key = {item.id}
                                    />
          )}
        </div>
        <div className='experience'>
          <h2>Experience</h2>
          {experiences.map((item, i) => <ExperienceCard
                                          company={experiences[i].data.company}
                                          role={experiences[i].data.role}
                                          description={experiences[i].data.desc}
                                          start={experiences[i].data.start}
                                          end={experiences[i].data.end}
                                          key={item.id}
                                        />
        )}
        </div>
      </div>
    </div> 
    </>
  )
}

export {App};
