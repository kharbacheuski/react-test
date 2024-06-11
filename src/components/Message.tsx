
import { Alert } from "@mui/material"
import { FC } from "react"

type Props = {
    isOpen: boolean
    message: string
    severity: "success" | "error"
}

const Message: FC<Props> = ({severity, message, isOpen}) => {
    return (
        isOpen &&<Alert sx={{ margin: "20px 0" }} severity={severity}>
            {message}
        </Alert>
    )
}

export default Message