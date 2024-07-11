import './TechStack.css';
import TechStackIconContainer from './TechStackIconContainer/TechStackIC';
import {techstackRowOne, techstackRowTwo} from '../../constants';



function TechStack(){
    return (
        <div className='techstack_container'>
       <p className='techstack_title'>Tech Stack</p>
       <div className='techstack_icon_container'>

        {
          techstackRowOne.map(function(element, index){
            console.log('t is : ',element)
            console.log('t is : ',index)
              return (
                <TechStackIconContainer
                key={element.iconName}
                title={element.iconName}
                altProperty = {element.iconAltProperty}
                image={element.iconImage}
                  />
                
              )

          })
        }
        </div>
        <div className='techstack_icon_container'>

{
  techstackRowTwo.map(function(element, index){
    console.log('t is : ',element)
    console.log('t is : ',index)
      return (
        <TechStackIconContainer
        key={element.iconName}
        title={element.iconName}
        altProperty = {element.iconAltProperty}
        image={element.iconImage}
          />
        
      )

  })
}
</div>
      </div>
    )
  }
export default TechStack;