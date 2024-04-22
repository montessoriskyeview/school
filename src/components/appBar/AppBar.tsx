import { Box, Link, styled, useTheme } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from "../shared/Typography";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { DrawerContent } from "./DrawerContent";
import { SUMMER_CAMP_LINK } from "../../resources/links";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

export const StyledAppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

export const AppBar = () => {
	const theme = useTheme();
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleDrawerOpen = () => {
		setDrawerOpen(true);
	};

	const handleDrawerClose = () => {
		setDrawerOpen(false);
	};

	return (
		<StyledAppBar
			open={drawerOpen}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					sx={{ mr: 2, ...(drawerOpen && { display: 'none' }) }}
				>
					<MenuIcon />
				</IconButton>
				<Box
					component={"div"}
					sx={{
						display: "flex",
						[theme.breakpoints.up("md")]: {
							width: "500px",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-around",
						},
						[theme.breakpoints.down("md")]: {
							width: "300px",
							flexDirection: "column",
							alignItems: "start",
							justifyContent: "center",
						},
					}}
				>
					<Typography variant="h6" noWrap component="div">
						Montessori Northwest
					</Typography>
					<Link
						variant="body1"
						sx={{
							cursor: "pointer",
							color: "#04325f",
							textDecoration: "underline",
						}}
						rel="noopener noreferrer"
						target="_blank"
						href={SUMMER_CAMP_LINK}
					>
						Summer camp - Register today
					</Link>
				</Box>
				<DrawerContent
					open={drawerOpen}
					handleDrawerClose={handleDrawerClose}
				/>
			</Toolbar>
		</StyledAppBar>
	)
}