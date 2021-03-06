import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CategoriesFilters from './CategoriesFilters';
import ColorsFilters from './ColorsFilters';
import SizesFilters from './SizesFilters';
import "../assets/styles/style.css";

function SidebarFilters( {filterData}) {
    const [openNavCategories, setOpenNavCategories] = useState(true);
    const updateOpenNavCategories = () => setOpenNavCategories(openNavCategories => !openNavCategories);

    const [openNavColors, setOpenNavColors] = useState(true);
    const updateOpenNavColors = () => setOpenNavColors(openNavColors => !openNavColors);

    const [openNavSizes, setOpenNavSizes] = useState(true);
    const updateOpenNavSizes = () => setOpenNavSizes(openNavSizes => !openNavSizes);

    return (
        <div>
            <div className="dropdown-categories">
                <div className="clearfix-categories">
                    <span className="filter-name">Categories</span>
                    <span style={{ float: "right", cursor: "pointer" }}>{openNavCategories ? <ExpandLessIcon onClick={updateOpenNavCategories} /> : <ExpandMoreIcon onClick={updateOpenNavCategories} />}</span>
                </div>
                <nav style={{ marginTop: 13, transition: "0.3s" }} className={openNavCategories ? 'display-nav-block' : 'display-nav-none'}>
                    <CategoriesFilters categories={filterData.categories}/>
                </nav>
            </div>

            <div className="dropdown-categories">
                <div className="clearfix-categories">
                    <span className="filter-name">Colors</span>
                    <span style={{ float: "right", cursor: "pointer" }}>{openNavColors ? <ExpandLessIcon onClick={updateOpenNavColors} /> : <ExpandMoreIcon onClick={updateOpenNavColors} />}</span>
                </div>
                <nav style={{ marginTop: 13, transition: "0.3s" }} className={openNavColors ? 'display-nav-block' : 'display-nav-none'}>
                    <ColorsFilters Colors = {filterData.colors} />
                </nav>
            </div >

            <div className="dropdown-categories">
                <div className="clearfix-categories">
                    <span className="filter-name">Sizes</span>
                    <span style={{ float: "right", cursor: "pointer" }}>{openNavSizes ? <ExpandLessIcon onClick={updateOpenNavSizes} /> : <ExpandMoreIcon onClick={updateOpenNavSizes} />}</span>
                </div>
                <nav style={{ marginTop: 13, transition: "0.3s" }} className={openNavSizes ? 'display-nav-block' : 'display-nav-none'}>
                    <SizesFilters buttonSizes = {filterData.sizes} />
                </nav>
            </div>
        </div >
    )
}
export default SidebarFilters