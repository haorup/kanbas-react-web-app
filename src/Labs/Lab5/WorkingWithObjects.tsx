import { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {

    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });

    const [module, setModule] = useState(
        {
            id: "001", name: "organic chemistry",
            description: "help students to understand life-related science",
            course: "chemistry",
        }
    )
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

    return (
        <div id="wd-working-with-objects" className="w-50">
            <h3>Working With Objects</h3>

            {/* assignment objects */}
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />


            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />

            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                value={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />

            {/* module objects */}
            <h4>Retrieving Modules</h4>
            <a id="wd-retrieve-module" className="btn btn-success"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a> <hr />

            <h4>Retrieving Modules Properties</h4>
            <a id="wd-retrieve-module-name" className="btn btn-success"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a> <hr />

            <h4>Updating Modules name</h4>
            <a id="wd-retrieve-module" className="btn btn-success float-end"
                href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}>
                Update Modules name
            </a>
            <input className="form-control w-50" id="wd-module-updating-name"
                value={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })
                } />
            <hr />

            <h4>Update score and completeness of assignment</h4>
            <a id="wd-update-assignment-score" className="btn btn-danger float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Assignment Score
            </a>
            <input className="form-control w-50" id="wd-updating-assignment-score"
                value={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
            <hr />

            <a id="wd-update-assignment-completeness" className="btn btn-danger float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Assignment Completeness
            </a>
            <label className="form-control w-50"> Completed
                <input type="checkbox" id="wd-updating-assignment-completeness"
                    className="ms-2" checked={assignment.completed}
                    onChange={(e) => setAssignment({ ...assignment, completed: (!assignment.completed) })} />
                  </label>
            <hr/>

            <h4>Updating Modules description</h4>
            <a id="wd-retrieve-module-description" className="btn btn-success float-end"
                href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}>
                Update Modules description
            </a>
            <textarea className="form-control w-50" id="wd-module-updating-description"
                value={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })
                } > </textarea>
            <hr />
        </div>
    );
}
