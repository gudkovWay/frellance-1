import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative min-h-screen w-full" id="#main">
      <Image
        src="/background.jpg"
        alt="background"
        width={1920}
        height={600}
        quality={100}
        className="w-full h-full absolute object-cover z-[-1]"
      />
      <div className="flex flex-col gap-2 lg:gap-4 bg-zinc-800 rounded-xl border border-zinc-900  p-6 shadow shadow-zinc-900 shadow-md bg-opacity-50 backdrop-blur-sm lg:backdrop-blur-md absolute bottom-0 left-0">
        <h1 className="text-5xl font-bold text-zinc-200">Kraken Market</h1>
        <p className="text-sm lg:text-lg font-bold max-w-full lg:max-w-[800px] text-zinc-200/80">
          {" "}
          Kraken - один из ведущих и наиболее востребованных
          даркнет-маркетплейсов, с гордостью объявляет о своем устойчивом росте
          и расширении ассортимента товаров и услуг. Этот инновационный рынок
          предоставляет пользователям уникальную возможность для анонимных
          покупок и продаж, охватывая широкий спектр продукции, от электроники
          до программного обеспечения и цифровых товаров. С момента своего
          основания Kraken зарекомендовал себя как надежный партнер в мире
          даркнета, завоевав доверие миллионов пользователей по всему миру. Мы
          продолжаем работать над улучшением нашего сервиса и расширением
          ассортимента, чтобы предоставить нашим клиентам еще больше
          возможностей для покупки и продажи товаров и услуг в безопасной и
          анонимной среде.{" "}
        </p>
      </div>
    </div>
  );
};
