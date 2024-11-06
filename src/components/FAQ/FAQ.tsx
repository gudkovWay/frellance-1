"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types"; // Импортируем типы

const cards = [
  {
    id: 1,
    title: "Что такое ONION",
    description:
      "ONION - безопасная сеть, выход в которую возможен только через TOR, который в свою очередь автоматически маскирует ваш IP-адресс на другой и меняет его на динамичный. То есть он будет менять ваш IP-адресс каждый раз по истечению того времени которое вы выставили в браузере",
  },
  {
    id: 2,
    title: "Как зайти на маркетплейс через ONION сеть?",
    description:
      "Установите браузер через Google или Apple store и перейдите по актуальной ссылке с нашего сайта",
  },
  {
    id: 3,
    title: "Регистрация и вход на Кракене",
    description: "aga da",
  },
  {
    id: 4,
    title: "Покупки и оплата",
    description: "UGu yeeeeeeeeeeeeess",
  },
];

export const FAQ = () => {
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    swiper: SwiperType,
    time: number,
    autoplay: unknown,
  ) => {
    if (!swiper.params.autoplay || !autoplay) return;
    if (!progressContent.current) return;
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="mt-24 flex items-center justify-center">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-4 lg:gap-6">
          <h3 className="text-3xl font-bold">Частые Вопросы & Ответы</h3>

          <Swiper
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            spaceBetween={30}
            centeredSlides={true}
            modules={[Autoplay, EffectFade]}
            slidesPerView={1}
            loop
            className="relative w-full overrflow-hidden"
          >
            {cards.map((card) => (
              <SwiperSlide
                key={card.id}
                className="w-full h-auto rounded-xl border border-sky-900 p-4"
              >
                <div className="flex flex-col gap-4">
                  <h4 className="text-2xl font-bold">{card.title}</h4>
                  <p className="text-lg">{card.description}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className="absolute bottom-1 right-3 w-max h-max rounded-full border-4 border-sky-500 flex items-center justify-center px-3 py-1">
              <span
                className="text-sm font-medium"
                ref={progressContent}
              ></span>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
