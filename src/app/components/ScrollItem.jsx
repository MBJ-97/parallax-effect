import React from 'react'

export default function ScrollItem({num}) {
  return (
    <>
        <div className='flex'>
            <div className="text flex flex-col">
                <h1>{num}</h1>
                <h2>Title of the section</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Porro sapiente voluptatum voluptatem earum nam reprehenderit modi ipsa 
                    dolorem maiores laborum possimus distinctio aliquid aut facilis rem 
                    velit,
                </p>
            </div>
            <img src="https://placehold.co/600x400" alt="phldr" />
        </div>
    </>
  )
}
