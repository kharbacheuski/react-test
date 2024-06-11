import Question, {QuestionDataType} from "./Question"
import { Box } from "@mui/material"
import { FC, useContext, useMemo } from "react";
import { AnswersContext } from "../../Main"

const QuestionsList: FC<{questions: QuestionDataType[]}> = ({questions}) => {
    const {currentQuestion} = useContext(AnswersContext)

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 7 }}> 
            <Question type="react" {...questions[currentQuestion - 1]} />
        </Box>
    )
}   

export default QuestionsList