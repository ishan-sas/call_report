import React from "react";
import { Container,AppBar,Toolbar,Link, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import Logo from "../../../../images/sas-logo.png";

function Header() {
	return (
		<AppBar position={"static"} className="site-header">
			<Toolbar>
				<Container>
					<Link href="/"><img src={Logo} className="brand" /></Link>
					
					<Link href="/register" className="theme-btn signup-btn">Sign Up</Link>
					<Link href="/login" className="theme-btn login-btn">Login</Link>
					<nav className="main-menu-wrap">
						<List>
							<ListItem disablePadding>
								<ListItemButton component="a" href="#simple-list">
									<ListItemText primary="Topics" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton component="a" href="#simple-list">
									<ListItemText primary="Explore" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton component="a" href="#simple-list">
									<ListItemText primary="What's on" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton component="a" href="/about">
									<ListItemText primary="About us" />
								</ListItemButton>
							</ListItem>
						</List>
					</nav>
					
				</Container>
			</Toolbar>
		</AppBar>
	)
}

export default Header