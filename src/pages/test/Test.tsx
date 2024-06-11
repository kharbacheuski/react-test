import {QuestionDataType} from "./Question"
import data from "../../questions.json"
import { Typography, Box } from "@mui/material"
import Navigation from "../../components/Navigation";
import QuestionsList from "./QuestionsList";
import ReplayIcon from "@mui/icons-material/Replay";
import { FC, useContext, useEffect } from "react";
import { AnswersContext } from "../../Main"
import { useMemo } from "react";

type Props = {
    test: string
}

const TestPage: FC<Props> = ({test}) => {
    const questions: QuestionDataType[] = data[test].questions
    const maxQuestions = questions.length
    const isQuestionsExists = maxQuestions != 0

    const {answers, setAnswers, setCurrentQuestion, setCurrentTest} = useContext(AnswersContext)

    const restart = () => {
        setAnswers([])
        setCurrentQuestion(1)
    }

    useEffect(() => {
        setCurrentTest(test)
        setCurrentQuestion(1)
    }, [])

    return (
        <Box sx={{ mt: 10 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h3">Вопросы по {test}</Typography>

                {Boolean(answers[1]) && <ReplayIcon sx={{ cursor: "pointer", transition: "all 0.3s", ":hover": { transform: "scale(1.1) rotate(-30deg)"} }} onClick={restart} />}
            </Box>

            {isQuestionsExists && <Navigation max={maxQuestions}/>}

            {isQuestionsExists 
            ? <QuestionsList questions={questions} />
            : <Typography sx={{ mt: 5, textAlign: "center" }} variant="h5">Тут пока пусто</Typography>}
        </Box>
    )
}   

export default TestPage