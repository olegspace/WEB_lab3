# **Использование npm, webpack и REST API**

  **Задание 1. Проверка наличия nodejs и npm**
Запустите VSCode, откройте окно терминала и наберите команды
**node -v**
**npm -v**
если node и npm установлены, то в терминале будут выведены их версии, если нет -
будет ошибка.
Если node и npm не установлены, то зайдите на официальный сайт nodejs
https://nodejs.org/en/, скачайте LTS-дистрибутив и запустите его установку. Оставьте все
параметры при установке по-умолчанию, пароль администратора Windows в
терминальном классе уточните у преподавателя.

  **Задание 2. Установка и настройка webpack**
Инициализируйте npm в новой папке с помощью команды npm init (должен создаться
файл package.json).
Установите с помощью npm webpack и настройте его для вашего приложения,
например, следующим образом (возможны и другие варианты по вашему желанию):
● команда npm build должна создавать собранное приложение в отдельной папке
build или dist;
● при сборке все js-файлы должны собираться в единый минифицированный
bundle.js;
● команда npm start должна запускать webpack-dev-server с горячей
перезагрузкой приложения в браузере при любом сохранении файла;
● css-файл(ы) должны собираться автоматически с помощью css-loader,
style-loader;
● html-файл(ы) также должны попадать в сборку с помощью HtmlWebpackPlugin.
В качестве литературы можно использовать материалы для лекции 7:
https://dispace.edu.nstu.ru/didesk/course/show/12824/3

**Задание 3. Миграция приложения из лабораторной 2**
Перенесите слайдер или калькулятор из 2-й лабораторной работы в новое окружение
с webpack.

**Задание 4. Использование REST API**
Напишите простой виджет, отображающий результаты поиска вакансий на сайте hh.ru с
использованием его API: см.
https://github.com/hhru/api/blob/master/docs/vacancies.md#search
Для получения данных используйте библиотеку axios (см.
https://nodejs.dev/learn/making-http-requests-with-nodejs, https://github.com/axios/axios)

