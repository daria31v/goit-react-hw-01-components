// Створити компонент <Statistics>, який би відображав статистику з переданих пропсів. Наприклад, завантаження у хмару за типом файлів, 
// відвідування веб - сторінки користувачами різних країн, фінансові витрати тощо.Дані про статистику лежать у файлі data.json.
// Опис компонента <Statistics>
// Компонент повинен приймати два пропи title і stats, в яких вказується заголовок та об'єкт статистики.
// title – не обов'язковий, і якщо він не переданий, не повинна рендеритись розмітка заголовка <h2>.
// stats – масив об'єктів, що містять інформацію про елемент статистики. Може мати довільну кількість елементів.
// Колір фону елемента статистики в оформленні можна пропустити або створити функцію для генерації випадкового кольору.



// {/* <Statistics>
//     <section class="statistics">
//   <h2 class="title">Upload stats</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </section>
// </Statistics> */}

// import data from '/path/to/data.json';

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />