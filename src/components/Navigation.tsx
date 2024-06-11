import { Typography, Box } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FC, Fragment, useContext } from "react";
import { AnswersContext } from "../Main";
import { useNavigate } from "react-router-dom";

const Navigation: FC<{max: number}> = ({max}) => {
    const {currentQuestion, setCurrentQuestion} = useContext(AnswersContext)

    const navigate = useNavigate()

    const link = (direction: -1 | 1) => {
        if(direction == 1)
            setCurrentQuestion(prev => prev == max ? prev : prev + 1)
        else {
            if(currentQuestion == 1) navigate("/")
            else setCurrentQuestion(prev => prev == 1 ? prev : prev - 1)
        }
    }

    return <Fragment>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 7 }}>
            <ArrowBackIosIcon sx={{ cursor: "pointer", color: "black"}} onClick={() => link(-1)} />
            <Typography variant="h5">{currentQuestion}/{max}</Typography>
            <ArrowForwardIosIcon sx={{ cursor: "pointer", color: currentQuestion < max ? "black" : "gray"}} onClick={() => link(1)} />
        </Box>
    </Fragment>
}   

export default Navigation