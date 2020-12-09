import React, { useState , useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MemoHook = () => {
    
    const { counter , increment } = useCounter( 1000 );
    const [show, setShow] = useState(true);

    const procesoPesado = ( iteraciones ) => {

        for(let i=0; i < iteraciones; i ++){
            console.log('Ahí vamos...');
        }

        return `${ iteraciones } iteraciones realizadas`;
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: { counter } </h3>
            <hr />

            <p> { memoProcesoPesado } </p>

            <button 
                className='btn btn-primary'
                onClick={ (e) => increment()  }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
