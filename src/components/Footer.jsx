import logo from "../assets/logo.svg";
import fb from "../assets/icon-facebook.svg";
import insta from "../assets/icon-instagram.svg";
import pint from "../assets/icon-pinterest.svg";
import x from "../assets/icon-twitter.svg";
function Footer() {
  return (
    <>
      <footer className="bg-[#232127]">
        <div className="w-[90%] mx-auto py-5 flex justify-between ">
          <div>
            <img className="invert-100" src={logo} alt="" />
          </div>
          <div className="text-white flex gap-10">
            <div>
              <p className="font-medium">Features</p>
              <ul className="my-5 flex flex-col gap-2">
                <li className="cursor-pointer">Link Shortening</li>
                <li className="cursor-pointer">Branded Links </li>
                <li className="cursor-pointer">Analytics</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Resources</p>
              <ul className="my-5 flex flex-col gap-2">
                <li className="cursor-pointer">Blog </li>
                <li className="cursor-pointer">Developers </li>
                <li className="cursor-pointer">Support</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Company</p>
              <ul className="my-5 flex flex-col gap-2">
                <li className="cursor-pointer">About </li>
                <li className="cursor-pointer">Our Team </li>
                <li className="cursor-pointer">Careers </li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-5">
            <img className="w-7 h-7 cursor-pointer" src={fb} alt="" />
            <img className="w-7 h-7 cursor-pointer" src={insta} alt="" />
            <img className="w-7 h-7 cursor-pointer" src={pint} alt="" />
            <img className="w-7 h-7 cursor-pointer" src={x} alt="" />
          </div>
        </div>
        <div class="attribution text-white text-center">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Arham Ali</a>.
        </div>
      </footer>
    </>
  );
}
export default Footer;
