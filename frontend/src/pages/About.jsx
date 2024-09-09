import { assets } from "../assets/frontend_assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text_1={"ABOUT"} text_2={"US"} />
      </div>
      
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" alt="" />
        
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, officia excepturi provident obcaecati omnis veniam quod? Maxime laborum itaque delectus ab! Labore, numquam dolores! Saepe est consectetur pariatur provident aliquid.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores amet et ipsum libero? Pariatur, asperiores porro vel labore praesentium, fugiat quia quis temporibus aut expedita deleniti vero? Temporibus voluptas minus id beatae nam architecto nihil incidunt ut quam reprehenderit quos eaque vel, similique, deleniti odio quaerat numquam corrupti iusto.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus corporis odit saepe, ut illum quidem iure unde dignissimos eius praesentium magnam cumque accusamus id laboriosam, tempora architecto facilis velit adipisci? Veritatis natus ipsam autem consectetur necessitatibus nam repellendus, veniam nostrum placeat qui. Temporibus, eos ea nulla odit veniam officia. Placeat, maxime consequuntur quam aliquam aperiam inventore culpa incidunt dolor accusamus, ducimus eaque tempore architecto sed qui delectus suscipit odio hic in reprehenderit saepe at ex alias? Enim, cupiditate in.</p>
        </div>
      </div>
      
      <div className="text-xl py-4">
        <Title text_1={"WHY"} text_2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance :</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita sapiente iure? Quia excepturi asperiores suscipit eligendi corrupti quo aut exercitationem, dolor provident voluptatem fugiat soluta repudiandae molestias ipsam ipsa.</p>
        </div>

        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Convenience :</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, odio animi fuga ipsa exercitationem sequi accusamus consequuntur. Nobis neque non beatae hic est rem architecto voluptates. Nihil commodi cupiditate sapiente sint, blanditiis nam natus ipsum libero, tempore expedita, perferendis esse?</p>
        </div>

        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service :</b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In similique quibusdam dolorem corporis omnis fugiat atque nam, adipisci voluptas ut accusamus voluptates, laboriosam impedit dolore, labore eaque molestiae incidunt ratione.</p>
        </div>
      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default About