import React from 'react'
import cn from 'classnames';

function Modal({title, body,showModal,handleCloseModal, width,height,padding, margin}) {
    const allMappingClassNames = {
        [`w-[${width}px]`]: !!width,
        [`h-[${height}px]`]: !!height,
        [`p-${padding}`]: !!padding,
        [`m-[${margin}]`]: !!margin
    }
    const baseClassName = "fixed left-1/2 top-1/2  z-[1000] -translate-y-1/2 -translate-x-1/2 outline-none overflow-y-auto shadow-lg bg-white  rounded-sm transition-all duration-300 ease-in-out border border-borderGray border-1"
    
  return (
        
    showModal && (<div className={cn(allMappingClassNames,baseClassName)}>
        {title ? title : null}
        {body ? body: null}
    </div>))
    
  
}

export default Modal