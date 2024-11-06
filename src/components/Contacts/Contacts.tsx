import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const products = [
  {
    name: "Clear + VPN",
    description: "Зайдите через привычные вам браузеры (yandex/google)",
    href: process.env.ONION_URL,
  },
  {
    name: "TOR",
    description:
      "Установите браузер через Google или Apple store и перейдите по актуальной ссылке прямо сейчас!",
    href: process.env.CLEAR_URL,
  },
];

export const Contacts = () => {
  return (
    <div className="flex items-center justify-center mt-24" id="contacts">
      <div className="w-full max-w-2xl space-y-6 flex flex-col gap-4 items-center justify-center lg:max-w-6xl">
        <Link
          href={process.env.ONION_URL || ""}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 max-w-max px-4 py-3 border border-blue-500 rounded-3xl text-zinc-100 hover:bg-blue-800 hover:text-white transition-colors duration-300 ease-out fount-bold text-2xl uppercase font-sans"
        >
          Перейти на маркет
        </Link>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center w-full">
          {products.map((product) => (
            <div key={product.name} className="w-full">
              <Link href={product.href || ""} className="block">
                <div className="bg-zinc-800 bg-opacity-50 hover:bg-opacity-100 ease-out  p-6 rounded-lg shadow-lg shadow-zinc-900 border border-zinc-900 transition-all hover:shadow-xl w-full lg:h-48">
                  <h2 className="text-xl font-semibold text-zinc-200 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-zinc-400 mb-4">{product.description}</p>
                  <div className="flex items-center text-white/20 font-medium">
                    Перейти
                    <FaArrowRightLong className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
