import { Box, Typography } from "@mui/material"
import { FC, Fragment, useContext } from "react"
import { AnswersContext } from "../../Main"
import {useTheme} from "@mui/material"

export type AnswerDataType= {
    title: any,
    imageUrl?: string
    isCorrect: boolean
}

type Props = {
    answerData: AnswerDataType
    id: number
}

const Answer: FC<Props> = ({ answerData, id}) => {
    const { title, isCorrect} = answerData
    const {answers, setAnswers, currentQuestion} = useContext(AnswersContext)

    const userAnswer = answers[currentQuestion]

    const takeAnswer = (id: number) => {
        if(!userAnswer) {
            setAnswers(prev => ({...prev, [currentQuestion]: {answerNumber: id, isCorrect}}))
        }
    }

    const palette = useTheme().palette

    const answerColor = () => {
        if(userAnswer?.answerNumber === id) {
            return isCorrect ? palette.success.light : palette.error.light
        }
        if(userAnswer && answerData.isCorrect) return palette.success.light
        else return "var(--color-blue)"
    }

    return <Fragment>
        <Box 
            onClick={() => takeAnswer(id)}
            sx={{ 
                display: "flex", 
                gap: 1, 
                padding: "20px 30px", 
                borderRadius: 2, 
                backgroundColor: answerColor(),
                cursor: "pointer",
                transition: "all 0.1s",

                "&:hover": !userAnswer ? {
                    backgroundColor: "var(--color-blue_hover)"
                } : null
            }}
        >
            <Typography>{id}&#41; {title}</Typography>
        </Box>
    </Fragment>
}

export default Answer