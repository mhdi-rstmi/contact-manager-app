import React, { useState, useEffect } from 'react';


const Time = () => {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);
    return (
        <>

            <div className='container'>
                <div className='row my-20'>
                    <div className='d-flex justify-content-between'>
                        <h2 className='text-white'>
                            {dateState.toLocaleDateString('fa-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: "numeric"
                            })}
                        </h2 >

                        <h2 className='text-white'>
                            {dateState.toLocaleString('en-Us', {
                                hour: 'numeric',
                                minute: 'numeric',
                                second: "numeric",
                                hour12: false,
                            })}

                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Time;