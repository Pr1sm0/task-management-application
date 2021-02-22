import React, { useEffect, useRef, useState } from 'react';
import Logo from '../images/tma.png';
import Arrow from '../images/arrow-drop-down-fill.svg';
import Logout from '../images/logout-box-line.svg';
import { Link, useHistory } from 'react-router-dom';
import { IUser } from '../interfaces';
import { clearStorage, getUserFromStorage } from '../services/localStorageService';
import './header.scss';
import { googleSignout } from '../services/firebaseService';

const Header: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<IUser>();

  const projectsNode = useRef<HTMLDivElement>(null);
  const [openProjects, setOpenProjects] = useState(false);

  const logoutNode = useRef<HTMLDivElement>(null);
  const [openLogout, setOpenLogout] = useState(false);

  const handleClickOutsideForProjects = (e: any) => {
    if (projectsNode.current?.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpenProjects(false);
  };

  useEffect(() => {
    if (openProjects) {
      document.addEventListener('mousedown', handleClickOutsideForProjects);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideForProjects);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideForProjects);
    };
  }, [openProjects]);

  const handleClickOutsideForLogout = (e: any) => {
    if (logoutNode.current?.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpenLogout(false);
  };

  useEffect(() => {
    if (openLogout) {
      document.addEventListener('mousedown', handleClickOutsideForLogout);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideForLogout);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideForLogout);
    };
  }, [openLogout]);

  useEffect(() => {
    const user = getUserFromStorage();
    setUser(user);
  }, []);

  const handleGoogleResponseForSignOut = async () => {
    await googleSignout();
    clearStorage();
    history.push(`/`);
  };

  return (
    <header>
      <Link to={`/projects`} className="project-info">
        <img src={Logo} alt="logo" className="logo" />
        <p>TMA</p>
      </Link>
      <div className="projects-dropdown" ref={projectsNode}>
        <button onClick={e => setOpenProjects(!openProjects)}>
          Projects <img src={Arrow} alt="Arrow icon" />
        </button>
        {openProjects && (
          <div className="dropdown-list">
            <Link to="/projects">View all projects</Link>
            <Link to="/">Create new project</Link>
          </div>
        )}
      </div>
      <div className="user-info" ref={logoutNode}>
        <button onClick={e => setOpenLogout(!openLogout)}>
          {user?.name} <img src={user?.photoUrl} alt="User avatar" className="avatar" />
        </button>
        {openLogout && (
          <div className="dropdown-logout">
            <Link to="/" onClick={handleGoogleResponseForSignOut}>
              <img src={Logout} alt="Logout icon"/> Log Out
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
