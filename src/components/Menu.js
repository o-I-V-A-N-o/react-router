function Menu() {
  return (
    <nav class="menu">
      <a class={window.location.pathname == '/' ? 'menu__item menu__item-active' : 'menu__item'} href="/">Главная</a>
      <a class={window.location.pathname == '/drift' ? 'menu__item menu__item-active' : 'menu__item'} href="/drift">Дрифт-такси</a>
      <a class={window.location.pathname == '/timeattack' ? 'menu__item menu__item-active' : 'menu__item'} href="/timeattack">Time Attack</a>
      <a class={window.location.pathname == '/forza' ? 'menu__item menu__item-active' : 'menu__item'} href="/forza">Forza Karting</a>
    </nav>
  )
}

export default Menu;
