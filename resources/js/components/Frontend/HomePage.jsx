import React from "react";
import {Grid, Box, Container, Typography, Link, Button } from "@mui/material";
import BaseLayout from "./BaseLayout";
import ProjIMG from "../../../images/project.jpg";
import HeroBanner from "../../../images/heroBanner.jpg";

const styles = {
	TopProject: {
		backgroundImage: `url(${"../../../images/project.jpg"})`
	}
};

function HomePage() {
	return (
		<BaseLayout title={"Home page"}>	

			<Grid container>
				<Container>
					<img src={HeroBanner} />
				</Container>
			</Grid>

			<Grid container className="main-directions">
				<Container>
					<Grid container>
						<Grid item sm={12} md={7} className="section-head" mb={5}>
							<Typography variant="h3" className="section-title"><Typography variant="span">Explore</Typography>
							What is Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography> 
						</Grid>

						<Grid item sm={12} md={7}>
							<Box variant="div" className="card main-card">
								<Link href="#">
									<Typography variant="i" className="icon"></Typography>
									<Typography variant="h5" className="card-name">Data</Typography>
									<Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias fugiat ipsa consectetur adipisicing elit debitis.</Typography>
								</Link>
							</Box>
						</Grid>
						<Grid item sm={12} md={5}>
							<Box variant="div" className="card">
								<Link href="#">
									<Typography variant="i" className="icon"></Typography>
									<Typography variant="h5" className="card-name">Data</Typography>
									<Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias fugiat ipsa consectetur adipisicing elit debitis.</Typography>
								</Link>
							</Box>
							<Box variant="div" className="card">
								<Link href="#">
									<Typography variant="i" className="icon"></Typography>
									<Typography variant="h5" className="card-name">Data</Typography>
									<Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias fugiat consectetur adipisicing elit ipsa debitis.</Typography>
								</Link>
							</Box>
							<Box variant="div" className="card">
								<Link href="#">
									<Typography variant="i" className="icon"></Typography>
									<Typography variant="h5" className="card-name">Data</Typography>
									<Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias fugiat consectetur adipisicing elit ipsa debitis.</Typography>
								</Link>
							</Box>
						</Grid>
					</Grid>	
				</Container>
			</Grid>

			<Grid container className="featured-project">
				<Container>
					<Grid container>
						<Grid item sm={12} md={7} className="section-head" mb={5}>
							<Typography variant="h3" className="section-title"><Typography variant="span">What's On</Typography>
							What is Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography> 
						</Grid>

						<Grid item sm={12} md={7}>
							<Box variant="div" className="project-card main-card">
								<Link href="#">
									<Box variant="div" className="card-image" style={styles.TopProject}></Box>
									<Typography variant="h5" className="proj-name">What is Lorem ipsum dolor ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.</Typography>
									</Link>
							</Box>
						</Grid>
						<Grid item sm={12} md={5}>
							<Box variant="div" className="project-card">
								<Link href="#">
									<Box variant="div" className="card-image"><img src={ProjIMG} /></Box>
									<Box variant="div" className="card-text">
										<Typography variant="h5" className="proj-name">Don’t destroy greenery and don’t spoil scenery.</Typography>
										<Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias fugiat ipsa consectetur debitis.</Typography>
									</Box>
								</Link>
							</Box>
							<Box variant="div" className="project-card">
								<Link href="#">
									<Box variant="div" className="card-image"><img src={ProjIMG} /></Box>
									<Box variant="div" className="card-text">
										<Typography variant="h5" className="proj-name">Don’t destroy greenery and don’t spoil scenery.</Typography>
										<Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias fugiat ipsa consectetu debitis.</Typography>
									</Box>
								</Link>
							</Box>
							<Link href="#" className="theme-btn">See More</Link>
						</Grid>
					</Grid>	
				</Container>
			</Grid>

		</BaseLayout>
	)
}

export default HomePage