import React from 'react';
import '../assets/styles/components/Categories.scss'
const Categories = ({children}) => (
    <div className ="carousel">
        <h3 className= "carousel__title">Mis upgrades</h3>
        {children}
    </div>
    
)

export default Categories;