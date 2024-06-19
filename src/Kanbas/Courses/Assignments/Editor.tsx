import { useLocation, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { cid, assignmentId } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);
    if (!assignment) {
        return <div>Assignment not found</div>;
    }

    return (
        <div id="wd-assignments-editor" className="m-5" style={{ width: '800px' }}>
            <div className="d-felx flex-column p-3 m-3 ">
                <div className="mb-3">
                    <label htmlFor="wd-name" className="mb-3"
                        style={{ fontWeight: 'bold' }}>Assignment Name</label>
                    <input id="wd-name" className="form-control"
                        value={assignment && assignment._id + " " + assignment.title} />
                </div>

                <div className="mb-3">
                    <textarea id="wd-description" className="form-control" rows={10}>
                        {assignment && assignment.description}
                    </textarea>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-points" className="col-sm-3 col-formlabel"
                        style={{ fontWeight: 'bold' }}>Points</label>
                    <div className="col-sm-9">
                        <input id="wd-points" value={assignment.points} className="form-control"></input>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-group" className="col-sm-3 col-formlabel "
                        style={{ fontWeight: 'bold' }}>Assignment Group</label>
                    <div className="col-sm-9">
                        <select id="wd-group" className="form-select">
                            <option value="READINGS">READINGS</option>
                            <option selected value="ASSIGNMENTS">
                                ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-display-grade-as" className="col-sm-3 col-formlabel"
                        style={{ fontWeight: 'bold' }}>
                        Display Grade As</label>
                    <div className="col-sm-9">
                        <select id="wd-display-grade-as" className="form-select">
                            <option value="Letters">Letters</option>
                            <option selected value="Percentage">
                                Percentage</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-submission-type" className="col-sm-3 col-formlabel "
                        style={{ fontWeight: 'bold' }}>
                        Submission Type</label>
                    <div className="col-sm-9">
                        <div className="form-control">
                            <select id="wd-submission-type" className="form-select mb-3">
                                <option value="in-person">in-person</option>
                                <option selected value="Online">
                                    Online</option>
                            </select>
                            <label className="m-3 p-0" style={{ fontWeight: 'bold' }}>Online Entry Options</label>
                            <div className="form-check mb-2">
                                <input type="checkbox" name="online-entry-option" id="wd-text-entry" className="form-check-input" />
                                <label htmlFor="wd-text-entry" className="form-check-label me-1 p-0">Text Entry</label>
                            </div>

                            <div className="form-check mb-2">
                                <input type="checkbox" name="online-entry-option" id="wd-website-url" className="form-check-input" />
                                <label htmlFor="wd-website-url" className="form-check-label me-1 p-0">Website URL</label>
                            </div>

                            <div className="form-check mb-2">
                                <input type="checkbox" name="online-entry-option" id="wd-media-recordings" className="form-check-input" />
                                <label htmlFor="wd-media-recordings" className="form-check-label me-1 p-0">Media Recordings</label>
                            </div>

                            <div className="form-check mb-2">
                                <input type="checkbox" name="online-entry-option" id="wd-student-annotation" className="form-check-input" />
                                <label htmlFor="wd-student-annotation" className="form-check-label me-1 p-0">Student Annotation</label>
                            </div>

                            <div className="form-check mb-2">
                                <input type="checkbox" name="online-entry-option" id="wd-file-upload" className="form-check-input" />
                                <label htmlFor="wd-file-upload" className="form-check-label me-1 p-0">File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-assign-to" className="col-sm-3 col-formlabel "
                        style={{ fontWeight: 'bold' }}>
                        Assign</label>
                    <div className="col-sm-9">
                        <div className="form-control">
                            <label htmlFor="wd-assign-to" className="mb-1 p-0" style={{ fontWeight: 'bold' }}>Assign to</label><br />
                            <input id="wd-assign-to" className="form-control m-2 p-0" value={"Everyone"} />
                            <label htmlFor="wd-due-date" className="mb-1 p-0" style={{ fontWeight: 'bold' }}>Due</label><br />
                            <input type="date" className=" form-control m-2 p-0"
                                id="wd-due-date"
                                value={assignment.dueDate} />
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="wd-available-from" style={{ fontWeight: "bold" }}>Available from</label>

                                    <input type="date" className=" form-control m-2 p-0 "
                                        id="wd-available-from"
                                        value={assignment.availableDate} />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="wd-available-until" style={{ fontWeight: "bold" }}>Until</label>

                                    <input type="date" className=" form-control m-2 p-0 col-sm-4"
                                        id="wd-available-until"
                                        value={assignment.dueDate} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <hr />
                <div className="text-nowrap d-flex p-0 m-2 float-end">
                    <button id="wd-add-assignment-btn"
                        className="btn btn-xs bg-secondary me-1"
                        onClick={() => window.location.href=`#/Kanbas/Courses/${cid}/Assignments`}>
                        Cancel</button>
                    <button id="wd-add-assignment-btn"
                        className="btn btn-lg btn-danger me-1"
                        onClick={() => window.location.href=`#/Kanbas/Courses/${cid}/Assignments`}>
                        Save</button>
                </div>



            </div>
        </div>
    );
}
