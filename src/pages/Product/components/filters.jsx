import "./filter.css"
const Filter = () =>{
    return (
        <div className="filter-container">
        <div className="filter-header">
            <h3>Filters</h3>
            <p className="links">Clear All</p>
        </div>

        <div className="filter-category center-hr">
            <h4 className="header">CATEGORY</h4>
            <div className="category-main">
               <label className="select-input">
                   <input type="checkbox" className="checkbox-input" name="light"/>
                   <span className="inp-text">Mobiles</span>
               </label>
               <label className="select-input">
                   <input type="checkbox" className="checkbox-input" name="light"/>
                   <span className="inp-text">Laptops</span>
               </label>
               <label className="select-input">
                   <input type="checkbox" className="checkbox-input" name="light"/>
                   <span className="inp-text">Television</span>
               </label>
               <label className="select-input">
                   <input type="checkbox" className="checkbox-input" name="light"/>
                   <span className="inp-text">Home Appliances</span>
               </label>
            </div>
        </div>

        <div className="filter-price center-hr" >
            <h4 className="header">PRICE</h4>
            <div className="price-main ">
               <input type="range" className="slider" name="slider-input" min="500" max="5000"/>
               <div className="slider-value">
                   <p>500</p>
                   <p>1000</p>
                   <p>5000</p>
               </div>
           </div>
        </div>
        <div className="filter-rating center-hr">
            <h4 className="header">CUSTOMER RATING</h4>
            <div className="rating-main ">
               <label className="select-input">
                   <input type="radio" className="radio-input" name="rating"/>
                   <span className="inp-text">4 <i className="fa-solid fa-star"></i> & above</span>
               </label>
               <label className="select-input">
                   <input type="radio" className="radio-input" name="rating"/>
                   <span className="inp-text">3 <i className="fa-solid fa-star"></i> & above</span>
               </label>
               <label className="select-input">
                   <input type="radio" className="radio-input" name="rating"/>
                   <span className="inp-text">2 <i className="fa-solid fa-star"></i> & above</span>
               </label>
               <label className="select-input">
                   <input type="radio" className="radio-input" name="rating"/>
                   <span className="inp-text">1 <i className="fa-solid fa-star"></i> & above</span>
               </label>
            </div>
        </div>
        <div className="filter-sort center-hr">
            <h4 className="header">SORT BY</h4>
            <div className="sort-main ">
               <label className="select-input">
                   <input type="radio" className="radio-input" name="sort"/>
                   <span className="inp-text">Popularity </span>
               </label>
               <label className="select-input">
                   <input type="radio" className="radio-input" name="sort"/>
                   <span className="inp-text">Price--Low to High </span>
               </label>
               <label className="select-input">
                   <input type="radio" className="radio-input" name="sort"/>
                   <span className="inp-text">Price--High to Low </span>
               </label>
               <label className="select-input">
                   <input type="radio" className="radio-input" name="sort"/>
                   <span className="inp-text">Newest First</span>
               </label>
            </div>
        </div>
    </div>
    
    );
} 
export { Filter} ;