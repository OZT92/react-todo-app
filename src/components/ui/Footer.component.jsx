import React from "react";
import {
  LinkedIn,
  GitHub,
  Facebook,
  Twitter,
  YouTube,
} from "@mui/icons-material";

import "./footer.css";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <footer className="footer custom-text-white d-flex-center-center">
      <div className="text-center">
        {/* <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <LinkedIn />
          <GitHub />
          <Facebook />
          <Twitter />
          <YouTube />
        </Box>
        <h6 style={{ fontWeight: "100" }}>All Rights Reserved. OZT92</h6>
      </div>
    </footer>
  );
};

export default Footer;
