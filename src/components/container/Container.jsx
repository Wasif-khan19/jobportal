/* eslint-disable react/prop-types */

function Container({children}) {
    return (
      <div className='max-w-7xl mx-auto px-4 md:px-10' > 
      {children}
      </div>
    )
  }
  
  export default Container