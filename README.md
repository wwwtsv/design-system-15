![bem](./res/img/yandex-bem.jpg)
# Дизайн система 

В этом репозитории находится мое решение тестового задания «[Реализуйте дизайн-систему](https://github.com/yndx-shri-reviewer/task-1#readme "Реализуйте дизайн-систему")» для 15-й Школы разработки интерфейсов (осень 2019, Москва).

> Правила дизайн-системы описываются в терминах методологии [БЭМ](https://ru.bem.info/ "БЭМ"). Для обозначения сущностей интерфейса используется [соглашение по именованию](https://ru.bem.info/methodology/naming-convention/ "соглашение по именованию").

## Инструменты
- [x] Yarn
- [x] Webpack
- [x] PostCSS
- [x] Autoprefixer
- [x] Mocha
- [x] Karma
- [x] Chai
- [x] Eslint
- [x] Prettier
- [x] Stylelint
- [x] Babel
- [x] Browserlist (default)

## Команды CLI
**Для использования команды `yarn` необходимо установить [Yarn](https://yarnpkg.com/)**

`yarn install` - установка зависимостей.

`yarn dev` - запустить проект локально. Адрес локального сервера `http://localhost:8080/[pagename]`

`yarn build` - сборка проекта.

`yarn test` - запуск тестов

## Файловая структура
```
├── build - собранные файлы проекта
├── node_modules - node.js пакеты
├── res - дополнительные ресурсы, собираются в папку build*
│   └──  img
├── src
│   ├── templates
│   │   ├── collect.html
│   │   ├── content.html
│   │   ├── content-blocks.html
│   │   ├── index.html
│   │   ├── product.html
│   │   └── template-layout.js - разметка страниц в формате BEMJSON
│   ├── script.js - код реализующий интерактивность блоков
│   ├── style.css - стили для всех блоков и модификаторов
│   └── template-engine.js - функция шаблонизации
├── test
│   └── test.js - набор тестов для шаблонизатора
├── .editroconfig
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── .stylelintrc
├── karma.conf.js - конфигурация тест раннера
├── package.json
├── postcss.config.js
├── README.md
├── webpack.common.js - основная конфигурация сборщика
├── webpack.dev.js - конфигурация для разработки
├── webpack.prod.js - для полной сборки проекта
├── yarn.lock
```
## Описание

### Пакетный менеджер
В проекте используется пакетный менеджер Yarn из за его надежности и скорости установки пакетов.

### Сборщик
Собирается проект при помощи Webpack из за его популярности, большого количества дополнительных инструментов (загрузчиков) и обширной документации.

### Линтеры
За качеством кода следим при помощи stylelint для CSS, eslint и prettier для JavaScript. Вместе с этим [.editorconfig](https://editorconfig.org/) контролирует кодировку файлов и формат отступов.

### Стили
Основа стилевого оформления блоков дизайн системы базируется на методологии БЭМ и кастомных свойств CSS. Для упрощения написания стилей используется PostCSS и плагины
- autoprefixer - для автоматической расстановки префиксов в слабо поддерживаемых браузерами свойствах
- postcss-nested - для возможности использовать `&` при написании модификаторов блоков/элементов.

### Шаблонизатор
Шаблонизатор это переписанная в синтаксисе ES6 версия [этого](https://github.com/floatdrop/bemjson-to-html "этого") репозитория. Используются только самые необходимые функции. Шаблонизация происходит на клиенте.
**Принцип работы.**
В импортируемую функцию из файла `template-engine.js` передается объект в синтаксисе [BEMJSON](https://ru.bem.info/technologies/classic/bemjson/ "BEMJSON"). В файле `src/templates/template-layout.js` пример работы функции и все необходимые демонстрационные страницы. `test/test.js` тесты основных функций шаблонизатора.

### Тесты
Для тестирования используется тест фреймворк mocha в связке с karma, chai и babel для ES6 модулей.

## Лицензия
MIT