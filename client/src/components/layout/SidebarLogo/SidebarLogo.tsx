import { Box } from "@mui/material";
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
        <img src={logo} style={{ height: '60px', justifyContent: 'center' }}/>
    </Box>)
}

export default SidebarLogo;