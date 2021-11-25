import React from "react";
import { styled } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";

const Progress = ({ color, progress }: { color: string; progress: number }) => {
	const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
		height: 8,
		borderRadius: 5,
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor: "#C4C4C4",
		},
		[`& .${linearProgressClasses.bar}`]: {
			borderRadius: 5,
			backgroundColor: theme.palette.mode === "light" ? `${color}` : "#308fe8",
		},
	}));
	console.log(color);
	return (
		<>
			<BorderLinearProgress variant='determinate' value={progress} />
		</>
	);
};

export default Progress;
