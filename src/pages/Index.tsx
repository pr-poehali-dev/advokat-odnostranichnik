import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

// Import variants
import Variant1 from "./Variant1";
import Variant2 from "./Variant2";
import Variant3 from "./Variant3";

const Index = () => {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);

  // Render selected variant
  if (selectedVariant === 1) return <Variant1 />;
  if (selectedVariant === 2) return <Variant2 />;
  if (selectedVariant === 3) return <Variant3 />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Бурцева Евгения Александровна
            </h1>
            <p className="text-gray-600">
              Адвокат • Москва • Номер в реестре: 77/16443
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Выберите дизайн сайта-визитки
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Три варианта профессионального дизайна для адвокатского кабинета
          </p>
        </section>

        {/* Design Variants */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Variant 1 - Modern */}
            <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                  <Icon name="Sparkles" size={32} className="mb-4" />
                  <h3 className="text-xl font-bold mb-2">Современный</h3>
                  <p className="text-sm opacity-90">
                    Современный дизайн с градиентами и анимациями
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Яркие цвета и градиенты</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Интерактивные элементы</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Мобильная адаптация</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => setSelectedVariant(1)}
                  >
                    Выбрать дизайн
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Variant 2 - Classic */}
            <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="bg-gray-900 text-white p-6">
                  <Icon
                    name="Crown"
                    size={32}
                    className="mb-4 text-amber-400"
                  />
                  <h3 className="text-xl font-bold mb-2">Классический</h3>
                  <p className="text-sm opacity-90">
                    Строгий юридический стиль с золотыми акцентами
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Серьезный деловой стиль</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Золотые акценты</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Подробная информация</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gray-900 hover:bg-gray-800"
                    onClick={() => setSelectedVariant(2)}
                  >
                    Выбрать дизайн
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Variant 3 - Minimal */}
            <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="bg-white text-gray-900 p-6 border-b">
                  <Icon name="Zap" size={32} className="mb-4" />
                  <h3 className="text-xl font-bold mb-2">Минималистичный</h3>
                  <p className="text-sm text-gray-600">
                    Чистый и лаконичный дизайн без лишних элементов
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Чистый дизайн</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Быстрая загрузка</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>Легкое восприятие</span>
                    </div>
                  </div>
                  <Button
                    className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                    variant="outline"
                    onClick={() => setSelectedVariant(3)}
                  >
                    Выбрать дизайн
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Все варианты включают
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полная информация об адвокатском кабинете в любом выбранном
              дизайне
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Icon
                name="User"
                size={32}
                className="mx-auto mb-4 text-blue-600"
              />
              <h3 className="font-semibold mb-2">Личная информация</h3>
              <p className="text-sm text-gray-600">
                Имя, фото, статус адвоката
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Icon
                name="Scale"
                size={32}
                className="mx-auto mb-4 text-blue-600"
              />
              <h3 className="font-semibold mb-2">Направления права</h3>
              <p className="text-sm text-gray-600">
                Уголовное, гражданское, административное
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Icon
                name="Phone"
                size={32}
                className="mx-auto mb-4 text-blue-600"
              />
              <h3 className="font-semibold mb-2">Контакты</h3>
              <p className="text-sm text-gray-600">Телефон, email, адрес</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Icon
                name="FileText"
                size={32}
                className="mx-auto mb-4 text-blue-600"
              />
              <h3 className="font-semibold mb-2">Реквизиты</h3>
              <p className="text-sm text-gray-600">Номер в реестре, статус</p>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Контакты</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <Icon name="Phone" size={20} />
                  <span>+7 (925) 000-86-68</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Icon name="Mail" size={20} />
                  <span>advokat9250008668@mail.ru</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Icon name="MapPin" size={20} />
                  <span>г. Москва, ул. Маросейка, д. 3/13</span>
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

export default Index;
