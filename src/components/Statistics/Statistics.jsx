// Створити компонент <Statistics>, який би відображав статистику з переданих пропсів. Наприклад, завантаження у хмару за типом файлів,
// відвідування веб - сторінки користувачами різних країн, фінансові витрати тощо.Дані про статистику лежать у файлі data.json.
// Опис компонента <Statistics>
// Компонент повинен приймати два пропи title і stats, в яких вказується заголовок та об'єкт статистики.
// title – не обов'язковий, і якщо він не переданий, не повинна рендеритись розмітка заголовка <h2>.
// stats – масив об'єктів, що містять інформацію про елемент статистики. Може мати довільну кількість елементів.
// Колір фону елемента статистики в оформленні можна пропустити або створити функцію для генерації випадкового кольору.

import PropTypes from 'prop-types';
import data from 'Data/data.json';
const title = 'Upload stats';
export const Statistics = (stats = { data }) => {
  return (
    <section>
      <h2>{title}</h2>
      {data.map(data => (
        <ul>
          <li key={data.id}>
            <span>{data.label}</span>
            <span>{data.percentage}</span>
          </li>
        </ul>
      ))}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
}.isRequired;
