import React from 'react'
import Person from './Person'
function List() {
   // const names=['Bruce','Clark','Diana']
   // const NameList= names.map(name =><h2>{name}</h2>)
   const persons=[
    {
        id:1,
        name:'Bruce',
        age:'30',
        skill:'React'

    },
    {
        id:2,
        name:'Ram',
        age:'30',
        skill:'java'

    },
    {
        id:3,
        name:'kurmi',
        age:'30',
        skill:'php'

    },
    {
        id:4,
        name:'Bivek',
        age:'30',
        skill:'python'

    }
   ]
   const namelist=persons.map(person=>(<Person  person={person} />
   )
   )
  return <div> {namelist} </div>
  
}

export default List