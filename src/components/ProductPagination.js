import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
function ProductPagination() {
    return (
        <div style={{ marginTop: 70, display: "flex", justifyContent: "center" }}>
            <Pagination count={10} color="secondary" />
        </div>
    )
}

export default ProductPagination
