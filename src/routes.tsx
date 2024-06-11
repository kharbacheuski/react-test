import { Navigate, useRoutes } from "react-router-dom";
import Result from "./pages/Result";
import Home from "./pages/Home";
import TestPage from "./pages/test/Test";
import tests from './questions.json'

export const Element = () => {

    const routes = useRoutes([
        {path: '/', element: <Home />},
        ...Object.keys(tests).map((testLanguage) => ({path: `/${testLanguage}`, element: <TestPage test={testLanguage} />})),
        {path: '/result', element: <Result />},
        {path: '*', element: <Navigate to="/" />},
    ])

    return routes
}