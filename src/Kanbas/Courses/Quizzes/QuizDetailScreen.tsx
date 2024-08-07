import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function QuizDetailScreen() {
    const { cid, qId } = useParams();


    const quiz = useSelector((state: any) => state.quizzesReducer.quiz);
    return (
        <div id="wd-quiz-detail-screen">
            <div id="wd-quiz-detail-screen-buttons" className="text-center m-2 p-2">
                <button className="btn btn-secondary me-4">Preview</button>
                <Link
                className="wd-quiz-editor-link"
                to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/editing`}>
                <button className="btn btn-secondary">
                <FaPencil className="position-relative me-2" style={{ bottom: "1px" }} />
                Edit</button></Link>
                <hr/>

            </div>
            <div id="wd-quiz-detail-screen-right" className="text-center">
            {quiz._id + " " + quiz.title}

            </div>
        </div>
    );
}