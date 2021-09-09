const str = "Browser and Developer tools\n" +
    "Как работает браузер\n" +
    "Developer tools https://youtu.be/6B1XQ0Ukn6c\n" +
    "Network tab https://youtu.be/o1ZfsV9kGLA\n" +
    "Зависимые запросы. Network Waterfall https://youtu.be/vFn-2XiBSxA\n" +
    "WebStorm and Hello world https://youtu.be/C9NcErhFMVk" + "NEW" +
    "HTML\n" +
    "Main tags doctype, html, head, body https://youtu.be/gupNH-T2NpY\n" +
    "Tags h1, h2, h3, p. WebStorm shortcuts https://youtu.be/DFZjtCaptTw\n" +
    "Теги для форматирования текста: strong, b, i, s, u https://youtu.be/Gpgvl2bQIOE\n" +
    "Tags div, span https://youtu.be/oA0_ExPZ6JA\n" +
    "Маркированные и нумерованные списки\n" +
    "Ссылки – создание связей между страницами https://youtu.be/4IXu8g40k8c\n" +
    "Images from remote source https://youtu.be/kGs8oDh58BM\n" +
    "Images from a local source https://youtu.be/4iWGIYY6_yU\n" +
    "Атрибуты для добавления свойств к тегам\n" +
    "Tables https://youtu.be/qV9lHgTo6FQ" + "NEW" +
    "HTML + CSS\n" +
    "Для чего нужны стили\n" +
    "Браузерные инструменты отладки\n" +
    "Подключение файла стилей\n" +
    "Синтаксис CSS\n" +
    "Цвет текста – color\n" +
    "Цвет фона – background\n" +
    "Размер шрифта – font-size\n" +
    "Обводка – border\n" +
    "Внешний отступ – margin\n" +
    "Внутренний отступ – padding\n" +
    "Селекторы по тегу\n" +
    "Селекторы по id\n" +
    "Селекторы по классу\n" +
    "Универсальный селектор *\n" +
    "Позиционирование\n" +
    "Псевдоклассы\n" +
    "Псевдоэлементы\n" +
    "Группировка\n" +
    "Наследование свойств\n" +
    "Блочные и строчные элементы\n" +
    "Приоритет и переопределение свойств\n" +
    "Ключевое слово !important\n" +
    "Специфичность" + "NEW" +
    "HTML + JS\n" +
    "Подключение JS к HTML странице https://youtu.be/SwxJMqKtbhk\n" +
    "Event handler onclick https://youtu.be/SMqoff0DFoU\n" +
    "Поиск DOM элемента по тегу – getElementsByTagName https://youtu.be/-6ouNpRgol4\n" +
    "Поиск DOM элемента по id – getElementById https://youtu.be/3SR4T00lY8s\n" +
    "Поиск DOM элемента по id – GetElementsByClassName https://youtu.be/Bs_y9lacV60\n" +
    "Counter app. Изменение текста DOM элемента https://youtu.be/EVu9hVYkgd0\n" +
    "TodoList. List generator. createElement, appendChild https://youtu.be/D1Y6adnVXx8\n" +
    "TodoList. Add item to list, List render https://youtu.be/LvraBGJO4-M\n" +
    "TodoList. Optimisation selectors https://youtu.be/k8CQf_sjaKk\n" +
    "TodoList. Add buttons Done <a href ='https://youtu.be/27asOd07mV8'>https://youtu.be/27asOd07mV8</a>\n" +
    "Изменение свойств DOM элемента\n" +
    "Установка обработчиков событий.\n" +
    "Event bubbling, propagation, capturing\n" +
    "Удаление DOM элемента\n" +
    "Копирование DOM элемента\n" +
    "Перемещение DOM элемента\n" +
    "Добавление DOM элемента\n" +
    "Создание счетчика\n" +
    "Создание Todo list app\n" +
    "Асинхронные запросы\n" +
    "Задержки setTimeout\n" +
    "Отправка форм асинхронным запросом" + "NEW" +
    "React\n" +
    "Преимущество React перед HTML + JS\n" +
    "Установка окружения Node, NPM\n" +
    "Редактор кода Webstorm, терминал.\n" +
    "Новый проект React App\n" +
    "JSX синтаксис\n" +
    "Компоненты – строительные блоки приложения\n" +
    "Композиция компонентов. Как создавать сложные вещи из множества простых\n" +
    "Наследование, которого нет\n" +
    "Иерархия компонентов\n" +
    "Передача данных между компонентами с помощью Props\n" +
    "Подключение CSS-фреймворка Bootstrap, чтобы задавать внешний вид приложений\n" +
    "Обработчик нажатия onClick. Event handlers\n" +
    "Состояние компонента – Hook useState\n" +
    "Обработчик ввода текста в форму onChange\n" +
    "Манипулирование состоянием\n" +
    "Контролируемые компоненты\n" +
    "Stateless компоненты\n" +
    "Smart vs Dumb Components\n" +
    "Hook useEffect\n" +
    "REST API запросы. Асинхронное получение данных. Fetch. Axios.\n" +
    "Компоненты на основе классов\n" +
    "Жизненный цикл class-based компонента\n" +
    "Pure component\n" +
    "Устройство Redux.\n" +
    "Инструменты разработчика для отладки store\n" +
    "Асинхронное обновление Redux Store. Thunk\n" +
    "Git и GitHub. Публикация проекта в GitHub Pages\n" +
    "Публикация в Heroku\n" +
    "Публикация в Netlify\n" +
    "Публикация в AWS"

const arr = str.split('NEW')
let list = []
arr.forEach(el => list.push(el.split(/\n/g)))

const finalList = list.map(createList)


function createList(el) {
    const title = el.shift()
    const content = el.map(contentToObj)
    return {title, content, open:false}
}

function contentToObj(el) {
    return {id: Math.random(), done: false, name: el}
}

console.log(finalList)
function render() {
    finalList.forEach(el => {
        
        // Создание заголовков
        
            let titleList = document.createElement('li');
            let titleName = document.createElement("span")
            titleName.innerHTML = el.title
            titleName.className= "title"
            titleName.onclick = function() {
                titleList.classList.toggle('open');
               };
            titleList.append(titleName)
            titleList.className = "menu"
    
        // Создание подпунктов
        
            const innerList = document.createElement("ul")
        
            for (let item of el.content) {
                const innerListItem = document.createElement('li')
                innerListItem.innerHTML = `<span>${item.name}</span>`
                innerListItem.className = "innerItem"
                
        // Добавление кнопок
                const markASDoneButton = document.createElement("button")
                markASDoneButton.innerHTML ="<img src=\"img/completed-icon-0.jpg\" alt=\"\">"
                markASDoneButton.className = "doneButton"
                markASDoneButton.onclick = function() {
                    innerListItem.classList.toggle('done');
                    markASDoneButton.classList.toggle('done');
                };
                innerListItem.append( markASDoneButton)
                innerList.append(innerListItem)
            }
            titleList.append(innerList)
            
            document.getElementById("list").append(titleList);
        }
    );
}

render();


console.log(titleList)


