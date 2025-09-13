import heroImg from "../assets/illustration-working.svg";
import brand from "../assets/icon-brand-recognition.svg";
import detail from "../assets/icon-detailed-records.svg";
import fully from "../assets/icon-fully-customizable.svg";
import { useState } from "react";
import hook from "../Hook/hook";

function HeroSection() {
  const [link, setLink] = useState("");
  const [arr, setArr] = useState([]);
  const [copiedId, setCopiedId] = useState(null);
  const getLink = async () => {
    const result = await hook(link);
    let linksObj = {
      id: Date.now(),
      urlIn: link,
      shortLink: result.result_url,
    };
    setArr((prev) => [linksObj, ...prev]);
    setLink("");
  };
  function copyHandler(id, text) {
    window.navigator.clipboard.writeText(text);
    setCopiedId(id);
  }

  setTimeout(() => setCopiedId(null), 4000);

  return (
    <>
      <main>
        {/* Hero Section Start's Here */}
        <section>
          <div className="block md:flex flex-row-reverse py-10 md:h-[90vh]">
            <div className="grow-1 py-10 sm:p-8 overflow-hidden">
              <img className="sm:object-fit" src={heroImg} alt="" />
            </div>
            <div className="text-center md:text-left flex flex-col grow-1  gap-7 py-11 pl-15 md:items-start items-center ">
              <h1 className="text-7xl font-bold text-[#232127]">
                More than just shorter links
              </h1>
              <p className="text-[18px] text-[#717171] font-medium ">
                Build your hand's recognition and get detailed insights on how
                your link are performing.
              </p>
              <button
                className=" bg-[#2acfcf] font-medium text-white w-27
             h-10 rounded-3xl cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
          {/* Short Link */}
          <div
            className=" bg-[#3b3054] relative z-10 top-15 flex flex-col md:flex-row items-center justify-center 
          bg-[url('./assets/bg-shorten-desktop.svg')] w-[80%] mx-auto p-5 h-35 rounded-sm gap-5"
          >
            <input
              className="bg-white px-2.5 py-1.5 w-[90%] m-auto md:m-0 md:w-96"
              placeholder="Shorten a link here..."
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <button
              className=" bg-[#2acfcf] font-medium text-white
             w-[90%] m-auto md:w-24 md:m-0 h-10 rounded-sm cursor-pointer"
              onClick={getLink}
            >
              Shorten It!
            </button>
          </div>
        </section>

        {/* Second Section Start's Here */}
        <section className=" bg-[#bfbfbf] relative p-5 overflow-hidden">
          {/* ✅ Display generated links */}
          {arr.map((dt) => (
            <div
              key={dt.id}
              className="bg-white my-2 relative z-10 top-15 flex flex-col md:flex-row items-center justify-between 
           w-[80%] mx-auto p-5 rounded-sm gap-5"
            >
              <div>{dt.urlIn}</div>
              <div className="text-blue-500 flex gap-5 items-center">
                <p>{dt.shortLink}</p>
                <button
                  className=" bg-[#2acfcf] font-medium text-white
             w-[90%] m-auto md:w-24 md:m-0 h-10 rounded-sm cursor-pointer"
                  onClick={() => copyHandler(dt.id, dt.shortLink)}
                >
                  {copiedId == dt.id ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
          <div className="text-center mt-20">
            <h1 className="text-2xl font-bold text-[#232127]">
              Advanced Statistics
            </h1>
            <p className="text-[18px] text-[#646269] font-medium ">
              Track how your links are performing acress the web with our
              advanced statistics dashboard.
            </p>
          </div>
          {/* Crds Parent */}
          <div className="my-10 p-5 flex flex-col md:flex-row items-center justify-evenly gap-6 relative">
            {/* Card 1 */}
            <div className="bg-white z-10 relative p-6 rounded-sm shadow-md w-80 h-60">
              {/* Icon Circle */}
              <div
                className="bg-[#232127] w-14 h-14 flex items-center justify-center
               rounded-full absolute -top-8 left-10 transform -translate-x-1/2"
              >
                <img src={brand} alt="brand" className="w-7 h-7" />
              </div>
              <h1 className="mt-10 text-lg font-bold text-center">
                Brand Recognition
              </h1>
              <p className="text-gray-500 text-sm text-center mt-3">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white z-10 relative p-6 rounded-sm shadow-md w-80 h-60 md:mt-12">
              {/* Icon Circle */}
              <div
                className="bg-[#232127] w-14 h-14 flex items-center justify-center rounded-full
               absolute -top-7 left-10 transform -translate-x-1/2"
              >
                <img src={detail} alt="details" className="w-7 h-7" />
              </div>
              <h1 className="mt-10 text-lg font-bold text-center">
                Detailed Records
              </h1>
              <p className="text-gray-500 text-sm text-center mt-3">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white z-10 relative p-6 rounded-sm shadow-md w-80 h-60 md:mt-24">
              {/* Icon Circle */}
              <div
                className="bg-[#232127] w-14 h-14 flex items-center justify-center
               rounded-full absolute -top-7 left-10 transform -translate-x-1/2"
              >
                <img src={fully} alt="fully customizable" className="w-7 h-7" />
              </div>
              <h1 className="mt-10 text-lg font-bold text-center">
                Fully Customizable
              </h1>
              <p className="text-gray-500 text-sm text-center mt-3">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
            {/* Background Line */}
            <div className="absolute z-0 md:left-95 md:top-3/5 md:w-[50%] md:h-1 top-90 left-1/2 w-1 h-3/6  m-auto  bg-[#2acfcf] overflow-hidden"></div>
          </div>
        </section>
        <section>
          <div
            className="bg-[#3b3054] flex flex-col gap-5 items-center justify-center
           bg-[url('./assets/bg-boost-desktop.svg')] h-30 bg-center "
          >
            <h1 className="text-white text-3xl font-medium">
              Boost your links today
            </h1>
            <button
              className=" bg-[#2acfcf]  font-medium text-white w-27
             h-10 rounded-3xl cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
export default HeroSection;
