 import React, {useState} from 'react';

 const Accordion = ({items})=>{

    const [activeIndex, setActiveIndex]=useState(null);

    const onTitleClick=(index)=>{
        setActiveIndex(index);
    };

    // The map() method creates a new array with the results of calling a function for every array element.
    const renderedItems =items.map((item,index)=>{

        const active= index===activeIndex ? 'active': '';


         // we used arrow function as callback for event listeners as otherwise normal function 
                // will be called every time dom is rendered but only need to call function when clicked
        return (<React.Fragment key={item.title}>

            <div className={`title ${active}`} onClick={()=> onTitleClick(index)}>

                <i className="dropdown icon"></i>
                {item.title}
            </div>

            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        );
    });

     return (<div className="ui styled accordion">
         {renderedItems}
      
     </div>);
 };

 export default Accordion;