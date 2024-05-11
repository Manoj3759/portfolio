import React from 'react'
import { useParams } from "react-router-dom";
import {GithubFilled} from '@ant-design/icons';
import { ProjectList } from '../assets/ProjectList';
import { Link } from 'react-router-dom';
import "../style/project.css"

const ProjectDisplay = () => {
     const {id} = useParams();
      const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt='images' width="600" height="300"/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link to={project.url}><GithubFilled /></Link>
    </div>
  )
}

export default ProjectDisplay