import React from "react";
import {Container, Grid, Typography, Box, Link} from "@mui/material";
import BaseLayout from "./BaseLayout";
import PageBanner from "./components/PageBanner";

import bannerImage from "../../../images/aboutBanner.jpg";
import aboutFEO_img from "../../../images/about_img_1.jpg";
import ProjIMG from "../../../images/project.jpg";

const styles = {
	TopProject: {
		backgroundImage: `url(${"../../../images/project.jpg"})`
	}
};

function AboutPage() {
    return (
        <BaseLayout title={"About page"}>	

            <PageBanner image={bannerImage} />

            <Grid container className="about-intro">
				<Container>
					<Grid container>
						<Grid item sm={12} md={7} className="section-head" mb={5}>
							<Typography variant="h3" className="section-title"><Typography variant="span">About Us</Typography>
							X is a platform that brings together lorem future that's just, prosperous, lorem ipsum vergos lavatne sombre</Typography> 
						</Grid>
                        <Grid item sm={12} md={8} className="main-content" mb={5}>
                            <Typography variant="body1">We're an international movement of ordinary people working to end the age of fossil fuels 
                            and build a world of community-led renewable energy for all Here's how we get there:
                            </Typography>
                        </Grid>    
					</Grid>	
				</Container>
			</Grid>

            <Grid className="statics-section">
				<Container>
					<Grid container>
						<Grid item sm={12} md={7} className="text-wrap">
                            <Typography variant="h2" className="top-text">What is Lorem ipsum dolor sit amet, consectetur</Typography> 
                            <Typography variant="body1">We're an international movement of ordinary people working to end the age of fossil fuels 
                            and build a world of community-led renewable energy for all Here's how we get there:
                            </Typography>
                            <ul>
                                <li><i style={{backgroundColor: '#bef4c0'}}></i>40% planting trees</li>
                                <li><i style={{backgroundColor: '#ac94f1'}}></i>35% cleanliness program</li>
                                <li><i style={{backgroundColor: '#fff0ca'}}></i>10% helping people</li>
                                <li><i style={{backgroundColor: '#f9cf64'}}></i>10% animal safety</li>
                                <li><i style={{backgroundColor: '#f48fbf'}}></i>5% feeding the poor</li>
                            </ul>
						</Grid>
                        <Grid item sm={12} md={5} className="graph">
                            
                        </Grid>    
					</Grid>	
				</Container>
			</Grid>

            <Grid className="about_feo-section">
				<Container>
					<Grid container>
						<Grid item sm={12} md={6} className="text-wrap">
                            <Grid variant="div">    
                                <Typography variant="h2" className="title-text">About FEO</Typography> 
                                <Typography variant="body1">A group of conservationists decided to try and change this, and set up FEO to try and act as a conduit for unifying environmental and 
                                conservation organizations for a sustainable and environmentally conscious Sri Lanka</Typography>
                                <Typography variant="body1">It for unifying environmental and conservation organizations for a sustainable and environmentally conscious Sri Lanka it for unifying 
                                environmental and conservation organizations for a sustainable and environmentally conscious Sri Lanka.</Typography>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={6} className="banner-image">
                            <img src={aboutFEO_img} />
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

export default AboutPage