import Menu from "./Menu";

function DriftPage() {
  return (
    <div>
      <Menu />
      <div className="page">
        <article className="article">
          <h1 className="article__title">Дрифт-такси</h1>
          <p className="article__paragraph">
            Только ​на Сочи Автодроме вас ждет уникальная возможность
            промчаться по трассе Формулы 1 на максимально возможной
            скорости в управляемом заносе на легендарной «королеве дрифта» Nissan Silvia!
          </p>
          <p className="article__paragraph">
            Прокатитесь на дрифт-такси с вице-чемпионом Межконтинентального
            кубка по дрифту под эгидой FIA 2017 года Аркадием Цареградцевым и
            испытайте на себе, что значат скоростные постановки и эффектные заносы!
          </p>
        </article>
      </div>
    </div>
  )
}

export default DriftPage;
