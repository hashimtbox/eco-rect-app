import React from 'react'
import "../assets/styles/style.css";

const categories = [
    {
        id: 1,
        name: "All",
        subcategories: []
    },
    {
        id: 2,
        name: 'Men',
        subcategories: ["Shirts", "Tshirts", "Pants"]
    },
    {
        id: 3,
        name: "Women",
        subcategories: ["Shirts", "Tshirts", "Pants", "Wears"]
    },
    {
        id: 4,
        name: 'Kids',
        subcategories: ["Shirts", "Tshirts", "Pants", "Wears"]
    },

]
function CategoriesFilters() {

    return (
        <>
            <ul className="nav-categories-ul">
                {categories.map(category => (
                    <li><a href="#">{category.name}</a>
                        <ul class="nav-subcategories-ul">
                            {category.subcategories.map(subcategory => (
                                <li><a href="#">{subcategory}</a></li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

        </>
    )
}
export default CategoriesFilters