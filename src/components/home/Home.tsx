import { Box, Button, Snackbar, Tooltip } from "@mui/material";

import "./homeStyle.css";
import React from "react";

import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ContentContainer } from "../shared/ContentContainer";
import { Typography } from "../shared/Typography";

export const MapInfo = ({ title }: { title: string }) => {
	const defaultProps = {
		center: {
			lat: 36.2893875,
			lng: -115.311701
		},
		zoom: 15
	};


	const [open, setOpen] = React.useState(false);

	const link = `https://maps.google.com/?q=${defaultProps.center.lat},${defaultProps.center.lng}&z=${defaultProps.zoom}`

	const onClickCopy = () => {
		setOpen(true);
		navigator.clipboard.writeText(link);
	}

	const onClickLink = () => {
		window.open(link, "_blank");
	}


	const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<ContentContainer
			sx={{
				alignContent: "center"
			}}
		>
			<Typography variant="h2"
				sx={{
					paddingBottom: "10px",
					color: "white",
				}}>
				{title}
			</Typography>
			<Box component="div"
				sx={{
					width: "50%",
					alignSelf: "center",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Tooltip
					title="Open in new tab"
				>
					<Button
						onClick={onClickLink}
					>
						<OpenInNewIcon />
					</Button>
				</Tooltip>
				<Tooltip title="Copy link">
					<Button
						onClick={onClickCopy}
					>
						<LinkIcon />
					</Button>
				</Tooltip>
			</Box>
			<Snackbar
				open={open}
				autoHideDuration={5000}
				onClose={handleClose}
				message="Copied!"
			/>
		</ContentContainer >
	)
}
