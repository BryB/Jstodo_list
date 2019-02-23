// create a set function that changes
// the current list to the one clicked.
// done. must create a var that allows user to  view current list
const manager = (() => {
  let id = 0;
  let li = 0;
	let vli = 0;
  const getId = () => id;
	const getLi = () => li;
	const viewLi = () => vli;
	const setLi = (nVal) => vli = nVal;
  const incId = () => ++id;
	const incLi = () => ++li;
	const decLi = () => --li;
  const remId = (list,id) => {
    id = id.split('');
    let index = id.slice(2).join('');
    lists = lists[list].splice(parseInt(index, 10), 0);
  };
	const resetId = () => id = 0;
  return {
    getId,
		getLi,
		viewLi,
		setLi,
    incId,
		incLi,
		decLi,
    remId,
		resetId,
  };
})();

const projectList = (() => {
	const projects =  [];

	function getAllProjects () {
		return projects;
	}

	function addProject (project) {
		projects.push(project);
	}

	function getProject (projectId) {
		return projects[projectId];
	}

	function deleteProject (project) {
		projects.splice(projects.indexOf(project), 1);
	}

	return {getAllProjects, addProject, getProject, deleteProject};
})();

function project (projectName) {
	const id =  manager.getLi();
	const name = projectName;
	let tasks = [];
	const addTask = task => {
		tasks.push(task);
	};

	const deleteTask = task => {
		tasks.splice(tasks.indexOf(task), 1);
	};

	return {id, name, tasks, addTask, deleteTask};
}

function task (id, title, priority, date, description) {
  this.id = id;
  this.title = title;
  this.priority = priority;
  this.date = date;
  this.description = description;
  this.completed = false;


	return {id, title, priority, date, description};
}

task.prototype.isCompleted = function () {
	this.completed = !this.completed;
};



export{manager, task, project, projectList};