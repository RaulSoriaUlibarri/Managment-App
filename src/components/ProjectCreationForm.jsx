import { useState } from "react";

const ProjectCreationForm = ({ handleSave, handleCancel, closeEditView }) => {
  const [projectInfo, setProjectInfo] = useState({
    name: "",
    description: "",
    duedate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProjectInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSave(projectInfo);
    setProjectInfo({ name: "", description: "", duedate: "" });
    closeEditView();
  }

  return (
    <div>
      <form className="mt-4 text-left">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            onClick={handleCancel}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </menu>
        <label className="text-sm font-bold uppercase text-stone-500">
          name
        </label>
        <input
          type="text"
          name="name"
          value={projectInfo.name}
          onChange={handleChange}
          className="w-full p-1 border-b-2 rounded-xs border-stone-300 bg-stone-200 text-stone-600 focus:outline-hidden focus:border-stone-600"
        />
        <label className="text-sm font-bold uppercase text-stone-500">
          description
        </label>
        <input
          type="text"
          name="description"
          value={projectInfo.description}
          onChange={handleChange}
          className="w-full p-1 border-b-2 rounded-xs border-stone-300 bg-stone-200 text-stone-600 focus:outline-hidden focus:border-stone-600"
        />
        <label className="text-sm font-bold uppercase text-stone-500">
          due date
        </label>
        <input
          type="date"
          name="duedate"
          value={projectInfo.duedate}
          onChange={handleChange}
          className="w-full p-1 border-b-2 rounded-xs border-stone-300 bg-stone-200 text-stone-600 focus:outline-hidden focus:border-stone-600"
        />
      </form>
    </div>
  );
};

export default ProjectCreationForm;
