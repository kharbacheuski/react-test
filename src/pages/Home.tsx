import { Box, Typography, useTheme } from "@mui/material"
import data from "../questions.json"
import TestCard from "../components/TestCard"

const Home = () => {
    const tests = Object.keys(data)

    return <Box sx={{ mt: 10 }}>
        <Typography variant="h3">Выберите тест</Typography>

        <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            alignItems: "stretch", 
            gap: 2, 
            margin: "70px 0 50px",

            "@media (max-width: 767px)": {
                gridTemplateColumns: "1fr",
            }
        }}>
            {tests.map((topic) => (
                <TestCard isActive={data[topic].questions.length > 0} key={topic} topic={topic} />
            ))}
        </Box>
    </Box>
}

export default Home