import React, { MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "1px solid #000",
	borderRadius: "10px",
	boxShadow: 50,
	p: 4,
};

const AddTask = ({
	open,
	handleClose,
}: {
	open: boolean;
	handleClose: MouseEventHandler;
}) => {
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Grid sx={style}>
					<Typography
						variant='h6'
						component='h2'
						color='primary'
						sx={{ fontWeight: 600 }}>
						Add a new task
					</Typography>
				</Grid>
			</Modal>
		</>
	);
};

export default AddTask;
