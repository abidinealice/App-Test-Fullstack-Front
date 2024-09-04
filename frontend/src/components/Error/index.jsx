import { Link } from "react-router-dom";
import error from "../../images/404.gif";
import { ErrorContainer, ErrorTypography } from "../../styles/error";

function Error() {
  return (
    <ErrorContainer>
      <img src={error} alt="Erreur 404" />
      <Link to="/" style={{ textDecoration: "none" }}>
        <ErrorTypography>Retour</ErrorTypography>
      </Link>
    </ErrorContainer>
  );
}

export default Error;
