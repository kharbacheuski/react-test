import { FC, useContext, memo } from "react"
import { AnswerDataType } from "./Answer"
import { Box, Typography } from "@mui/material"
import AnswersList from "./AnswersList"
import { AnswersContext } from "../../Main"
import Message from "../../components/Message"

export type QuestionDataType = {
    id: number
    type?: "react" | "html" | "typescript" | "css"
    title: string
    description: string
    answers: AnswerDataType[]
}

const Question: FC<QuestionDataType> = ({ title, answers }) => {
    const correctAnswerIndex = answers.findIndex((answer) => answer.isCorrect)

    const message = {
        success: `Правильно! Верный ответ - ${correctAnswerIndex + 1} ${answers[correctAnswerIndex].title}`,
        error: `Неправильно! Вы должны были выбрать - ${correctAnswerIndex + 1} ${answers[correctAnswerIndex].title}`,
    }

    const {answers: userAnswers, currentQuestion} = useContext(AnswersContext)

    const isUserAnswerCorrect = Boolean(userAnswers[currentQuestion]?.isCorrect)
    const isMessageVisible = Boolean(userAnswers[currentQuestion])

    return (
        <Box>
            <Typography variant="h5">{title}</Typography>

            <AnswersList answers={answers} />
            <Message 
                isOpen={isMessageVisible} 
                message={isUserAnswerCorrect ? message.success : message.error} 
                severity={isUserAnswerCorrect ? "success" : "error"} 
            />
        </Box>
    )
}

export default memo(Question)