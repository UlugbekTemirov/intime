import bgImg from "../../assets/img/bg.png";
import aa from "../../assets/img/aa.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SpecialOffer = () => {
  const [about, setAbout] = useState(false);

  const generateMore = () => {
    return (
      <>
        <h1 className="flex items-center">
          <a href="#contact">Mutlaqo bepul dars</a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
          <a href="#contact">asadbek ashurov</a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
          <a href="#contact">Intime </a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
        </h1>
        <h1 className="flex items-center">
          <a href="#contact">Mutlaqo bepul dars</a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
          <a href="#contact">asadbek ashurov</a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
          <a href="#contact">Intime </a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
        </h1>
        <h1 className="flex items-center">
          <a href="#contact">Mutlaqo bepul dars</a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
          <a href="#contact">asadbek ashurov</a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
          <a href="#contact">Intime </a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
        </h1>
        <h1 className="flex items-center">
          <a href="#contact">Mutlaqo bepul dars</a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
          <a href="#contact">asadbek ashurov</a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
          <a href="#contact">Intime </a>
          <span className="w-4 h-4 bg-yellow-400 inline-block mx-4 rounded"></span>
        </h1>
      </>
    );
  };

  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [username, setUsername] = useState(null);

  const [data, setData] = useState(null);
  const [warning, setWarning] = useState(null);

  const navigate = useNavigate();

  const submitHandler = () => {
    const data = {
      name,
      number,
      username,
    };
    if (!name || !number) setWarning("Ismingiz va raqamingizni kitiring");
    else {
      setWarning(null);
      setData(data);
      setName(null);
      setNumber(null);
      setUsername(null);
      navigate("/free-books");
    }
  };

  return (
    <div className="bg-[#131313]">
      <div className="container md:h-screen box-border relative z-20 flex flex-col border-b-4">
        <div className="w-full flex md:justify-end pt-4 md:absolute justify-center top-0 left-0 z-20">
          <a
            href="tel:+998936563672"
            className="border-2 px-8 py-4 flex rounded-xl items-center hover:bg-white duration-200 hover:text-black"
          >
            <i class="fa-solid fa-phone text-2xl mr-5"></i>
            <h2 className="text-2xl font-semibold">+998936563672</h2>
          </a>
        </div>
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full -z-10"
          src={bgImg}
          alt="bg"
        />
        <div className="md:grid md:grid-cols-2 flex flex-col h-full box-border">
          <div className="col-span-1 flex items-center">
            <div className="md:mt-0 mt-5">
              <h1 className="md:text-8xl text-7xl font-extrabold uppercase relative italic mb-28 md:text-left text-center md:block">
                Mutlaqo Bepul dars
                <span className="absolute md:-bottom-16 -bottom-24 w-3/4 border-4 -skew-x-[20deg] md:left-5 md:translate-x-0 left-1/2 -translate-x-1/2 md:text-5xl text-3xl not-italic text-yellow-300 bg-blue-600 -rotate-2 rounded-xl py-3 md:px-5">
                  Batafsil ma'lumot
                  <a href="#contact">
                    <i className="fa-solid fa-circle-info absolute text-4xl -top-4 -right-4"></i>
                  </a>
                </span>
              </h1>
              <p className="text-3xl font-bold px-5 md:pr-40 border-l-4 rounded-l-md border-yellow-400 leading-8">
                Kichik va o‘rta biznes egalari uchun sof foydani 300% gacha
                oshirishga qaratilgan 1,5 oylik mualliflik dastur
              </p>
              <div className="md:mt-16 mt-10 flex justify-center md:block">
                <a
                  href="#contact"
                  className="bg-orange-500 md:py-4 md:px-10 py-2 px-5 font-bold tracking-widest rounded-xl border-4 hover:bg-orange-400 duration-200 text-3xl md:text-4xl "
                >
                  Batafsil <i className="fa-solid fa-circle-info"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-1 relative">
            <img className="w-full h-full" src={aa} alt="asadbekashurov" />
            <span className="bg-black absolute bottom-1/4 left-[7%] md:left-1/4 px-4 py-1 font-extrabold rounded-md border-4 inline-block md:text-3xl text-2xl tracking-widest -rotate-6">
              Asadbek Ashurov
              <i
                onMouseOver={() => setAbout(true)}
                onMouseOut={() => setAbout(false)}
                class="fa-solid fa-circle-info text-orange-400 bg-black rounded-full absolute -top-5 -right-5 text-4xl cursor-pointer"
              ></i>
              <div
                onMouseOver={() => setAbout(true)}
                onMouseOut={() => setAbout(false)}
                className={`absolute md:bg-orange-500/[0.7] bg-orange-500/[0.9] rotate-6 bottom-20 md:duration-200 transition-width overflow-hidden left-0 ${
                  about
                    ? "md:w-[380px] md:h-[320px] w-full px-4 py-2 border-4 rounded-xl"
                    : "w-0 h-0 "
                }`}
              >
                <p className="text-2xl italic">
                  Asadbek Ashurov 18 yillik bankdagi tajribasidan kelib chiqgan
                  holda hozirgi daromadingizni qanday qilib 5 barobarga
                  o'stirish haqidagi bepul darsini o'z saytiga joyladi
                </p>
              </div>
            </span>
          </div>
        </div>
        <div className="md:inline-block hidden">
          <div className="absolute bottom-10 left-0 w-full overflow-hidden -rotate-3 z-20">
            <div class="m-scroll">
              <div class="m-scroll__title">
                <div className="uppercase">{generateMore()}</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-0 w-full overflow-hidden rotate-2 z-10">
            <div class="m-scroll">
              <div class="m-scroll__title">
                <div className="uppercase opacity-40">{generateMore()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="container pb-10">
        <div className="md:grid md:grid-cols-2 flex flex-col pt-10">
          <div className="col-span-1 px-5">
            <h1 className="md:text-6xl text-3xl font-extrabold text-orange-500 mb-5">
              Ushbu bepul dars orqali:
            </h1>
            <p className="md:text-3xl text-xl my-3 font-semibold italic">
              <i class="fa-solid fa-square-check mr-2 text-green-500"></i>Pul
              yetishmovchiligi sabablaridan qutulish va vaqtni to‘g‘ri
              taqsimlash;
            </p>
            <p className="md:text-3xl text-xl my-3 font-semibold italic">
              <i class="fa-solid fa-square-check mr-2 text-green-500"></i>Kredit
              olib ish boshlashning foydali va zararli tomonlari;
            </p>
            <p className="md:text-3xl text-xl my-3 font-semibold italic">
              <i class="fa-solid fa-square-check mr-2 text-green-500"></i>
              Muammolar kattalashmasidan o’z holatida hal qilish;
            </p>
            <p className="md:text-3xl text-xl my-3 font-semibold italic">
              <i class="fa-solid fa-square-check mr-2 text-green-500"></i>
              Biznesni 0 dan boshlash va sherikchilikda olib borish haqida bilib
              olasiz;
            </p>
          </div>
          <div className="col-span-1 md:px-10 md:mt-0 mt-5">
            <form className="rounded-xl py-4 px-4">
              <p className="text-center text-red-500 text-2xl mb-2">
                {warning}
              </p>
              <div className="border-4 rounded-xl p-4 flex flex-col">
                <label className="text-2xl mb-2 font-bold">Ismizgiz</label>
                <input
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl py-2 px-4 text-xl md:w-3/4 bg-gray-50/[0.1] border-2 border-white/[0.8]"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                />
              </div>
              <div className="border-4 rounded-xl p-4 flex flex-col mt-4">
                <label className="text-2xl mb-2 font-bold">
                  Telefon raqamingiz
                </label>
                <input
                  required
                  onChange={(e) => setNumber(e.target.value)}
                  className="rounded-xl py-2 px-4 text-xl md:w-3/4 bg-gray-50/[0.1] border-2 border-white/[0.8]"
                  type="tel"
                  min={0}
                  placeholder="+998"
                  value={number}
                />
              </div>
              <div className="border-4 rounded-xl p-4 flex flex-col mt-4">
                <label className="text-2xl mb-2 font-bold">
                  Telegram username
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="rounded-xl py-2 px-4 text-xl md:w-3/4 bg-gray-50/[0.1] border-2 border-white/[0.8]"
                  type="text"
                  min={0}
                  placeholder="@milioner_ashurov"
                  value={username}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex justify-center mt-5">
          <button
            onClick={submitHandler}
            className="upppercase border-4 border-white bg-green-600 font-bold py-2 px-4 rounded-lg text-2xl md:text-4xl hover:bg-green-500 duration-200 hover:border-green-500"
          >
            Bepul darsni olish
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
