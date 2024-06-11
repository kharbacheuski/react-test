import { Box } from "@mui/material"
import { FC } from "react"
import Answer, {AnswerDataType} from "./Answer"
import { useSprings, animated } from '@react-spring/web'

const AnswersList: FC<{answers: AnswerDataType[]}> = ({ answers }) => {
    const [springs, api] = useSprings(
        answers.length,
        () => ({
            config: { duration: 300 },
            reset: true,
            from: { opacity: 0, x: Math.random() * (Math.random() > 0.5 ? -200 : 200) },
            to: { opacity: 1, x: 0 },
        }), [answers]
    )
    
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, marginTop: 3 }}>
            {springs.map((props, index) => (
                <animated.div key={answers[index].title} style={props}><Answer id={index + 1} answerData={answers[index]} /></animated.div>
            ))}
        </Box>
    )
}

export default AnswersList