import React, { Component } from 'react';
// import {connect} from "react-redux";
// import {goPage, nextPage, prevPage} from "../../actions";

class ProductPagination extends Component {


    onPage(n) {
        this.props.onGoPage(n);
    }

    isOnLastPage() {
        // console.log(this.props.perPage * this.props.currentPage, this.props.totalItemsCount);
        return this.props.perPage * this.props.currentPage >= this.props.totalItemsCount;
    }

    totalPages() {
        return Math.ceil(this.props.totalItemsCount / this.props.perPage) || 0;
    }

    getMin() {
        return ((this.props.perPage * this.props.currentPage) - this.props.perPage) + 1;
    }

    getMax() {
        let max = this.props.perPage * this.props.currentPage;
        if (max > this.props.totalItemsCount) {
            max = this.props.totalItemsCount;
        }
        return max;
    }
    onPrev = () => {
        this.props.onPrevPage();
    }

    onNext = () => {
        this.props.onNextPage();
    }


    getPages = () => {
        const c = Math.ceil(this.props.totalItemsCount / this.props.perPage);
        const p = this.props.currentPage || 1;
        const pagesToShow = this.props.pagesToShow || 9;
        const pages = [];
        pages.push(p);
        const times = pagesToShow - 1;
        for (let i = 0; i < times; i++) {
            if (pages.length < pagesToShow) {
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                }
            }
            if (pages.length < pagesToShow) {
                if (Math.max.apply(null, pages) < c) {
                    pages.push(Math.max.apply(null, pages) + 1);
                }
            }
        }
        pages.sort((a, b) => a - b);
        return pages;
    }




    render() {
        console.log("tjiro", this.props.totalItemsCount);
        console.log(this.props);

        const pages = this.getPages().map(pageNum => {

            let buttonClass = 'page-item';

            if (pageNum === this.props.currentPage) {
                buttonClass += ' active';
            }

            return (<li className={buttonClass} onClick={() => { this.onPage(pageNum) }}><button className="page-link" >{pageNum}</button></li>);
        });

        let prevButtonClass = 'page-item';

        if (this.props.currentPage === 1) {
            prevButtonClass += ' disabled';
        }

        const prevButton = (<li className={prevButtonClass}>
            <button
                className="page-link" onClick={this.onPrev} tabIndex="-1">
                &laquo;
                {/* <svg class="MuiSvgIcon-root MuiPaginationItem-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                </svg> */}
            </button>
        </li>);

        let nextButtonClass = 'page-item';

        if (this.isOnLastPage()) {
            nextButtonClass += ' disabled';
        }

        const nextButton = (
            <li className={nextButtonClass}>
                <button
                    disabled={this.isOnLastPage()}
                    className="page-link" onClick={this.onNext}>
                    &raquo;
                    {/* <svg class="MuiSvgIcon-root MuiPaginationItem-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </svg> */}
                </button>
            </li>
        );



        return (
            <nav aria-label="...">
                <ul className="pagination">
                    {prevButton}
                    {pages}
                    {nextButton}
                </ul>
            </nav>
        );
    }
}


// const mapStateToProps = (state) => {
//     return {
//         ...state.pagination,
//         totalItemsCount: state.shop.products.length,
//     }
// };y

export default ProductPagination;


// import React from 'react'
// import Pagination from '@material-ui/lab/Pagination';
// function ProductPagination() {
//     return (
//         <div style={{ margin: "auto", marginTop: 70, display: "flex", justifyContent: "center" }}>
//             <Pagination count={10} color="secondary" />
//         </div>
//     )
// }

// export default ProductPagination
