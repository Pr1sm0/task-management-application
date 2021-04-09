import React, { useEffect, useState } from 'react';
import { IUser } from '../interfaces';
import { getUserFromStorage } from '../services/localStorageService';
import { getProjects } from '../services/projectService';
import Layout from '../shared/Layout';
import './projectList.scss';

interface IProject {
  id: string;
  name: string;
  creator: IUser;
}

const ProjectList: React.FC = () => {
  const [projectList, setProjectList] = useState<IProject[]>([]);
  const [search, setSearch] = useState('');

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getProjectList = async () => {
      const user = await getUserFromStorage();
      const projects = await getProjects(user._id);
      setProjectList(projects);
    };
    getProjectList();
  }, []);

  return (
    <Layout pageTitle="Projects">
      <input type="text" className="search-input" value={search} onChange={handleChange} />
      <ul className="projects">
        <li>
          <span className="name">Name</span>
          <span>Initiator</span>
          <hr />
        </li>
        {projectList.map(project => {
          if (search === '' || project.name.toLowerCase().includes(search.toLowerCase())) {
            return (
              <li key={project.id}>
                <p>{project.name}</p>
                <img src={project.creator.photoUrl} alt="User Avatar" />
                <p>{project.creator.name}</p>
                <hr />
              </li>
            );
          }
          return null;
        })}
      </ul>
    </Layout>
  );
};

export default ProjectList;
