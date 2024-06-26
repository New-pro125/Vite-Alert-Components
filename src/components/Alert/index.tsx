import './index.scss'
import {FC,ReactNode} from 'react';
import {X} from "lucide-react";
import  {alert}  from '../../types';
interface Iprops {
    type:alert;
    icon:ReactNode;
    title:string;
    description?:string;
    children?:ReactNode;
}
const Alert:FC<Iprops> = ({type="alert-error",icon,title,description,children}) => (
    <div className={type}>
        <div className="alert-header">
            <div className="title">
                {icon}
            <h4>{title}</h4>
            </div>
        <X className="close" size={20}/>
        </div>
    {children ? children : <p>{description}</p>}
    </div>
)
export default Alert;