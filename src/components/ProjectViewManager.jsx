import { ProjectEmptyState, ProjectCreationForm } from "./index";

const ProjectViewManager = ({
  createNewProject,
  projectExists,
  saveProject,
}) => {
  return (
    <>
      {!projectExists && (
        <ProjectEmptyState trigerNewProject={createNewProject} />
      )}
      {projectExists && (
        <ProjectCreationForm
          closeEditView={createNewProject}
          handleSave={saveProject}
        />
      )}
    </>
  );
};

export default ProjectViewManager;
