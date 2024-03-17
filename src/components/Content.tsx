import { Box, BoxProps, Button, Snackbar, Tooltip, Typography, useTheme } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./home/Scene";
import "./style.css";
import React from "react";

import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const Content = () => {
	return (
		<>
			<Canvas
				style={{
					zIndex: -1,
					position: "fixed"
				}}
				gl={{ antialias: false }}>
				<Scene />
			</Canvas>
			<div className={"box"}>
				<MapInfo
					title="Locaitons"
				/>
				<InfoText
					title="Montessori method"
					text="Coming soon!"
				/>
				<InfoText
					title="Daily schedule"
					text="Coming soon!"
				/>
				<InfoText
					title="Tuition"
					text="Coming soon!"
				/>
				<InfoText
					title="Curriculum"
					text="Coming soon!"
				/>
				<InfoText
					title="Empowering Minds. Embracing Innovation"
					text="Next-gen montessori education. Improving education for the betterment of society, starting with our children."
				/>
				<InfoText
					title="Grow with Us: A Montessori Adventure."
					text="We recognize failure as times greatest teacher, and this is an adventure. We help children recognize failure as one of the most important ways to grow."
				/>
				<InfoText
					title="Montessori:"
					text="Education philosophy and practice that fosters rigorous, self-motivated growth for children and adolescents in all areas of their development, with a goal of nurturing each child's natural desire for knowledge, understanding, and respect."
				/>

			</div>
		</>
	)
}

const InfoText = ({ text, title }: { text: string; title: string }) => {
	return (
		<ContentContainer>
			<Typography variant="h2"
				sx={{
					paddingBottom: "10px",
					color: "white",
				}}>
				{title}
			</Typography>
			<Typography
				variant="body1"
				sx={{
					color: "white",
				}}
			>
				{text}
			</Typography>
		</ContentContainer>
	)
}


const MapInfo = ({ title }: { title: string }) => {
	const defaultProps = {
		center: {
			lat: 36.30678501949814,
			lng: -115.33099115396986
		},
		zoom: 11
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

const ContentContainer = ({ children, ...rest }: { children: JSX.Element | JSX.Element[] } & BoxProps) => {
	const theme = useTheme();
	return (
		<Box
			{...rest}
			sx={{
				backgroundColor: "#00000077",
				borderRadius: "10px",
				[theme.breakpoints.down('md')]: {
					padding: "10px",
					margin: "10px",
				},
				[theme.breakpoints.up('md')]: {
					padding: "20px",
					margin: "50px",
				},
				display: "flex",
				flexDirection: "column",
				...rest.sx,
			}}
			component={"div"}
		>
			{children}
		</Box>
	)
}