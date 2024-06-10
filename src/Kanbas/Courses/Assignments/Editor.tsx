export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="m-5" style={{ width: '800px' }}>
            <div className="d-felx flex-column p-3 m-3 ">
                <div className="mb-3">
                    <label htmlFor="wd-name" className="mb-3" >Assignment Name</label>
                    <input id="wd-name" className="form-control" value="A1" />
                </div>

                <div className="mb-3">
                    <textarea id="wd-description" className="form-control" rows={10}>
                        The assignment is available online
                        Submit a link to the landing page of of your Web application running on Netlify.

                        The landing page should include the following:

                        Your full name and section
                        Links to each of the lab assignments
                        Link to the Kanbas application
                        Links to all relevant source code repositories
                        The Kanbas application should include a link to navigate back to the landing page.
                    </textarea>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-points" className="col-sm-3 col-formlabel">Points</label>
                    <div className="col-sm-9">
                        <input id="wd-points" value={100} className="form-control"></input>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-group" className="col-sm-3 col-formlabel ">Assignment Group</label>
                    <div className="col-sm-9">
                        <select id="wd-group" className="form-select">
                            <option value="READINGS">READINGS</option>
                            <option selected value="ASSIGNMENTS">
                                ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="wd-display-grade-as" className="col-sm-3 col-formlabel ">
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
                    <label htmlFor="wd-submission-type" className="col-sm-3 col-formlabel ">
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
                    <label htmlFor="wd-assign-to" className="col-sm-3 col-formlabel ">
                        Assign</label>
                    <div className="col-sm-9">
                        <div className="form-control">
                            <label htmlFor="wd-assign-to" className="mb-1 p-0" style={{ fontWeight: 'bold' }}>Assign to</label><br />
                            <input id="wd-assign-to" className="form-control m-2 p-0" value={"Everyone"} />
                            <label htmlFor="wd-due-date" className="mb-1 p-0" style={{ fontWeight: 'bold' }}>Due</label><br />
                            <input type="date" className=" form-control m-2 p-0"
                                id="wd-due-date"
                                value="2024-05-13" />
                            <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="wd-available-from"  style={{ fontWeight: "bold" }}>Available from</label>

                                    <input type="date" className=" form-control m-2 p-0 "
                                        id="wd-available-from"
                                        value="2024-05-06" />
                                </div>
                                <div className="col-sm-6">
                                <label htmlFor="wd-available-until"  style={{ fontWeight: "bold" }}>Until</label>

                                    <input type="date" className=" form-control m-2 p-0 col-sm-4"
                                        id="wd-available-until"
                                        value="2024-05-20" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <hr />
                <div className="text-nowrap d-flex p-0 m-2 float-end">
                    <button id="wd-add-assignment-btn" className="btn btn-xs bg-secondary me-1">Cancel</button>
                    <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1">Save</button>
                </div>



            </div>
        </div>
    );
}
