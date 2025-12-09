import './App.css'
import Card from './Components/Card'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import { Button } from './Components/ui/button'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from './Components/ui/navigation-menu'

function App() {

  return (
    <>
      {/* <div> */}
        {/* <div><Navbar /></div> */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Hero />
        <Button>Click</Button>
        <Header />

        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
          <h1 className='text-blue-600 dark:text-sky-400 border-2 p-4 text-center rounded-xl text-4xl'>
            Learn to Integrate TailwindCSS
          </h1>

          <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
            <Card 
              title = "Python Course" 
              buttonText='Explore'
              imageURL='https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg'
            />
            <Card 
              title='JavaScript Course' 
              buttonText='Buy Now'
            />
            <Card />
            <Card />
          </div>
        
        </div>
      {/* </div>  */}
    </>
  )
}

export default App
