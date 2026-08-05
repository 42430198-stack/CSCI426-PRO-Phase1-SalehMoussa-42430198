import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import '../Style/footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="social-icons">
                <IconButton sx={{padding:0}} onClick={() => window.open("https://www.instagram.com", "_blank")}>
                    <InstagramIcon />
                </IconButton>
                <IconButton onClick={() => window.open("https://www.facebook.com", "_blank")}>
                    <FacebookIcon />
                </IconButton>
                <IconButton onClick={() => window.open("https://twitter.com", "_blank")}>
                    <TwitterIcon />
                </IconButton>
                <IconButton onClick={() => window.open("https://www.linkedin.com", "_blank")}>
                    <LinkedInIcon />
                </IconButton>
            </div>
            <p>© 2023 My App. All rights reserved.</p>
        </div>
    );
}