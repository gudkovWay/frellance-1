import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" id="#main">
      <Image
        src="/background.jpg"
        alt="background"
        width={1920}
        height={600}
        quality={100}
        className="w-full h-full absolute object-cover z-[-1]"
      />
      <div className="container">
        <div className="w-full flex flex-col gap-4 lg:flex-row justify-between relative">
          <div className="flex flex-col gap-2 lg:gap-4 bg-zinc-800 rounded-xl border border-zinc-900  p-6 shadow shadow-zinc-900 shadow-md bg-opacity-50 backdrop-blur-md">
            <h1 className="text-5xl font-bold text-zinc-200">Kraken Market</h1>
            <p className="text-lg font-bold max-w-full lg:max-w-96 text-zinc-200/80">
              KRAKEN - это один из крупнейших и наиболее популярных
              даркнет-маркетплейсов. Этот рынок позволяет пользователям анонимно
              покупать и продавать различные товары и услуги.
            </p>
            <Link
              href={process.env.ONION_URL || ""}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 border border-zinc-500 rounded-3xl text-zinc-100 hover:bg-zinc-800 hover:text-white transition-colors duration-300 ease-out flex items-center justify-center gap-2 max-w-max"
            >
              Перейти на маркетплейс
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
