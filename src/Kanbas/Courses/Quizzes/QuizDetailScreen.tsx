import { useEffect } from "react";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { setQuiz } from "./reducer";
import * as client from "./client";
import { useDispatch } from "react-redux";

export default function QuizDetailScreen() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const {quiz} = useSelector((state: any) => state.quizzesReducer);

    const fetchQuiz = async () => {
        const quiz = await client.findQuizById(qid as string);
        dispatch(setQuiz(quiz));
        };


    useEffect(() => {
        fetchQuiz();
    }, []);

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