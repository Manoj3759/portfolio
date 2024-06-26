import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../style/projects.css"

const ProjectItem = ({image,name,id}) => {
    const Navigate = useNavigate()
  return (
    <div className='projectItem'
    onClick={()=>{
        Navigate('/project/' + id)
    }}>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  )
}

export default ProjectItem