export default function Dashboard() {
    return (
        <div>
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{
                                        textDecoration: "none", color: "navy",
                                        fontWeight: "bold"
                                    }}>
                                    CS1234 React JS
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{
                                        textDecoration: "none", color: "navy",
                                        fontWeight: "bold"
                                    }}>
                                    CS1235 Computer vision
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                CS1235 Computer vision
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{
                                        textDecoration: "none", color: "navy",
                                        fontWeight: "bold"
                                    }}>
                                    CS1236 OOP using Java
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                CS1236 OOP using Java
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{
                                        textDecoration: "none", color: "navy",
                                        fontWeight: "bold"
                                    }}>
                                    CS1237 Datamining using Java
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                CS1237 Datamining using Java
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{
                                        textDecoration: "none", color: "navy",
                                        fontWeight: "bold"
                                    }}>
                                    CS1238 Backend Development
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                CS1238 Backend Development
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{
                                        textDecoration: "none", color: "navy",
                                        fontWeight: "bold"
                                    }}>
                                    CS1240 Vue
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                CS1240 Vue
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/Home"
                                    style={{
                                        textDecoration: "none", color: "navy",
                                        fontWeight: "bold"
                                    }}>
                                    CS1240 Angular
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                CS1240 Angular
                                </p>
                                <a href="#/Kanbas/Courses/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
