import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const products = [
  {
    name: "Clear + VPN",
    description: "Зайдите через привычные вам браузеры (yandex/google)",
    href: process.env.CLEAR_URL,
  },
  {
    name: "TOR",
    description:
      "Что бы зайти и авторизоваться на сайте kraken, скачайте tor browser",
    additionalLink: "https://mirrors.mit.edu/torproject/ru/download/",
    href: process.env.ONION_URL,
  },
];

export const Contacts = () => {
  return (
    <div className="flex px-4 items-center justify-center mt-24" id="contacts">
      <div className="w-full max-w-2xl space-y-6 flex flex-col gap-4 items-center justify-center lg:max-w-6xl">
        <p className="flex items-center justify-center gap-2 max-w-max px-4 py-3 border border-blue-500 rounded-3xl text-zinc-100 hover:bg-blue-800 hover:text-white transition-colors duration-300 ease-out fount-bold text-2xl uppercase font-sans">
          Перейти на kraken
        </p>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center w-full">
          {products.map((product) => (
            <div key={product.name} className="w-full">
              <Link href={product.href || ""} className="block relative">
                <div className="bg-zinc-800 bg-opacity-50 hover:bg-opacity-100 ease-out  gap-4 p-6 rounded-lg shadow-lg shadow-zinc-900 border border-zinc-900 transition-all hover:shadow-xl w-full lg:h-48">
                  <h2 className="text-xl font-semibold text-zinc-200 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-zinc-400 mb-4 flex flex-col gap-0.5">
                    {product.description}{" "}
                    {product.additionalLink && (
                      <Link
                        href={product.additionalLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-white/80 font-bold"
                      >
                        Скачать TOR
                        <FaArrowRightLong className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
