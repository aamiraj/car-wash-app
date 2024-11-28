import LogoImg from "../../assets/logo_white.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={LogoImg} alt="logo" className="w-6 h-6 lg:w-8 lg:h-8" />
      <p className="merriweather text-lg lg:text-2xl font-bold text-[#008DDA]">CAR WASH</p>
    </div>
  );
};

export default Logo;
