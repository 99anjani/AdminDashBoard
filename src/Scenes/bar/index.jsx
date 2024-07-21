import { Box } from "@mui/material"
import Header from "../../Components/header"
import BarChart from "../../Components/barChart"

const Bar = () => {
    return(
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
            <Box>
                <BarChart/>
            </Box>
        </Box>
    )
}
export default Bar;