import React from 'react'
function NameList() {
    const persons=[{
        id:1,
        firstname:'Swarna',
        age:24
      },
      {
        id:2,
        firstname:'Laxmi',
        age:22
      },
      {
        id:3,
        firstname:'Sara',
        age:25
      }
    ]
  const personList=persons.map(person=><h3></h3>)
  return <div>{NameList}</div>
}
export default NameList
