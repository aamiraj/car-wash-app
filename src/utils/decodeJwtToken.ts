import { jwtDecode, JwtPayload } from "jwt-decode";

interface AppJwtPayload extends JwtPayload {
  email: string;
  role: string;
}

const decodeJwtToken = (token: string) => {
  const decoded = jwtDecode<AppJwtPayload>(token);

  return {
    email: decoded.email,
    role: decoded.role,
    iat: decoded.iat,
    exp: decoded.exp,
  };
};

export default decodeJwtToken;
