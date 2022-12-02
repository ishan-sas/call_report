import React from "react";
import {Grid, Container, Typography, List, ListItem, Link } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {

	return (
		<Grid container className="site-footer">
			<Container>
				<Grid container>
					<Grid item sm={12} md={3}>
						<Typography variant="h4" className="footer-title">Our team</Typography>
						<nav aria-label="secondary mailbox folders">
							<List>
								<ListItem>
									<Link href="#">About Us</Link>
								</ListItem>
								<ListItem>
									<Link href="#">About FEO</Link>
								</ListItem>
								<ListItem>
									<Link href="#">Our Project</Link>
								</ListItem>
								<ListItem>
									<Link href="#">Our Members</Link>
								</ListItem>
							</List>
						</nav>
					</Grid>
					<Grid item sm={12} md={3}>
						<Typography variant="h4" className="footer-title">Explore</Typography>
						<nav aria-label="secondary mailbox folders">
							<List>
								<ListItem>
									<Link href="#">Projects & Organizations</Link>
								</ListItem>
								<ListItem>
									<Link href="#">Data</Link>
								</ListItem>
								<ListItem>
									<Link href="#">Resource Exchange</Link>
								</ListItem>
								<ListItem>
									<Link href="#">E-learning</Link>
								</ListItem>
							</List>
						</nav>
					</Grid>
					<Grid item sm={12} md={6}>
						<Typography variant="h4" className="footer-title">Subscribe to get latest updates</Typography>
					</Grid>
				</Grid>	
				<Grid container className="copyright-row">
					<Grid item sm={12} md={8}>
						<Typography variant="span" className="copyright">&copy; 2021-{new Date().getFullYear()} mihidora.lk All rights reserved</Typography>
						<nav aria-label="secondary mailbox folders">
							<List>
								<ListItem>
									<Link href="#">Sitemap</Link>
								</ListItem>
								<ListItem>
									<Link href="#">Contact us</Link>
								</ListItem>
								<ListItem>
									<Link href="#">Terms of services</Link>
								</ListItem>
								<ListItem>
									<Link href="#">Terms of services</Link>
								</ListItem>
							</List>
						</nav>
					</Grid>
					<Grid item sm={12} md={4}>
						<List className="social-link">
							<ListItem><a href="#" target="_blank"><FacebookIcon /></a></ListItem>
							<ListItem><a href="#" target="_blank"><TwitterIcon /></a></ListItem>
							<ListItem><a href="#" target="_blank"><LinkedInIcon /></a></ListItem>
						</List>
					</Grid>
				</Grid>	
			</Container>
		</Grid>
	)
}

export default Footer