import { Avatar, Box } from "@mui/material";
import logo from "../../../assets/logo-sidebar-taskhub.png";
import { Link, useNavigate } from "react-router-dom";

const SidebarLogo = () => {
	const navigate = useNavigate();
	return (
		<Box
			display='flex'
			justifyContent='center'
			sx={{
				marginTop: "1.5rem",
				marginBottom: "1.5rem",
			}}
			onClick={() => {
				navigate("/");
			}}>
			<Avatar
				variant='square'
				src={logo}
				sx={{
					height: "60px",
					width: "80%",
					justifyContent: "center",
					cursor: "pointer",
				}}
			/>
		</Box>
	);
};

export default SidebarLogo;
