import { Box, Typography, useTheme } from "@mui/material"
import data from "../questions.json"
import { Link } from "react-router-dom"
import {FC} from "react"

const TestCard: FC<{topic: string, isActive?: boolean}> = ({topic, isActive}) => {
    const {palette} = useTheme()
    return (
        <Link to={isActive ? `/${topic}` : "/"} key={topic} style={{ textDecoration: "none", color: palette.text.primary }}>
            <Box sx={{ 
                backgroundColor: isActive ? "#f1f5ff" : "#efefef", 
                padding: "40px 30px", 
                borderRadius: 2, 
                cursor: isActive ? "pointer" : "default", 
                position: "relative",
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: 5,

                "h5": {
                    transition: "all 0.3s",
                },

                ":hover": isActive ? {
                    backgroundColor: "#e6ebff",

                    "h5": {
                        color: palette.primary.main
                    },
                } : null
            }} key={topic}>
                <Box>
                    <Typography variant="h5" sx={{ ":first-letter": { textTransform: "uppercase" }, color: isActive ? palette.text.primary : palette.text.disabled }}>{topic}</Typography>
                    <Typography sx={{ mt: 1, color: isActive ? palette.text.primary : palette.text.disabled }}>{data[topic].description}</Typography>
                </Box>

                <img style={{ height: 80 }} src={`/${topic}-logo.png`} alt=""/>
            </Box>
        </Link>
    )
}

export default TestCard