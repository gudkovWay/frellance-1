const cards = [
  {
    id: 1,
    title: "Высочайший уровень безопасности",
    description:
      "Ваши данные защищены на каждом этапе покупки. Мы используем современные технологии шифрования, чтобы гарантировать полную анонимность и безопасность ваших транзакций. Никакие личные данные не сохраняются, и вы можете быть уверены в своей конфиденциальности.",
  },
  {
    id: 2,
    title: "Хорошие условия для новых магазинов",
    description:
      "Мы рады поддержать предпринимателей и предоставляем привлекательные условия для новых магазинов. Быстрое подключение, гибкие условия торговли и минимальные барьеры для входа — создайте собственный независимый бизнес с нами!",
  },
  {
    id: 3,
    title: "Быстрые анонимные транзакции",
    description:
      "Осуществляйте покупки с помощью криптовалюты без лишних задержек. Наш маркетплейс обеспечивает молниеносные транзакции, сохраняющих вашу анонимность. Просто выберите товар, совершите покупку, и наслаждайтесь новыми возможностями!",
  },
  {
    id: 4,
    title: "Минимальная комиссия за оплату услуги",
    description:
      "Мы снижаем финансовые барьеры, предлагая минимальные комиссии на зачисления и переводы. Оплачивая товары, вы получаете максимальную выгоду, а не теряете средства на высоких комиссиях. Ваши деньги работают на вас!",
  },
];

export const FAQ = () => {
  return (
    <div
      className="mt-24 lg:mt-64 px-4 flex items-center justify-center "
      id="faq"
    >
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-4 lg:gap-6">
          <h3 className="text-3xl font-bold text-center">
            Наши преимущества среди конкурентов
          </h3>

          <div className="w-full">
            <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 justify-items-center">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl w-full"
                >
                  <h2 className="text-xl font-semibold text-zinc-200 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-zinc-400 mb-4">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
