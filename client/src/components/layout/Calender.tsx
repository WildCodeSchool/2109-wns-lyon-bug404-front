import React, { useState, useEffect } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import PickersDay from "@mui/lab/PickersDay";
import { Grid, Paper } from "@mui/material";
import frLocale from "date-fns/locale/fr";
import { shadows } from "@mui/system";

import { format } from "date-fns";

const Calender = () => {
	const [date, setDate] = React.useState<Date | null>(new Date());

	return (
		<Grid container direction='row' justifyContent='center' alignItems='center'>
			<Grid
				sx={{ boxShadow: 2, width: "80%", height: "70%", borderRadius: "15px" }}
				container
				direction='row'
				justifyContent='center'
				alignItems='center'>
				<LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
					<CalendarPicker
						date={date}
						onChange={(newDate) => setDate(newDate)}
					/>
				</LocalizationProvider>
			</Grid>
		</Grid>
	);
};

export default Calender;
