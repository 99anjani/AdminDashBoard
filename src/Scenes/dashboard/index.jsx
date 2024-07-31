import { Box, Button, useTheme } from "@mui/material";
import Header from './../../Components/header';
import EmailIcon from '@mui/icons-material/Email';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import { tokens } from "../../theme";
import StatBox from "../../Components/statBox";

const Dashboard = () => {
  const theme=useTheme();
  const colors= tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* header */}
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
        <Box>
          <Button
            sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px",fontWeight: "bold", padding: "10px 20px",}}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }}/>
            Download Reports
          </Button>
        </Box>
      </Box>
      
       {/* grid and charts */}
       <Box display="grid" gridTemplateColumns="repeat(12,1fr)">
          {/* row 1 */}
          <Box>
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Box>
        
    </Box>
  );
};

export default Dashboard;