import { Box ,Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import Header from "../../Components/header";
import { mockDataInvoices } from './../../Data/mockData';

const Invoices = () => {
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
            field: "cost",
            headerName:"Cost",
            flex:1,
            renderCell: (params) =>(
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            )
        },
        {
            field: "date",
            headerName:"Date",
            flex:1
        }
    ]

    return(
        <Box m="20px">
            <Header
                title="INVOICES"
                subtitle="List of Invoice Balances"
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
                    "& .MuiCheckbox-root":{
                        color: `${colors.greenAccent[200]} !important`
                    }
                }}
            >
                <DataGrid 
                    checkboxSelection
                    rows={mockDataInvoices} 
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
export default Invoices;