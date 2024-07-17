import { Box ,Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../Components/header";
import { mockDataTeam } from './../../Data/mockData';

const Team = () => {
    const theme= useTheme();
    const colors=tokens(theme.palette.mode);

    const column=[
        {
            field: "id",
            headerName: "ID"
        },
        {
            field: "name",
            headerName: "Name",
            flex:1,
            cellClassName: 'name-column--cell'
        },
        {
            field: "age",
            headerName: "Age",
            flex: 1
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1
        },
        {
            field: "email",
            headerName:"Email",
            flex:1
        },
        {
            field: "accessLevel",
            headerName:"Access Level",
            flex:1,
            renderCell:({row: {access}})=>{
                return(
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        backgroundColor={
                            access==="admin"?
                            colors.greenAccent[600]
                            :access==="manager"?
                            colors.greenAccent[500]
                            :colors.greenAccent[500]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        {access}
                        </Typography>
                    </Box>
                )
            }
        },
    ]

    return(
        <Box m="20px">
            <Header
                title="CONTACTS"
                subtitle="List of Team Contacts for Future Reference"
            />
            <Box
                m="40px 0 0 0"
                height="70vh"
                sx={{
                    "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: colors.blueAccent[700],
                      borderBottom: "none",
                    },
                }}
            >
                <DataGrid 
                    rows={mockDataTeam} 
                    columns={column} 
                    initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 8,
                            },
                        },
                    }}
                />
            </Box>
        </Box>
    )
    
}
export default Team;