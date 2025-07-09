import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Scale" size={32} className="text-secondary" />
              <div>
                <h1 className="text-2xl font-cormorant font-bold">
                  Бурцева Евгения Александровна
                </h1>
                <p className="text-sm opacity-90">Адвокат • Москва</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span className="text-sm">+7 (925) 000-86-68</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span className="text-sm">advokat9250008668@mail.ru</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6 text-primary">
                    Квалифицированная юридическая помощь
                  </h2>
                  <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                    Адвокатский кабинет Бурцевой Евгении Александровны — форма
                    адвокатского образования, в рамках которой адвокат Бурцева
                    Е.А. осуществляет свою деятельность.
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Shield"
                        size={20}
                        className="text-secondary"
                      />
                      <span className="text-sm font-medium">
                        Адвокатская палата г. Москвы
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="CheckCircle"
                        size={20}
                        className="text-green-600"
                      />
                      <span className="text-sm font-medium">
                        Действующий статус
                      </span>
                    </div>
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Получить консультацию
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src="/img/75848438-8c35-43de-9941-0ded5e2c1d01.jpg"
                    alt="Бурцева Евгения Александровна"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <p className="text-white text-sm">
                      Номер в реестре: 77/16443
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-cormorant font-bold mb-4 text-primary">
              Профессиональный опыт
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Член Адвокатской палаты г. Москвы с подтвержденной квалификацией в
              области юриспруденции
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon
                  name="Gavel"
                  size={48}
                  className="mx-auto mb-4 text-secondary"
                />
                <h3 className="text-xl font-cormorant font-semibold mb-2">
                  Уголовное право
                </h3>
                <p className="text-muted-foreground">
                  Защита прав и интересов в уголовном судопроизводстве
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon
                  name="FileText"
                  size={48}
                  className="mx-auto mb-4 text-secondary"
                />
                <h3 className="text-xl font-cormorant font-semibold mb-2">
                  Гражданское право
                </h3>
                <p className="text-muted-foreground">
                  Представительство в гражданских спорах и сделках
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon
                  name="Building"
                  size={48}
                  className="mx-auto mb-4 text-secondary"
                />
                <h3 className="text-xl font-cormorant font-semibold mb-2">
                  Административное право
                </h3>
                <p className="text-muted-foreground">
                  Защита в административных правонарушениях
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-cormorant font-bold mb-4 text-primary">
              Юридические услуги
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексная правовая поддержка по всем направлениям деятельности
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon
                    name="Scale"
                    size={24}
                    className="text-secondary mt-1"
                  />
                  <div>
                    <h3 className="text-xl font-cormorant font-semibold mb-2">
                      Уголовные дела
                    </h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Защита подозреваемых и обвиняемых</li>
                      <li>• Представительство потерпевших</li>
                      <li>• Обжалование судебных решений</li>
                      <li>• Участие в следственных действиях</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon
                    name="FileText"
                    size={24}
                    className="text-secondary mt-1"
                  />
                  <div>
                    <h3 className="text-xl font-cormorant font-semibold mb-2">
                      Гражданские споры
                    </h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Договорные споры</li>
                      <li>• Наследственные дела</li>
                      <li>• Семейные споры</li>
                      <li>• Имущественные споры</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-cormorant font-bold mb-6">
                    Контакты
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={20} className="text-secondary" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-sm opacity-90">+7 (925) 000-86-68</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={20} className="text-secondary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm opacity-90">
                          advokat9250008668@mail.ru
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon
                        name="MapPin"
                        size={20}
                        className="text-secondary"
                      />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-sm opacity-90">
                          г. Москва, ул. Маросейка, д. 3/13
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant font-semibold mb-4">
                    Записаться на консультацию
                  </h3>
                  <p className="text-sm opacity-90 mb-6">
                    Получите профессиональную правовую помощь. Свяжитесь со мной
                    для предварительной консультации.
                  </p>
                  <Button variant="secondary" className="w-full">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Назначить встречу
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Legal Details Section */}
        <section>
          <Card className="bg-muted">
            <CardContent className="p-8">
              <h2 className="text-2xl font-cormorant font-bold mb-6 text-center">
                Реквизиты
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Адвокатский кабинет</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Адвокатский кабинет адвоката Бурцевой Евгении Александровны
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Адвокат:</span>
                      <span>Бурцева Евгения Александровна</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Номер в реестре:</span>
                      <span>77/16443</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Статус:</span>
                      <span className="text-green-600">Действующий</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Правовая основа</h3>
                  <p className="text-sm text-muted-foreground">
                    Деятельность осуществляется в соответствии с Федеральным
                    законом "Об адвокатской деятельности и адвокатуре в
                    Российской Федерации" и регламентом Адвокатской палаты г.
                    Москвы.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm opacity-90">
              © 2024 Адвокатский кабинет Бурцевой Евгении Александровны. Все
              права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
