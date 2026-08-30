'use client';

import { useEffect, useState } from 'react';

const features = [
  { n: '01', title: 'Пошаговые инструкции', text: 'Сложные операции разложены на понятные действия — от первого клика до результата.' },
  { n: '02', title: 'Визуальное обучение', text: 'Подсказки и скриншоты помогают быстро находить нужные разделы и поля интерфейса.' },
  { n: '03', title: 'AI-наставник', text: 'Объясняет ошибки простым языком, даёт подсказку и помогает двигаться дальше.' },
  { n: '04', title: 'Практические задания', text: 'Каждая тема закрепляется действием в «1С:Бухгалтерия 8.3, учебная версия».' },
  { n: '05', title: 'Система прогресса', text: 'Видно, какие навыки уже освоены, а к каким стоит вернуться перед практикой.' },
  { n: '06', title: 'Геймификация', text: 'Серии занятий, опыт и достижения поддерживают темп без лишнего давления.' },
];

const audiences = [
  ['01', 'Студентам СПО', 'Перевести теорию бухгалтерского учёта в уверенный практический навык.'],
  ['02', 'Начинающим бухгалтерам', 'Освоить основные операции и спокойнее выйти на первую работу.'],
  ['03', 'Колледжам', 'Дополнить программу практическим цифровым тренажёром и видеть прогресс.'],
  ['04', 'Учебным центрам', 'Дать слушателям современный формат обучения с единым стандартом практики.'],
];

