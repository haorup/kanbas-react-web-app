import db from "../Database/index.js";

export default function QuizRoutes(app) {
    app.get("/api/courses/:cid/quizzes", (req, res) => {
        const {cid} = req.params;
        const quizzes = db.quizzes.filter((m) => m.courses === cid);
        res.json(quizzes);
    });
}