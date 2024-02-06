// pages/about.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Box, Stack, Typography ,ThemeProvider,useTheme,createTheme} from "@mui/material";

const theme1=createTheme({
  typography:{
    body1:{
      fontFamily: "monospace",
      fontWeight: "bold",
    },
    h5:{
      fontFamily: "monospace",
      fontWeight: "bold",
      fontSize:"2rem",
    }
  }
})

const About0: React.FC = () => {
  const [dm1, setDm1] = useState<number>(600);
  const [dm2, setDm2] = useState<number>(100);
  const [dm3, setDm3] = useState<number>(100);
  const [o1, setO1] = useState<boolean>(true);
  const [o2, setO2] = useState<boolean>(false);
  const [o3, setO3] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(90);

  const handleC = (newDm1: number, newDm2: number, newDm3: number) => {
    setDm1(newDm1);
    setDm2(newDm2);
    setDm3(newDm3);
    if (newDm1 === 600) {
      setO1(true);
      setO2(false);
      setO3(false);
    } else if (newDm2 === 600) {
      setO1(false);
      setO2(true);
      setO3(false);
    } else {
      setO1(false);
      setO2(false);
      setO3(true);
    }
  };

  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme1}>
    <Box display="flex" alignItems="center" justifyContent="center" sx={{mt:"50px"}}>
      <Stack
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={isMobile ? "column" : "row"}
        width="90%" 
        gap={isMobile ? "10px" : 2} 
      >
        <Stack
          className="container1"
          onClick={() => handleC(600, 100, 100)}
          style={{
            width: isMobile ? "90%" : `${dm1}px`, 
            height: isMobile ? "auto" : "600px", 
            transition: "width 0.6s ease, height 0.6s ease",
          
            backgroundColor: "orange",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          {o1 ? (
            <Typography variant="h5" width="100%" sx={{fontWeight:"bold"}}>ABOUT US
              <Typography variant="body1" width="100%">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet debitis cum cupiditate recusandae quidem eaque obcaecati, numquam, excepturi esse expedita nemo vero laudantium, praesentium consequuntur voluptatibus qui eius rerum fugiat ipsa quasi ullam. Deserunt quasi illo nemo delectus iure fuga, excepturi, amet porro voluptates sed neque suscipit, qui rem. Praesentium impedit vitae ea, quis blanditiis aliquid nesciunt laudantium! Amet, natus? Fugit numquam non animi reiciendis voluptatem, reprehenderit libero consequuntur obcaecati, odio sit repellendus exercitationem vitae adipisci assumenda sint quae deserunt! Commodi molestiae, omnis modi corrupti repellat est nulla possimus officiis voluptatibus, quos adipisci eius maxime quis pariatur voluptatem aspernatur quidem!</Typography>
            </Typography>
          ) : (
            <Typography
              variant="h5"
              style={{
                transform: `rotate(${isMobile ? 0 : 270}deg)`,
                textAlign: "center",
              }}
            >
              Lorem
            </Typography>
          )}
        </Stack>

        <Stack
          className="container2"
          onClick={() => handleC(100, 600, 100)}
          style={{
            width: isMobile ? "90%" : `${dm2}px`,
            height: isMobile ? "auto" : "600px", 
            transition: "width 0.6s ease, height 0.6s ease",
            backgroundColor: "gray",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          {o2 ? (
            <Typography variant="h5" width="100%" sx={{fontWeight:"bold"}}>ILLUMINA
              <Typography variant="body1" width="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet ullam cupiditate eaque, dolore eveniet aut blanditiis porro architecto aliquam omnis inventore quaerat tenetur incidunt assumenda fugiat labore. Neque ipsum veniam consequuntur minus officia laudantium nobis ut ad, pariatur iste tempora, culpa sed officiis eveniet earum! Quae veniam ea nisi? Excepturi delectus quaerat officia numquam nam id sed assumenda quas in harum blanditiis reiciendis fuga voluptatem, fugiat, ducimus a. Alias at culpa molestiae, quibusdam cumque animi placeat, sequi ex nesciunt rerum neque? Nemo minima, beatae minus eius officiis voluptatibus suscipit facere delectus ab labore odit eum eligendi doloremque veniam vel?</Typography>
            </Typography>
          ) : (
            <Typography
              variant="h5"
              style={{
                transform: `rotate(${isMobile ? 0 : 270}deg)`,
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Lorem.
            </Typography>
          )}
        </Stack>

        <Stack
          className="container3"
          onClick={() => handleC(100, 100, 600)}
          style={{
            width: isMobile ? "90%" : `${dm3}px`, 
            height: isMobile ? "auto" : "600px", 
            transition: "width 0.6s ease, height 0.6s ease",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          {o3 ? (
            <Typography variant="h5" width="100%" sx={{fontWeight:"bold"}}> Lorem.
              <Typography variant="body1" width="100%">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eveniet consequatur, quo impedit fuga voluptas doloremque quod praesentium labore ipsa, dicta tempore autem officiis. Delectus reprehenderit iure doloremque modi facere accusamus alias tenetur. Nesciunt, nobis vero dolorem ratione, placeat voluptate consequatur recusandae asperiores veniam neque saepe? Sapiente temporibus incidunt necessitatibus molestiae libero suscipit facere fugiat! Distinctio quos mollitia, ipsum asperiores voluptate esse? Eos laudantium eum delectus. Autem ipsum quos eius dolores similique rem sunt consectetur inventore laudantium vel. Exercitationem ducimus ullam consequuntur voluptatem in accusantium similique, possimus minima pariatur eveniet tempora quis neque, laudantium qui. Consectetur quisquam dolore itaque culpa!</Typography>
            </Typography>
          ) : (
            <Typography
              variant="h5"
              style={{
                transform: `rotate(${isMobile ? 0 : 270}deg)`,
                display: "inline-block",
                textAlign: "center",
              }}
            >
             Lorem.
            </Typography>
          )}
        </Stack>
      </Stack>
    </Box>
    </ThemeProvider>
  );
};

export default About0;
