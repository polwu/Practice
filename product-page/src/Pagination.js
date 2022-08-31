import React from 'react'

const Pagination = (props) => {

    const {currentPage, numOfPages, navigateToPage} = props;

    const pageNumbersArray = [];

    for (let i = 1; i <= numOfPages; i++){
        pageNumbersArray.push(i);
    }

  return (
    <div className='Pagination'>
        {pageNumbersArray.map(pageNumber => (
            <button
                key={pageNumber}
                onClick={() => navigateToPage(pageNumber)}
            >
                {pageNumber}
            </button>
        ))}
    </div>
  )
}

export default Pagination