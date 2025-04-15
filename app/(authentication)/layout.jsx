import React from 'react'

function layout({children}) {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      {children}
    </div>
  )
}

export default layout
