import React from 'react'
import Card from './Card'
import './CardList.css'
const CardsList = ({ state }) => {

    return (
        <div className='dataGrid'>
            {
                state.propertyData.map(item => (
                    <Card key={item.id} className='dataItem' item={item} state={state} />
                ))
            }
        </div>

    )
}

export default CardsList