import NavigationBar from "./components/Navbar";


const navigationItems = [
  {
    url: '/hello-world-page',
    title: 'Hello World Page'
  },
  {
    url: '/kiwi-page',
    title: 'Kiwi Page'
  },
]

const navBar = new NavigationBar()
navBar.render(navigationItems)

const url = window.location.pathname

// Note: import the federated modules dynamically (async)
if (url === '/hello-world-page') {
  import('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
    const HelloWorldPage = HelloWorldPageModule.default
    const helloWorldPage = new HelloWorldPage()
    helloWorldPage.render()
  })

} else if (url === '/kiwi-page') {
  import('KiwiApp/KiwiPage').then(KiwiPageModule => {
    const KiwiPage = KiwiPageModule.default
    const kiwiPage = new KiwiPage()
    kiwiPage.render()
  });

}
