import { Box, Typography, Button } from "@mui/material"
import { FC, Fragment, useContext, useEffect, useState } from "react"
import { AnswersContext } from "../../Main"
import {useTheme} from "@mui/material"

export type AnswerDataType= {
    title: any,
    imageUrl?: string
    isCorrect: boolean
}

type Props = {
    answerData: AnswerDataType
    id: number,
    singleCorrect?: boolean
}

export const SingleCorrectAnswer: FC<Props> = (props) => {
    const [isOpened, setIsOpened] = useState(false)

    const buttonMessage = isOpened ? "Скрыть ответ" : "Показать ответ"

    const toggleIsOpened = () => setIsOpened(prev => !prev)

    useEffect(() => {
        setIsOpened(false)
    }, [props.answerData])

    return <Box>
        {isOpened && <Answer {...props} singleCorrect={true} />}
        <Button variant="contained" sx={{marginTop: "20px"}} onClick={toggleIsOpened}>{buttonMessage}</Button>
    </Box>
}

const Answer: FC<Props> = ({ answerData, id, singleCorrect }) => {
    const { title, isCorrect} = answerData
    const {answers, setAnswers, currentQuestion} = useContext(AnswersContext)

    const userAnswer = answers[currentQuestion]

    const takeAnswer = (id: number) => {
        if(!userAnswer && !singleCorrect) {
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
                cursor: !singleCorrect ? "pointer" : "initial",
                transition: "all 0.1s",

                "&:hover": (!singleCorrect && !userAnswer) ? {
                    backgroundColor: "var(--color-blue_hover)"
                } : null
            }}
        >
            <Typography>{id}&#41; {title}</Typography>
        </Box>
    </Fragment>
}

export default Answer