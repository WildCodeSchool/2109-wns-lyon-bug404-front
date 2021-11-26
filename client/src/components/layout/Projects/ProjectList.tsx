import React from "react";
import "./Project.css";
import { BiDotsHorizontal } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";

type ProjectProps = {
	data?: any;
};

function ProjectList({ data }: ProjectProps) {
	const navigate = useNavigate();
	const badgeDisposition =
		data.categories.length > 1 ? "center" : "space-between";
	return (
		<div
			className='card'
			style={{ cursor: "pointer" }}
			onClick={() => {
				navigate(`/dashboard/${data.name}`);
			}}>
			<div className='header'>
				<p>{data.name}</p>
				<BiDotsHorizontal style={{ fontSize: "1.5rem" }} />
			</div>
			<p className='description'>{data.content}</p>
			<span style={{ display: "flex", justifyContent: badgeDisposition }}>
				{data.categories.map((category: any, i: number) => (
					<Chip
						key={i}
						label={category}
						style={{
							backgroundColor: data?.chipColor,
							color: data?.chipFont,
							fontWeight: "600",
							fontSize: "1rem",
							padding: "0.5rem 0.75rem",
							marginRight: "1.5rem",
						}}
					/>
				))}
			</span>
			<div className='footer'>
				<MdMessage style={{ fontSize: "2.5rem" }} />
				{data.avatar.map((a: string, i: number) => (
					<Avatar
						key={i}
						alt={a}
						src={a}
						style={{ width: "3rem", height: "3rem" }}
					/>
				))}
			</div>
		</div>
	);
}

export default ProjectList;
