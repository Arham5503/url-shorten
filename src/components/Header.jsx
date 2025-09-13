import logo from "../assets/logo.svg";
function Header() {
  return (
    <>
      <header>
        <nav className="w-[90%] py-7 m-auto flex justify-between items-center">
          <div className="flex gap-8">
            <img src={logo} alt="" />
            <ul className="hidden md:flex gap-2.5 text-[#717171] font-medium items-center">
              <li className="hover:text-[#232127] cursor-pointer">Features</li>
              <li className="hover:text-[#232127] cursor-pointer">Pricing</li>
              <li className="hover:text-[#232127] cursor-pointer">Resources</li>
            </ul>
          </div>
          <div className="flex md:hidden flex-col gap-1 cursor-pointer">
            <span className="block bg-[#717171] w-8 h-1"></span>
            <span className="block bg-[#717171] w-8 h-1"></span>
            <span className="block bg-[#717171] w-8 h-1"></span>
          </div>
          <div className="hidden md:flex gap-5">
            <button className="text-[#717171] font-medium text-[18px] hover:text-[#232127] cursor-pointer">
              Login
            </button>
            <button className=" bg-[#2acfcf] font-medium text-white w-21 h-10 rounded-3xl cursor-pointer">
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
