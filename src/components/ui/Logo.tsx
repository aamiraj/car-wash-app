import LogoImg from "../../assets/logo_white.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={LogoImg} alt="logo" className="w-6 h-6 lg:w-12 lg:h-12" />
      <p className="merriweather text-lg lg:text-5xl font-bold text-[#008DDA]">CAR WASH</p>
    </div>
  );
};

export default Logo;
