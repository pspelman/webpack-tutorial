import "./Navbar.scss"
class NavigationBar {
  render(navigationItems) {
    const navItems = navigationItems.map(navItem => {
      return `
      <li>
      <a href="${navItem.url}">${navItem.title}</a>
    </li>
      `
    })

    const ul = document.createElement('ul')
    ul.innerHTML = navItems.join('')
    ul.classList.add('navigation-bar')
    document.querySelector('body').appendChild(ul)

  }
}


export default NavigationBar