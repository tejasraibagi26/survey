import { useParams } from "react-router-dom";
import Auth from "../Components/Auth";

const AuthPage = () => {
  const params = useParams();

  return <Auth authType={params.authType} />;
};

export default AuthPage;
