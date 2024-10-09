import styled from "@emotion/styled"
import kaique from "../../../../assets/imagens/kaique.png"
import { Button, Container, Grid, Typography, Theme } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


const Hero = () => {

    const StyledHero = styled("div")(({}) => ({
        backgroundColor: ,
        height: "100vh",


    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <StyledImg src={kaique} />
                    </Grid>
                    <Grid xs={12} md={8}>
                        <Typography color="primary" variant="h1" textAlign={"center"}>Kaique Demetrio</Typography>
                        <Typography color="primary" variant="h2" textAlign={"center"}>I'm Software Engineer</Typography>
                        <Grid container display={"flex"} justifyContent={"center"}>
                              <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                <Button>
                                <DownloadIcon/>
                                Dowload CV</Button>
                              </Grid>  
                              <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                <Button>
                                <EmailIcon/>
                                Contact me</Button>
                              </Grid> 
                        </Grid>
                    </Grid>
                </Grid>
                </Container>
            </StyledHero>

        </>
    )
}

export default Hero
