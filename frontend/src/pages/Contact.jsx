import { assets } from "../assets/frontend_assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text_1={"CONTACT"} text_2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.about_img} className="w-full md:max-w-[480px]" alt="" />
        
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">45326 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className="text-gray-500">Tel : (555) 555-7688 <br /> Email : admin@Store.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at Store</p>
          <p className="text-gray-500">Learn more about our teams and jobs openings</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default Contact