import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export const DRAWER_WIDTH = 240;

interface DrawerContentProps {
	open: boolean;
	handleDrawerClose: () => void;
}

export const DrawerContent = ({ open, handleDrawerClose }: DrawerContentProps) => {
	const theme = useTheme();
	const navigate = useNavigate();
	return (
		<Drawer
			sx={{
				width: DRAWER_WIDTH,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: DRAWER_WIDTH,
					boxSizing: 'border-box',
				},
			}}
			anchor="left"
			open={open}
		>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>
				{NAVBAR_ITEMS.map(({ text, link, Icon }) => (
					<ListItem key={text} disablePadding>
						<ListItemButton
							onClick={() => {
								navigate(link);
							}}
						>
							<ListItemIcon>
								<Icon />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	)
}

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

interface NavbarItem {
	text: string;
	link: string;
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
		muiName: string;
	}
}

const NAVBAR_ITEMS: NavbarItem[] = [
	{
		text: "Home",
		link: "school",
		Icon: HomeIcon,
	},
	{
		text: "Location",
		link: "location",
		Icon: LocationOnIcon
	},
]