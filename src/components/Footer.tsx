import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

function Footer() {
  return (
    <Stack
      className="foot"
      sx={{
        justifyContent: "space-between",
        flexDirection: "row",
        bgcolor: "#4D494F",
        gap:"30px",
        position: "static",
        maxWidth: "100%",
        padding:"8px",
        paddingTop:"15px",
        paddingBottom:"15px"
      }}
    >
      <Stack sx={{ flexDirection: "row", gap: "5px", ml: "0px" }}>
        <Image src="/insta.png" alt="instagram" width={35} height={25} />
        <a href="/" style={{ textDecoration: "none", color: "#b1b1b1"  }}>
          <Typography sx={{mt: {xs:"5px",md:"2px"}, fontSize: { xs: "9px", md: "16px" } }}></Typography>
        </a>
      </Stack>
      <Stack sx={{ flexDirection: "row", gap: "10px", mr: "25px" }}>
        <a href="/" style={{ textDecoration: "none", color: "#b1b1b1" }}>
          <Typography sx={{ mt: {xs:"5px",md:"2px"}, fontSize: { xs: "9px", md: "16px" } }}>Developed By: Wardo</Typography>
        </a>
        {/* <Image src="/" alt="enigma" width={25} height={25} /> */}
      </Stack>
    </Stack>
  );
}

export default Footer;


