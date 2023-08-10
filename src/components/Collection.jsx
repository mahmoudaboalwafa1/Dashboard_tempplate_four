import React from "react";
import Nav from "./Nav";
import Aside from "./Aside";
import CollectionClasses from "./classNames/CollectionClasses";
import { useSelector } from "react-redux";

const Collection = ({ clients, MainTitle, children }) => {
  const userAuth = useSelector((state) => state.UserAuth.user);
  const projectsData = useSelector((state) => state.ProjectsData);
  const FilesData = useSelector((state) => state.FilesData);

  return (
    <main>
      <Aside />
      <section
        className={`allsections ${!userAuth && "h-100"} ${
          !projectsData.length > 0 && MainTitle.includes("Projects") && "h-100"
        }`}
      >
        <Nav />
        <div>
          <h1 className="dash">{MainTitle}</h1>
          <div className={CollectionClasses.mainTitle(MainTitle, FilesData)}>
            {children}
          </div>
          {clients}
        </div>
      </section>
    </main>
  );
};

export default Collection;
