import { FaPlus } from "react-icons/fa6";
import QuestionEditor from "./QuestionEditor";
import { useSelector } from "react-redux";

export default function Questions() {
    const quiz = useSelector((state: any) => state.quizzesReducer.quiz);
    return (
        <div id="wd-quizzes-question" className="text-nowrap">

            <div className="text-center">
                <button id="wd-add-questionn-btn" className="btn btn-lg btn-secondary me-1"
                    data-bs-toggle="modal" data-bs-target="#wd-add-question-dialog">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    New Question
                </button>
            </div>
            <div className="row row-cols-1 row-cols-md-5 g-4 mt-1">
                {quiz.questions.map((question: any) => (
                    <div className="wd-quiz-questionscreen col"  style={{ width: "600px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <div className="card-body">
                                <p className="card-title" style={{fontSize: "20px"}}>{question.questionId}. {question.questionContent}</p>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                        </div>


                        ))}
            </div>
            <QuestionEditor />

        </div>
    );
}