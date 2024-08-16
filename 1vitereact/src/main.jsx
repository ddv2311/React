import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
      <div>
        <h1>ddv here!!</h1>
      </div>
    )
    
}
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click here to visit google'
// }//here its not working as these are our defined rules but react works diffrently

const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit google</a>
)//it works well
const anotherUser = "vyas"
const reactElement = React.createElement(
  'a'//tag
  ,
  {href:"https://google.com",target:'_blank'}//props
  ,
' click here to visit google '//children or thing you want to show
,
anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
 //its jst a function if I create my own then also it will work MyApp is my built function whereas App was also a function