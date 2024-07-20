import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/header";
import { ExpandMoreOutlined } from "@mui/icons-material";

const FAQ = () => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently asked Question Page" />
            <Box m="20px">
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A frequently asked questions (FAQ) list is often used 
                        in articles, websites, email lists, and online forums 
                        where common questions tend to recur, for example 
                        through posts or queries by new users related to 
                        common knowledge gaps.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A frequently asked questions (FAQ) list is often used 
                        in articles, websites, email lists, and online forums 
                        where common questions tend to recur, for example 
                        through posts or queries by new users related to 
                        common knowledge gaps.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your Favorite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A frequently asked questions (FAQ) list is often used 
                        in articles, websites, email lists, and online forums 
                        where common questions tend to recur, for example 
                        through posts or queries by new users related to 
                        common knowledge gaps.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Some Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A frequently asked questions (FAQ) list is often used 
                        in articles, websites, email lists, and online forums 
                        where common questions tend to recur, for example 
                        through posts or queries by new users related to 
                        common knowledge gaps.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A frequently asked questions (FAQ) list is often used 
                        in articles, websites, email lists, and online forums 
                        where common questions tend to recur, for example 
                        through posts or queries by new users related to 
                        common knowledge gaps.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </Box>
            
        </Box>
    )
}
export default FAQ;