const steps = ['Выбор темы', 'Объяснение', 'Пошаговая практика', 'Задание', 'Проверка', 'Прогресс'];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="ИБИ — на главную" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span>ИБИ</span>
          </a>
          <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Основная навигация">
            <a href="#problem" onClick={closeMenu}>Проблема</a>
            <a href="#solution" onClick={closeMenu}>Решение</a>
            <a href="#features" onClick={closeMenu}>Возможности</a>
            <a href="#audience" onClick={closeMenu}>Для кого</a>
            <a className="nav-cta" href="#contacts" onClick={closeMenu}>Связаться</a>
          </nav>
          <button className="menu-button" type="button" aria-label="Открыть меню" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow"><span /> EdTech для практического образования</div>
              <h1>Практика в 1С.<br /><em>Понятно.</em> По шагам.</h1>
              <p className="hero-lead">ИБИ — интерактивная образовательная платформа, которая превращает знания бухгалтерского учёта в уверенный навык работы в программе.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#solution">О проекте <span aria-hidden="true">↗</span></a>
                <a className="text-link" href="#learning">Как это работает <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-note">
                <span className="note-icon">✓</span>
                <span>Обучение на базе<br /><b>«1С:Бухгалтерия 8.3, учебная версия»</b></span>
              </div>
            </div>

            <div className="product-scene" data-reveal>
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="product-window">
                <div className="window-top">
                  <div className="mini-brand"><span className="mini-mark">И</span><b>ИБИ</b></div>
                  <div className="window-dots"><span /><span /><span /></div>
                </div>
                <div className="product-body">
                  <aside className="product-sidebar">
                    <span className="side-active">⌂</span><span>▤</span><span>✓</span><span>◇</span>
                    <i />
                    <span>?</span>
                  </aside>
                  <div className="lesson-area">
                    <div className="lesson-meta"><span>Модуль 2 · Урок 4</span><b>65%</b></div>
                    <div className="progress-line"><i /></div>
                    <p className="lesson-kicker">ПРАКТИЧЕСКИЙ ШАГ</p>
                    <h2>Создаём поступление<br />товаров</h2>
                    <div className="task-card">
                      <span className="task-number">03</span>
                      <div><b>Откройте раздел «Покупки»</b><p>Выберите пункт «Поступление (акты, накладные, УПД)».</p></div>
                    </div>
                    <button className="demo-button" type="button">Шаг выполнен <span>→</span></button>
                  </div>
                </div>
              </div>
              <div className="mentor-card">
                <div className="mentor-avatar">AI</div>
                <div><b>Подсказка наставника</b><p>Если пункт не виден, проверьте выбранный раздел слева.</p></div>
              </div>
              <div className="xp-card"><b>+25 XP</b><span>Практика завершена</span></div>
            </div>
          </div>
          <div className="container trust-row"><span>ТЕОРИЯ</span><i>становится</i><span>ДЕЙСТВИЕМ</span><i>а действие —</i><span>НАВЫКОМ</span></div>
        </section>

        <section className="problem-section section" id="problem">
          <div className="container">
            <div className="section-head split-head" data-reveal>
              <div><span className="section-index">01 / ПРОБЛЕМА</span><h2>Диплом есть.<br />Уверенности в работе — <em>нет.</em></h2></div>
              <p>Студенты знают проводки и счета, но часто впервые сталкиваются с реальной логикой 1С уже на стажировке. Работодателю приходится доучивать специалиста с нуля.</p>
            </div>
            <div className="gap-visual" data-reveal>
              <div className="gap-side theory-side"><span className="gap-label">В АУДИТОРИИ</span><strong>Теория</strong><ul><li>План счетов</li><li>Типовые проводки</li><li>Документы и регистры</li></ul></div>
              <div className="gap-center"><span>РАЗРЫВ</span><div className="gap-line"><i /><i /></div><b>?</b><p>Недостаточно<br />практики в интерфейсе</p></div>
              <div className="gap-side work-side"><span className="gap-label">НА РАБОТЕ</span><strong>Практика</strong><ul><li>Найти нужный документ</li><li>Заполнить без ошибок</li><li>Проверить результат</li></ul></div>
            </div>
          </div>
        </section>

        <section className="solution-section section" id="solution">
          <div className="container solution-grid">
            <div className="solution-copy" data-reveal>
              <span className="section-index">02 / РЕШЕНИЕ</span>
              <h2>ИБИ соединяет знания <em>с действием.</em></h2>
              <p>Платформа сопровождает пользователя от объяснения темы до самостоятельного выполнения операции. Каждый шаг можно увидеть, повторить и закрепить.</p>
              <ul className="check-list"><li><span>✓</span> Безопасная среда для первых ошибок</li><li><span>✓</span> Обратная связь в момент затруднения</li><li><span>✓</span> Понятный маршрут от простого к сложному</li></ul>
            </div>
            <div className="solution-stack" data-reveal>
              <div className="stack-card stack-back"><span>04</span><b>Закрепить навык</b></div>
              <div className="stack-card stack-mid"><span>03</span><b>Получить обратную связь</b></div>
              <div className="stack-card stack-front"><span>02</span><div><small>ПРАКТИКА</small><b>Сделать самому</b><p>Пошагово, в реальном интерфейсе учебной версии</p></div><strong>→</strong></div>
              <div className="stack-card stack-top"><span>01</span><b>Понять логику</b><i>6 мин</i></div>
            </div>
          </div>
        </section>

        <section className="learning-section section" id="learning">
          <div className="container">
            <div className="section-head centered" data-reveal><span className="section-index">03 / КАК ПРОХОДИТ ОБУЧЕНИЕ</span><h2>Один понятный путь<br /><em>к реальному навыку</em></h2></div>
            <div className="journey" data-reveal>
              {steps.map((step, index) => <div className="journey-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><i>{['◎','◫','↗','✦','✓','↟'][index]}</i><b>{step}</b>{index < steps.length - 1 && <em>→</em>}</div>)}
            </div>
            <p className="journey-note" data-reveal>Каждый новый модуль опирается на уже освоенные действия — так формируется устойчивая практика, а не набор разрозненных инструкций.</p>
          </div>
        </section>

        <section className="features-section section" id="features">
          <div className="container">
            <div className="section-head split-head" data-reveal><div><span className="section-index">04 / ВОЗМОЖНОСТИ</span><h2>Всё, чтобы<br /><em>получилось.</em></h2></div><p>Инструменты ИБИ выстроены вокруг главной задачи — помочь пользователю освоить работу самостоятельно и не потерять мотивацию.</p></div>
            <div className="feature-grid">
              {features.map((item, index) => <article className={`feature-card feature-${index + 1}`} key={item.n} data-reveal><span className="feature-number">{item.n}</span><div className="feature-symbol" aria-hidden="true">{['→','▧','AI','✓','↗','✦'][index]}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="audience-section section" id="audience">
          <div className="container">
            <div className="section-head centered" data-reveal><span className="section-index">05 / ДЛЯ КОГО</span><h2>Платформа для тех,<br />кто <em>учит и учится</em></h2></div>
            <div className="audience-list">
              {audiences.map(([n, title, text]) => <article className="audience-row" key={n} data-reveal><span>{n}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↗</i></article>)}
            </div>
          </div>
        </section>

        <section className="benefits-section section" id="benefits">
          <div className="container benefits-grid">
            <div className="benefits-title" data-reveal><span className="section-index">06 / ПРЕИМУЩЕСТВА</span><h2>Быстрее от первого урока — <em>к уверенной работе.</em></h2></div>
            <div className="benefits-list" data-reveal>
              <div><span>01</span><section><h3>Практика в центре</h3><p>Не просто прочитать, а выполнить каждую операцию самостоятельно.</p></section></div>
              <div><span>02</span><section><h3>Понятный старт</h3><p>Простой язык и небольшие шаги снижают страх перед сложным интерфейсом.</p></section></div>
              <div><span>03</span><section><h3>Современный опыт</h3><p>Чистый интерфейс помогает сосредоточиться на задаче, а не на поиске кнопок.</p></section></div>
              <div><span>04</span><section><h3>Быстрее адаптация</h3><p>Выпускник раньше начинает решать рабочие задачи и требует меньше сопровождения.</p></section></div>
            </div>
          </div>
        </section>

        <section className="status-section section" id="status">
          <div className="container status-card" data-reveal>
            <div className="status-top"><span className="live-dot"><i /> ТЕКУЩИЙ СТАТУС</span><b>2026</b></div>
            <div className="status-main"><h2>Создаём и проверяем<br />первую версию продукта.</h2><p>Проект находится на стадии разработки и тестирования MVP.</p></div>
            <div className="roadmap"><div className="done"><span>✓</span><b>Концепция</b><small>готово</small></div><div className="active"><span>02</span><b>MVP</b><small>в работе</small></div><div><span>03</span><b>Пилот</b><small>следующий этап</small></div><div><span>04</span><b>B2B-партнёрства</b><small>масштабирование</small></div></div>
          </div>
        </section>

        <section className="contact-section" id="contacts">
          <div className="container contact-inner" data-reveal>
            <div><span className="section-index">07 / КОНТАКТЫ</span><h2>Давайте сделаем<br />практическое обучение<br /><em>доступнее.</em></h2></div>
            <div className="contact-card">
              <p>Открыты к пилотным запускам, партнёрствам с образовательными организациями и диалогу с экспертами.</p>
              <div className="contact-fields">
                <div><span>ОСНОВАТЕЛЬ</span><b>Имя основателя</b></div>
                <a href="https://t.me/username" target="_blank" rel="noreferrer"><span>TELEGRAM</span><b>@username</b><i>↗</i></a>
                <a href="mailto:hello@example.ru"><span>EMAIL</span><b>hello@example.ru</b><i>↗</i></a>
              </div>
              <small>Замените данные-заполнители на актуальные перед публикацией заявки.</small>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container footer-inner"><a className="brand footer-brand" href="#top"><span className="brand-mark"><i /><i /><i /></span><span>ИБИ</span></a><p>Интерактивная образовательная платформа</p><a href="#top">Наверх ↑</a></div></footer>
    </>
  );
}
