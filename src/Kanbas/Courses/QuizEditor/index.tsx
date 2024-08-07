import { Navigate, Route, Routes } from "react-router-dom";
import Tab from "./Tab";
import Questions from "./Questions";
import { useSelector } from "react-redux";


export default function QuizEditor() {
  const quiz = useSelector((state: any) => state.quizzesReducer.quiz);
  return (
    <div className="container ms-4 p-3">
      <div className="row" id="wd-quiz-editor-tabs ">
        <div className="col-12 m-2 p-3">
          <h3 className="float-end me-5 p-1">Points: {quiz.points}</h3>
        </div>
        <div className="col-2">
          <div className="d-none d-md-block p-0">
            <Tab />
          </div>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-12">
          <Routes>
            <Route path="/" element={<Navigate to="Details" />} />
            <Route path="Details" element={<h1>Details</h1>} />
            <Route path="Questions" element={<Questions />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
