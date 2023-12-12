import React from 'react'
import {foodList} from '../assets/data'
import { useDispatch, useSelector } from 'react-redux'
import {listAction} from '../redux/reducer'
import { listSelector } from '../redux/reducer'
// import { listReducer } from '../redux/reducer'

const FoodItem = () => {

  const dispatch = useDispatch();

  const totalList = useSelector(listSelector)

  function handleAddClick(index){
    dispatch(listAction.add(index))
  } 

  return (
    <div>
      {foodList.map((item, index)=>{
        return <div key={index}>
            <div>{item.itemName}</div>
            <div>{item.price}</div>
            <button onClick={()=>handleAddClick(index)}>Add</button>
        </div>
      })}
      <hr/>
      <div>
        {totalList.map((item, index)=>{
          return <div key={index}>
            <p>{item.itemName}</p><p>{item.price}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default FoodItem
