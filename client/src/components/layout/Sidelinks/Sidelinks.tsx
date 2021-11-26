import { Icon, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";

const Sidelinks = ({
    link,
    icon
}: {
    link: string;
    icon: string
}) => {
    return (
        <>
            <ListItem disablePadding sx={{
                "&:hover": {
                    color: "#fff",
                    backgroundColor: '#129DA4'
                },
                }}>
                <ListItemButton>
                    <ListItemIcon sx={{ color: 'white', fontSize: '17px' }}>
                        <Icon>{icon}</Icon>
                    </ListItemIcon>
                    <Typography sx={{ fontSize: '17px' }}>
                        {link}
                    </Typography>
                </ListItemButton>
            </ListItem>
        </>
    );
}

export default Sidelinks;