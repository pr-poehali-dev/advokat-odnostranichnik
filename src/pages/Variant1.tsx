import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Variant1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 rounded-full">
                <Icon name="Scale" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Бурцева Евгения Александровна
                </h1>
                <p className="text-gray-600">Адвокат • Москва</p>
              </div>
            </div>
            <div className="hidden md:block">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (925) 000-86-68
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Квалифицированная <br />
                <span className="text-blue-600">юридическая помощь</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Адвокатский кабинет Бурцевой Евгении Александровны — форма
                адвокатского образования, в рамках которой адвокат Бурцева Е.А.
                осуществляет свою деятельность.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <img
                  src="/img/227280e8-9278-4aaa-8901-d08afdbca02c.jpg"
                  alt="Бурцева Евгения Александровна"
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <div className="text-center">
                  <p className="text-sm opacity-90">
                    Номер в реестре: 77/16443
                  </p>
                  <p className="text-sm opacity-90">Статус: действующий</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Направления деятельности
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Квалифицированная помощь в уголовном, гражданском и
              административном судопроизводстве
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-red-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Gavel" size={32} className="text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Уголовное право</h3>
                <p className="text-gray-600">
                  Защита прав и интересов в уголовном судопроизводстве
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Icon name="FileText" size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Гражданское право
                </h3>
                <p className="text-gray-600">
                  Представительство в гражданском судопроизводстве
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Building" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Административное право
                </h3>
                <p className="text-gray-600">
                  Помощь в административном судопроизводстве
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Контакты</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={20} />
                      <div>
                        <p className="font-medium">+7 (925) 000-86-68</p>
                        <p className="text-sm opacity-90">Телефон для связи</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={20} />
                      <div>
                        <p className="font-medium">advokat9250008668@mail.ru</p>
                        <p className="text-sm opacity-90">Электронная почта</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={20} />
                      <div>
                        <p className="font-medium">
                          г. Москва, ул. Маросейка, д. 3/13
                        </p>
                        <p className="text-sm opacity-90">Адрес</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Адвокатский кабинет
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    Адвокатский кабинет адвоката Бурцевой Евгении Александровны
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Номер в реестре:</span>
                      <span>77/16443</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Статус:</span>
                      <span className="text-green-300">Действующий</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Палата:</span>
                      <span>Адвокатская палата г. Москвы</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Адвокатский кабинет Бурцевой Евгении Александровны. Все
            права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Variant1;
