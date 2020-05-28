import React from 'react';
import '../assets/styles/components/Categories.scss'
const Categories = ({children, title}) => (
    <div className ="carousel">
        <h3 className= "carousel__title">{title}</h3>
        {children}
    </div>
    
)

export default Categories;