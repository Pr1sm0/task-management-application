import React, { ReactNode } from 'react';
import Header from './Header';
import './layout.scss';

interface IProps {
  pageTitle: string;
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ pageTitle, children }: IProps) => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="page-title">{pageTitle}</h2>
        {children}
      </div>
    </div>
  );
};

export default Layout;