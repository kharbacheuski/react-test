import { BrowserRouter, Link } from 'react-router-dom';
import "./styles/base.scss"
import { Element } from './routes';
import { Container, Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

type AnswersType = {
    [key: number]: {
        answerNumber: number
        isCorrect: boolean
    }
}

type AnswersContextType = {
    answers: AnswersType
    setAnswers: Dispatch<SetStateAction<AnswersType>>
    currentQuestion: number
    setCurrentQuestion: Dispatch<SetStateAction<number>>,
    currentTest: string,
    setCurrentTest: Dispatch<SetStateAction<string>>
}

export const AnswersContext = createContext<AnswersContextType>({
    answers: {},
    setAnswers: () => {},
    currentQuestion: 1,
    setCurrentQuestion: () => {},
    currentTest: "react",
    setCurrentTest: () => {}
})
  
const Main = () => {
    const [currentTest, setCurrentTest] = useState<string>("react")
    const [answers, setAnswers] = useState<AnswersType>({})
    const [currentQuestion, setCurrentQuestion] = useState<number>(1)

    const theme = createTheme({
        typography: {
          fontFamily: [
            'Mulish',
            'sans-serif',
          ].join(','),
        },
        components: {
            MuiContainer: {
                styleOverrides: {
                    root: {
                        overflow: "unset",
                    }
                }
            }
        }
      });

    return (
        <BrowserRouter>
            <AnswersContext.Provider value={{answers, setAnswers, currentQuestion, setCurrentQuestion, currentTest, setCurrentTest}}>
                <ThemeProvider theme={theme}>
                    <Container className="container">
                        <Box sx={{ display: "flex", gap: 5, alignItems: "center", marginTop: 5 }}>
                            <Link to="/">
                                <img className="logo" width={65} height={65} src="logo.svg" alt="logo" />
                            </Link>

                            <Typography variant="h6" fontFamily={"monospace"}>Тесты на разные темы в сфере разработки</Typography>
                        </Box>

                        <Element />      
                    </Container>
                </ThemeProvider>
            </AnswersContext.Provider>
        </BrowserRouter>
    )
}

export default Main