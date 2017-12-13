import React  from 'react'

const Main = () => {
    return (
        <section className="main-page">
            <h1>Агрегатор рецензий фильмов</h1>
            <ul>
                <li>'/'- содержание(вкладка main)</li>
                <li>'/content' - превью рецензий(tile, img, author)</li>
                <li>доступна фильтрация по автору и за последний месяц(есть кнопка сброса фильтров</li>
                <li>фильтрация доступна только во вкладке '/content', примененный фильтр отображается в адресной строке</li>
                <li>Использовал React, React-router, Redux, Redux-saga</li>
                <li>Загружает по 20 рецензий, 20 при запуске и 20 при нажатии кнопки more</li>

                <span>npm install</span>
                <span>npm start</span>
            </ul>
        </section>
    );
}

export default Main;