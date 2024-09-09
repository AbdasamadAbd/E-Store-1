import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      // if this cat is allready in the category array then remove it in that array 
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  // useEffect(() => {
  //   console.log(category);
  // },[category])

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }
  

  const applyFilter = () => {
    let productsCopy = products.slice();

    // searching
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    // filter by cat and subCat 
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    // sorting products
    if (sortType !== "relavent") {
      // let fpCopy = productsCopy.slice();
  
      switch (sortType) {
        case "low-high" :
          productsCopy = productsCopy.sort((a,b)=> (a.price - b.price));
          break ;
          
        case "high-low" :
          productsCopy = productsCopy.sort((a,b)=> (b.price - a.price));
          break ;
  
      }
    }
    
    // if we do not select any cat or subCat or sortType then it display the original prodctsCopy
    setFilterProducts(productsCopy)

  }

  // const sortProducts = () => {
  //   let fpCopy = filterProducts.slice();

  //   switch (sortType) {
  //     case "low-high" :
  //       setFilterProducts(fpCopy.sort((a,b)=> (a.price - b.price)));
  //       break ;
        
  //     case "high-low" :
  //       setFilterProducts(fpCopy.sort((a,b)=> (b.price - a.price)));
  //       break ;

  //     default :
  //       applyFilter();
  //       break ;
  //   }

  // }


  useEffect(() => {
    applyFilter();
  },[category, subCategory, search, showSearch, sortType])


  // this approch is not work perfecty becouse if we change the cat or subcat or search it will not apply the sorting func sortingProducts() ,
  // and if we want the sort low-high and we are already in low-high we must update the sortType by changing the select option to anything then select the low-high again to execute the sort func becouse we update that state by onChange event in the select element
  // ==> so mk the approch sorting products in applyFilter() func and add the sortType in the useEffect DependencyList .
  // useEffect(() => {
  //   sortProducts();
  // },[sortType])


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      
      {/* filter Options */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >FILTER
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter && "rotate-90"}`} alt="" />
        </p>
        
        {/* category Filter */}
        <div className={`${showFilter? "" : "hidden"} sm:block border border-gray-300 pl-5 py-3 mt-6`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>  
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Men"} className="w-3" onChange={toggleCategory} />
              Men
            </p>

            <p className="flex gap-2">
              <input type="checkbox" value={"Women"} className="w-3" onChange={toggleCategory} />
              Women
            </p>

            <p className="flex gap-2">
              <input type="checkbox" value={"Kids"} className="w-3" onChange={toggleCategory} />
              Kids
            </p>
          </div>      
        </div>
        
        {/* subCategory Filter */}
        <div className={`${showFilter? "" : "hidden"} sm:block border border-gray-300 pl-5 py-3 my-5`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>  
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Topwear"} className="w-3" onChange={toggleSubCategory} />
              Topwear
            </p>

            <p className="flex gap-2">
              <input type="checkbox" value={"Bottomwear"} className="w-3" onChange={toggleSubCategory} />
              Bottomwear
            </p>

            <p className="flex gap-2">
              <input type="checkbox" value={"Winterwear"} className="w-3" onChange={toggleSubCategory} />
              Winterwear
            </p>
          </div>      
        </div>
      
      </div>

      {/* Right Side */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text_1={"ALL"} text_2={"COLLECTIONS"} />
          {/* Product sort */}
          <select onChange={(e)=> setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
              filterProducts.map((item, index) => (
                  <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection