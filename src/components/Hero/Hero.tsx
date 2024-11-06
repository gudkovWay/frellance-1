import Link from "next/link";
import { BsShopWindow } from "react-icons/bs";
import { FaGrinStars } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiLinkSimpleLight } from "react-icons/pi";
import { SiAdguard } from "react-icons/si";

const details = [
  {
    id: 1,
    text: "Стабильный маркетплейс с идеальной репутацией и выдержкой лет",
    icon: <SiAdguard className="w-full h-full" />,
  },
  {
    id: 2,
    text: "Стабильные ссылки и зеркала 24/7 365 дней в году",
    icon: <PiLinkSimpleLight className="w-full h-full" />,
  },
  {
    id: 3,
    text: "Лучшие магазины работающие больше 10 лет по всей России",
    icon: <BsShopWindow className="w-full h-full" />,
  },
  {
    id: 4,
    text: "Лучшие условия на рынке в мире для клиентов и партнеров",
    icon: <FaGrinStars className="w-full h-full" />,
  },
];

export const Hero = () => {
  return (
    <div className="mt-16 flex items-center justify-center" id="#main">
      <div className="container">
        <div className="w-full flex flex-col gap-4 lg:flex-row justify-between">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1 className="text-5xl font-bold text-zinc-200">Kraken Shop</h1>
            <p className="text-lg font-bold max-w-full lg:max-w-96 text-zinc-200/80">
              Kraken - Единственная площадка с встроенным форумом, как это было
              на Гидре. Наш мониторинг создан для помощи со входом на Kraken
              darknet. У нас размещены всегда стабильные ссылки и зеркала.
            </p>
            <Link
              href={process.env.ONION_URL || ""}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 border border-sky-800 rounded-3xl text-sky-800 hover:bg-sky-800 hover:text-white transition-colors duration-300 ease-out flex items-center justify-center gap-2 max-w-max"
            >
              Перейти на маркетплейс
              <FaArrowRightLong />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
            {details.map((detail) => (
              <div
                key={detail.id}
                className="w-full lg:w-40 flex flex-col border-t-red-500 border-t-4 relative"
              >
                <p className="text-sm font-sans font-bold pt-2 text-zinc-200/95 max-w-64">
                  {detail.text}
                </p>
                <div className="absolute right-0 top-[15%] w-12 lg:inset-0 lg:w-full flex items-center justify-center text-zinc-400/20 lg:text-zinc-400/40">
                  {detail.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
