import { Box ,useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import Header from "../../Components/header";
import { mockDataContacts } from './../../Data/mockData';

const Contacts = () => {
    const theme= useTheme();
    const colors=tokens(theme.palette.mode);

    const column=[
        {
            field: "id",
            headerName: "ID",
            
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
            field: "address",
            headerName:"Address",
            flex:1
        },
        {
            field: "city",
            headerName:"City",
            flex:1
        },
        {
            field: "zipCode",
            headerName:"Zip Code",
            flex:1
        },
    ]

    return(
        <Box m="20px">
            <Header
                title="CONTACTS"
                subtitle="List of Contacts for Future Reference"
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
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                      color: colors.grey[100],
                      borderBottom: "none",
                    },
                }}
            >
                <DataGrid 
                    rows={mockDataContacts} 
                    columns={column} 
                    components={{ Toolbar: GridToolbar }}
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
export default Contacts;