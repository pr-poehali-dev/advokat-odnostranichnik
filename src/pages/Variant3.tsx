import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Variant3 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light text-gray-900">
                Бурцева Евгения Александровна
              </h1>
              <p className="text-gray-600 mt-1">Адвокат</p>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>Номер в реестре: 77/16443</p>
              <p>
                Статус: <span className="text-green-600">действующий</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Main Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-8 leading-tight">
                Квалифицированная <br />
                юридическая помощь
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Адвокатский кабинет Бурцевой Евгении Александровны — форма
                  адвокатского образования, в рамках которой адвокат Бурцева
                  Е.А. осуществляет свою деятельность.
                </p>
                <p className="text-gray-600 mb-8">
                  Оказываю квалифицированную помощь в уголовном, гражданском и
                  административном судопроизводстве.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (925) 000-86-68
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  <Icon name="Mail" size={16} className="mr-2" />
                  Написать
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/img/227280e8-9278-4aaa-8901-d08afdbca02c.jpg"
                alt="Бурцева Евгения Александровна"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Services Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Направления деятельности
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Gavel" size={32} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-light mb-2">Уголовное право</h3>
              <p className="text-gray-600 text-sm">
                Защита прав и интересов в уголовном судопроизводстве
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Icon name="FileText" size={32} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-light mb-2">Гражданское право</h3>
              <p className="text-gray-600 text-sm">
                Представительство в гражданском судопроизводстве
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Building" size={32} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-light mb-2">
                Административное право
              </h3>
              <p className="text-gray-600 text-sm">
                Помощь в административном судопроизводстве
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Contact Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Контакты
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={20} className="text-gray-700" />
                  <div>
                    <p className="font-medium">+7 (925) 000-86-68</p>
                    <p className="text-sm text-gray-500">Телефон</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={20} className="text-gray-700" />
                  <div>
                    <p className="font-medium">advokat9250008668@mail.ru</p>
                    <p className="text-sm text-gray-500">Электронная почта</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={20} className="text-gray-700" />
                  <div>
                    <p className="font-medium">
                      г. Москва, ул. Маросейка, д. 3/13
                    </p>
                    <p className="text-sm text-gray-500">Адрес</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-6">
                Адвокатский кабинет
              </h3>
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Наименование</p>
                      <p className="text-gray-600">
                        Адвокатский кабинет адвоката Бурцевой Евгении
                        Александровны
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Адвокат</p>
                      <p className="text-gray-600">
                        Бурцева Евгения Александровна
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">
                        Номер в реестре:
                      </span>
                      <span className="text-gray-600">77/16443</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">Статус:</span>
                      <span className="text-green-600">Действующий</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-900">Палата:</span>
                      <span className="text-gray-600">
                        Адвокатская палата г. Москвы
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-500">
            <p>
              © 2024 Адвокатский кабинет адвоката Бурцевой Евгении
              Александровны
            </p>
            <p className="mt-1">Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Variant3;
