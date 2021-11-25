import React, { useState, useEffect } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import PickersDay from "@mui/lab/PickersDay";
import { Grid } from "@mui/material";
import frLocale from "date-fns/locale/fr";

import { format } from "date-fns";

const Calender = () => {
	const [date, setDate] = React.useState<Date | null>(new Date());

	return (
		<Grid>
			<LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
				<CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
			</LocalizationProvider>
		</Grid>
	);
};

export default Calender;
