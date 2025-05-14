import React from 'react'

const MainContainer = ({ children, className }) => {
    return (
        <div className={`bg-white px-[5vw]  py-[1vw]  w-[100%] flex flex-col 
        justify-center gap-5 text-black ${className} max-md:pl-5 `}>
            {children}
        </div>
    )
}

export default MainContainer
