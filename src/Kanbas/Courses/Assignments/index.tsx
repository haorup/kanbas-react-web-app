import { BsGripVertical } from "react-icons/bs";
import AssignmentControl from "./AssignmentControl";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GiNotebook } from "react-icons/gi";
import "./index.css"
export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentControl />
            <li className="wd-assignment-list list-group-item p-0 m-5 fs-5 border-gray ">
                <div className="wd-title p-3 ps-2 bg-secondary align-items-center">
                    <BsGripVertical className="me-2 fs-3" />

                    <span style={{fontWeight: "bold"}}>ASSIGNMENTS</span>
                    <IoEllipsisVertical className="fs-4 float-end" />
                    <FaPlus className="position-relative me-2 ms-2 float-end"  />
                    <span className="wd-assignment-rounded-corners-all-around
     wd-assignment-border-thin wd-assignment-border-black wd-assignment-border-solid float-end p-1 " >
                        40% of Total
                    </span>
                </div>
                <ul className="wd-assignment-list-item list-group rounded-0 border-5 border-start border-success">
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        <div className="row align-items-center">
                            <div className="col-1">
                                <BsGripVertical className="me-2 fs-3" />
                                <GiNotebook className="me-0 fs-3" />
                            </div>

                            <div className="col-9 d-flex flex-column justify-content-center">
                                <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123"
                                    style={{
                                        textDecoration: "none", color: "black",
                                        fontWeight: "bold"
                                    }}>
                                    A1
                                </a>
                                <p>
                                    <span style={{ color: "red" }}>Multiple Modules</span> | <span style={{ fontWeight: "bold" }}>Not Available</span> until May 6 at 12:00am |<br />
                                    <span style={{ fontWeight: "bold" }}>Due</span> May 13 at 11:59pm | 100 pts
                                </p>
                            </div>
                            <div className="col-2">
                                <AssignmentControlButtons />
                            </div>
                        </div>
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        <div className="row align-items-center">
                            <div className="col-1">
                                <BsGripVertical className="me-2 fs-3" />
                                <GiNotebook className="me-0 fs-3" />
                            </div>

                            <div className="col-9 d-flex flex-column justify-content-center">
                                <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123"
                                    style={{
                                        textDecoration: "none", color: "black",
                                        fontWeight: "bold"
                                    }}>
                                    A2
                                </a>
                                <p>
                                    <span style={{ color: "red" }}>Multiple Modules</span> | <span style={{ fontWeight: "bold" }}>Not Available</span> until May 6 at 12:00am |<br />
                                    <span style={{ fontWeight: "bold" }}>Due</span> May 13 at 11:59pm | 100 pts
                                </p>
                            </div>
                            <div className="col-2">
                                <AssignmentControlButtons />
                            </div>
                        </div>
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        <div className="row align-items-center">
                            <div className="col-1">
                                <BsGripVertical className="me-2 fs-3" />
                                <GiNotebook className="me-0 fs-3" />
                            </div>

                            <div className="col-9 d-flex flex-column justify-content-center">
                                <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123"
                                    style={{
                                        textDecoration: "none", color: "black",
                                        fontWeight: "bold"
                                    }}>
                                    A3
                                </a>
                                <p>
                                    <span style={{ color: "red" }}>Multiple Modules</span> | <span style={{ fontWeight: "bold" }}>Not Available</span> until May 6 at 12:00am |<br />
                                    <span style={{ fontWeight: "bold" }}>Due</span> May 13 at 11:59pm | 100 pts
                                </p>
                            </div>
                            <div className="col-2">
                                <AssignmentControlButtons />
                            </div>
                        </div>
                    </li>
                </ul>
            </li>


        </div>
    );
}
