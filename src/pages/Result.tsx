import { Typography, Box, SvgIcon } from "@mui/material"
import { FC, Fragment, useContext } from "react";
import { AnswersContext } from "../Main";

const Result: FC<{}> = ({}) => {
    const {currentQuestion, setCurrentQuestion} = useContext(AnswersContext)

    return <Fragment>
        <Box sx={{ marginTop: 7 }}>
            <Typography variant="h2">Результаты</Typography>
        </Box>
    </Fragment>
}   

export default Result