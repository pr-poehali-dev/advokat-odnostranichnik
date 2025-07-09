import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Variant2 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white border-b-4 border-amber-600">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-amber-600 rounded-full">
                <Icon name="Scale" size={32} className="text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-serif font-bold mb-2">
              Бурцева Евгения Александровна
            </h1>
            <p className="text-xl text-gray-300">Адвокат</p>
            <p className="text-sm text-gray-400 mt-2">
              Адвокатская палата г. Москвы • Номер в реестре: 77/16443
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Main Info Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="h-full border-l-4 border-amber-600">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900">
                    Адвокатский кабинет
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Адвокатский кабинет Бурцевой Евгении Александровны — форма
                    адвокатского образования, в рамках которой адвокат Бурцева
                    Е.А. осуществляет свою деятельность.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Адвокат состоит в Адвокатской палате г. Москвы и оказывает
                    квалифицированную помощь в уголовном, гражданском и
                    административном судопроизводстве.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-100 p-4 rounded">
                      <h3 className="font-semibold mb-2">Статус адвоката</h3>
                      <p className="text-green-600 font-medium">Действующий</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                      <h3 className="font-semibold mb-2">Номер в реестре</h3>
                      <p className="font-medium">77/16443</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="h-full">
                <CardContent className="p-0">
                  <img
                    src="/img/227280e8-9278-4aaa-8901-d08afdbca02c.jpg"
                    alt="Бурцева Евгения Александровна"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Направления деятельности
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-red-500">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon
                    name="Gavel"
                    size={48}
                    className="text-red-500 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-serif font-semibold">
                    Уголовное право
                  </h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Защита подозреваемых и обвиняемых</li>
                  <li>• Представительство потерпевших</li>
                  <li>• Обжалование судебных решений</li>
                  <li>• Участие в следственных действиях</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-blue-500">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon
                    name="FileText"
                    size={48}
                    className="text-blue-500 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-serif font-semibold">
                    Гражданское право
                  </h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Договорные споры</li>
                  <li>• Наследственные дела</li>
                  <li>• Семейные споры</li>
                  <li>• Имущественные споры</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-green-500">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon
                    name="Building"
                    size={48}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-serif font-semibold">
                    Административное право
                  </h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Административные правонарушения</li>
                  <li>• Обжалование постановлений</li>
                  <li>• Представительство в судах</li>
                  <li>• Консультации по КоАП</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-6">
                    Контактная информация
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Icon
                        name="Phone"
                        size={24}
                        className="text-amber-400 mt-1"
                      />
                      <div>
                        <p className="font-semibold text-lg">
                          +7 (925) 000-86-68
                        </p>
                        <p className="text-gray-400">
                          Телефон для записи на консультацию
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Icon
                        name="Mail"
                        size={24}
                        className="text-amber-400 mt-1"
                      />
                      <div>
                        <p className="font-semibold text-lg">
                          advokat9250008668@mail.ru
                        </p>
                        <p className="text-gray-400">Электронная почта</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Icon
                        name="MapPin"
                        size={24}
                        className="text-amber-400 mt-1"
                      />
                      <div>
                        <p className="font-semibold text-lg">
                          г. Москва, ул. Маросейка, д. 3/13
                        </p>
                        <p className="text-gray-400">
                          Адрес для корреспонденции
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-6">
                    Официальные реквизиты
                  </h3>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Наименование:</span>
                        <span className="text-right">
                          Адвокатский кабинет адвоката Бурцевой Евгении
                          Александровны
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Адвокат:</span>
                        <span>Бурцева Евгения Александровна</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Номер в реестре:</span>
                        <span>77/16443</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Статус:</span>
                        <span className="text-green-400">Действующий</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Записаться на консультацию
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white border-t-4 border-amber-600 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Адвокатский кабинет адвоката Бурцевой Евгении
              Александровны
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Все права защищены. Конфиденциальность гарантирована.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Variant2;
