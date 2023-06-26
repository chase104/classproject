import React,{useContext,useEffect} from 'react'

const PeoplePage = () => {
   const {peopleData,setPeopleData}= useContext(primaryContext);
   const display=peopleData.maps((people)=>{
        
   })

  return (
    <div>
      
    </div>
  )
}

export default PeoplePage
