import LanguageIcon from "@mui/icons-material/Language";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { FooterContainer, FooterTypography } from "../../styles/footer";

function Footer() {
  return (
    <FooterContainer>
      <LanguageIcon />
      <FooterTypography>Arval.com</FooterTypography>
      <ArrowRightAltIcon />
    </FooterContainer>
  );
}

export default Footer;
