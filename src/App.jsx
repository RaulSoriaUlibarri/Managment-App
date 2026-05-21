import { NavBarProjects, ProjectViewManager } from "./components";
import { useState } from "react";

function App() {
  const [projects, setprojects] = useState([]);
  const [editMode, setEditMode] = useState(false);

  function handleClick() {
    setEditMode((prev) => !prev);
  }

  function addProject(newProject) {
    setprojects((prev) => [...prev, newProject]);
    console.log(projects);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <NavBarProjects
          createNewProject={handleClick}
          projectsList={projects}
        />
        <ProjectViewManager
          saveProject={addProject}
          createNewProject={handleClick}
          projectExists={editMode}
        />
      </main>
    </>
  );
}

export default App;
