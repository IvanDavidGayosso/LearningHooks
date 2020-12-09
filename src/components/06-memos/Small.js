import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Se disparo otra vez :(');

    return (
    <small> { value } </small>
    )
})
