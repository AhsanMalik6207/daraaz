import React from "react";
import { Container } from "@mui/system";
import { Grid, ListItemText, ListItemButton, Button, Box,TextField } from "@mui/material";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import logo from './images/daraz.png';
import download from './images/download.png'
import { grey } from "@mui/material/colors";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div>
      <AppBar sx={{ backgroundColor: "transparent" }} component="nav">
        <Toolbar>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
            className="mobileLogo"
          >
            <Box m={{ xs: 1, sm: 1, md: 0 }}>
              <img src={logo} width={60} height={60} alt="" />
            </Box>
            <TextField id="outlined-basic" variant="outlined" placeholder="search in daraz" sx={{width: 100, marginTop:"1rem", backgroundColor:grey}}  />
            <Box sx={{backgroundColor:"#F57208", width:"1rem", height:"3.2rem", marginTop:"1.3rem", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <SearchIcon  />
                </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Container
            className="navbarDesktop"
            sx={{ p: 1, pl: 3, position:"absolute", marginLeft:"2rem" }}
            maxWidth="lg"
          >
            <Grid alignItems="center" container spacing={3} >
              <Grid item md={2} >
                <img src={logo} width={200} height={60} alt="" />
              </Grid>
              <Grid
                container
                wrap="nowrap"
                direction="row"
                item
                sx={{
                  fontFamily: "Sansation",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#FFFFFF",
                
                }}
                xs={6}
              >
                <TextField id="outlined-basic" variant="outlined" placeholder="search in daraz" sx={{width: 900,marginLeft:"4rem"}}  />
                <Box sx={{backgroundColor:"#F57208", width:"7rem", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <SearchIcon  />
                </Box>
                
              </Grid>
              <Grid item xs={2} sx={{color:"#000000",width:"2rem", }}>
              <ShoppingCartSharpIcon />
              </Grid>
              <Grid item md={2}>
                <img src={download} width={300} height={60} alt="" />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{paddingBottom:"7rem"}}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "50%",
              backgroundColor: "#1D1D1D",
            },
          }}
        >
          <Container sx={{ p: 1, pl: { xs: 3, sm: 10 } }} maxWidth="lg">
            <Grid alignItems="center">
              <Grid
                alignItems={"center"}
                item
                xs={2}
                sx={{ mt: 10, color: "white" }}
              >

<ListItemButton component="a" href="#simple-list">
 <TextField id="outlined-basic" variant="outlined" sx={{width: 400, background:"#ffffff"}}  />
  <SearchIcon  />
</ListItemButton>
                <Button
                  sx={{
                    background:
                      "linear-gradient(95.79deg, #FF8B36 5.78%, #8F01FF 57.64%, #01E1FF 104.67%)",
                    fontFamily: "Sansation",
                    fontWeight: 600,
                    fontSize: "12px",
                    color: "#FFFFFF",
                    textTransform: "none",
                    width: 129,
                    height: 38,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent",
                      width: 3,
                      height: 58,
                      transform: "rotate(50deg)",
                      ml: -2,
                      mt: -3,
                    }}
                  ></Box>
                  <Box sx={{ ml: 2 }}><img src={download} width={150} height={60} alt="" />
 </Box>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Drawer>
      </Box>
    </div>
  );
};

export default Navbar;
