import React, {useState} from "react";
import Header from "./Components/Header"
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import AboutMe from "./Components/aboutme/aboutMe";
import Projects from "./Components/projects/projects";
import ContactMe from "./Components/contactMe";

function App() {
  const [screens, setScreens] = useState([
    {id:0, name:"contentScreen", route: <Content />, isActive:true},
    {id:1, name:"aboutMeScreen", route: <AboutMe />, isActive:false},
    {id:2, name:"projectsScreen", route: <Projects />, isActive:false},
    {id:3, name:"contactMeScreen", route: <ContactMe />, isActive:false}
  ])
  
  const [screen, setScreen] = useState(screens[0]);

  function toggleScreen(event){
    const screenActualName = event.target.id
    setScreens(prevScreens => {
      const newArrayScreens = []
      for (let i = 0 ; i<prevScreens.length; i++){
        const actualScreen = prevScreens[i]
        if(actualScreen.name === screenActualName ){
          const updateScreen = {
              id: actualScreen.id,
              name: actualScreen.name,
              route: actualScreen.route,
              isActive: !actualScreen.isActive
          }
          setScreen(() => updateScreen)
          newArrayScreens.push(updateScreen)
          }
          else {
            newArrayScreens.push(actualScreen)
          }
      }
      return newArrayScreens
    })
  }


  return (
    <section className="App">
      <div className="MainCard">
        <Header handleClick={toggleScreen} screen={screen}/>
        {screen.route}
        <Footer />
      </div>
    </section>
  );
}

export default App;
