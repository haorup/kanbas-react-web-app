import { BsGripVertical } from "react-icons/bs";
import AssignmentControl from "./AssignmentControl";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GiNotebook } from "react-icons/gi";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentControl />
            <li className="wd-assignment-list list-group-item p-0 m-5 fs-5 border-gray ">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />

                    ASSIGNMENTS
                    <IoEllipsisVertical className="fs-4 float-end" />
                    <FaPlus className="position-relative me-2 float-end" style={{ bottom: "1px" }} />



                </div>
                <ul className="wd-assignment-list-item list-group rounded-0 border-5 border-start border-success">
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        <GiNotebook className="me-2 fs-3" />

                        <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123"
                                    style={{
                                        textDecoration: "none", color: "black",
                                        fontWeight: "bold"
                                    }}>
                                    A1
                                </a>
                                <p>
                                <span style={{color:"red"}}>Multiple Modules</span> | Not available until May 6 at 12:00am |
                    Due May 13 at 11:59pm | 100 pts
                                </p>
                        <AssignmentControlButtons />
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        <GiNotebook className="me-2 fs-3" />
                        <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123"
                                    style={{
                                        textDecoration: "none", color: "black",
                                        fontWeight: "bold"
                                    }}>
                                    A2
                                </a>
                                <p>
                                <span style={{color:"red"}}>Multiple Modules</span> | Not available until May 6 at 12:00am |
                    Due May 13 at 11:59pm | 100 pts
                                </p>
                        <AssignmentControlButtons />
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        <GiNotebook className="me-2 fs-3" />
                        <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123"
                                    style={{
                                        textDecoration: "none", color: "black",
                                        fontWeight: "bold"
                                    }}>
                                    A3
                                </a>
                                <p>
                                <span style={{color:"red"}}>Multiple Modules</span> | Not available until May 6 at 12:00am |
                    Due May 13 at 11:59pm | 100 pts
                                </p>
                        <AssignmentControlButtons />
                    </li>
                </ul>
            </li>


        </div>
    );
}
