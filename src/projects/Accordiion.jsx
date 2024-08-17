import React, { useEffect, useState } from 'react'
import data from '../projects/accordiondata'

const Accordiion = () => {
    const [info, setInfo] = useState([])
    const [selected, setselected] = useState(null)

    const handleSingle = (id) => {
        console.log(id);
        setselected(id === selected ? null : id)
    }

    return (
        <div className="w-[50vw] mt-12 mx-auto border rounded-lg bg-white shadow-xl text-xl">
            <div>
                {data.map((item) => {
                    return (
                        <>
                            <div className='my-3 px-4' onClick={() => { handleSingle(item.id) }} >
                                <div className="shadow-inner cursor-pointer">
                                    <h1 className='font-bold inline ' >{item.question}</h1><span className='  float-right mr-12'>+</span>
                                </div>
                            </div>
                            {
                                selected === item.id ? (
                                    <>
                                        <div className='transition-all duration-1000 delay-300 mb-5  px-4' >{item.answer}</div>
                                    </>
                                ) : (<></>)
                            }

                        </>
                    );
                })}

            </div>
        </div>

    )
}

export default Accordiion





// {/* import React, { useState } from 'react';
// import data from './data';

// const Accordion = () => {
//     const [selected, setSelected] = useState([]);

//     const handleSingle = (id) => {
//         if (selected.includes(id)) {
//             setSelected(selected.filter((itemId) => itemId !== id));


//         } else {
//             setSelected([...selected, id]);
//             console.log('else', selected);
//         }
//     };

//     return (
//         <div className="w-[50vw] mt-12 mx-auto border rounded-lg bg-white shadow-xl text-xl">
//             <div>
//                 {data.map((item) => (
//                     <div key={item.id}>
//                         <div className='my-3 px-4 cursor-pointer' onClick={() => handleSingle(item.id)}>
//                             <div className="shadow-inner">
//                                 <h1 className='font-bold inline'>{item.question}</h1>
//                                 <span className='float-right mr-12'>{selected.includes(item.id) ? '-' : '+'}</span>
//                             </div>
//                         </div>
//                         <div
//                             className={`transition-all duration-300 ease-in-out overflow-hidden ${selected.includes(item.id) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//                                 }`}
//                         >
//                             {selected.includes(item.id) && (
//                                 <div className='mb-5 px-4'>
//                                     {item.answer}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Accordion;
//  */}




