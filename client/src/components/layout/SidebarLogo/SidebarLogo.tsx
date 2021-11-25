import { Avatar, Box } from "@mui/material";
import logo from '../../../assets/logo-sidebar-taskhub.png'

const SidebarLogo = () => {
    return (<Box
        display="flex"
        justifyContent="center"
        sx={{
            marginTop: '1.5rem',
            marginBottom: '1.5rem'
        }}
    >
        <Avatar src={logo} sx={{ width: '200px', height: '60px', justifyContent: 'center' }} variant='square' />
    </Box>)
}

export default SidebarLogo;