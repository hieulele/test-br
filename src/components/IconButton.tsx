import React, { ForwardRefExoticComponent, SVGProps } from 'react';
interface Props {
    icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & { title?: string | undefined; titleId?: string | undefined; }>,
    lable: string
}
const IconButton = ({ icon: Icon, lable}: Props) => {
  return (
    <div>
        <button className="flex items-center space-x-2 hover:text-white">
            <Icon className="icon"/>
            <span>{lable}</span>
        </button>
    </div>
  )
}

export default IconButton