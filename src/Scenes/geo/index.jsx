import { Box } from "@mui/material"
import Header from "../../Components/header"
import GeoChart from "../../Components/geoGraphyChart";




const Geo = () => {
    return(
        <Box m="19px">
            <Header title="Geography Chart" subtitle="Simple Geography Chart"/>
            <Box  height="75vh" mt="8px" border={3} borderColor="#808080" >
                <GeoChart/>
            </Box>
        </Box>
    )
}
export default Geo;