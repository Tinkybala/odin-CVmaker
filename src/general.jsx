import {useState} from 'react'

function Input({label, value, onChange, type = "text", name}){
    return(
        <label>
            {label}
            <input
            value = {value}
            onChange = {onChange}
            type = {type}
            name = {name}
            />
        </label>
    )
}

function Dropdown({label, onChange, name, options}){
    return(
        <label>
            {label}
            <select name={name} onChange={onChange}>
                {options.map((item, i) => <option value={item.value} key={i}>{item.name}</option>)}
            </select>
        </label>
    )
}

function General({firstName, lastName, mail, phone, onChange}){
    return(
        <>
            <Input label="First name: " value= {firstName} onChange= {onChange('firstName')} />
            <Input label="Last name: " value= {lastName} onChange= {onChange('lastName')} />
            <Input label="E-mail: " value= {mail} onChange= {onChange('mail')} />
            <Input label="Phone: " value= {phone} onChange= {onChange('phone')} />
        </>
    )
}

function Education({school, course, date, gpa, onChange, onDropChange}){
    
    return(
        <div>
            <Input label="School: " value={school} onChange={onChange} name='school' />
            <Input label="Course: " value={course} onChange={onChange} name='course' />
            <Input label="GPA: " value={gpa} onChange={onChange} name='gpa' />
            <Dropdown label="Grade System: " name="system" options={[{name: 'American', value: '4.0'}, {name: 'Others', value: '5.0'}]} onChange={onDropChange}/>
            <Input label="Date: " value={date} onChange={onChange} name='date'  type='date' />
        </div>
    )
}

function Experience({company, role, desc, start, end, onChange}){

    return (
        <>
            <Input label="Company: " value={company} onChange={onChange} name='company' />
            <Input label="Role: " value={role} onChange={onChange} name='role' />
            <Input label="Description: " value={desc} onChange={onChange} name='desc' />
            <Input label="Start: " value={start} onChange={onChange} type="date" name='start' />
            <Input label="End: " value={end} onChange={onChange} type="date" name='end' />
        </>
    )
}



export {General, Education, Experience};