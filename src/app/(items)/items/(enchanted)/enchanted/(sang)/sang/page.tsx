import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="/images/items/enchanted/sang.png" alt="آیتم جادویی سنگ" className="m-auto"/>
          <img src="/images/items/enchanted/11.jpg" alt="نمای آیتم جادویی سنگ" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gryla/belt"><img src="/images/items/gryla/belt.png" alt="کمربند گریلا" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="مواد گریلا" /></td>
            </tr>
            <tr>
              <td><a href="/items/gryla/ogre"><img src="/images/items/gryla/ogre.png" alt="آیتم گریلا اوگر" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="مواد گریلا" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="/images/items/1.png" alt="آیتم ناشناخته" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/enchanted/m.png" alt="مواد آیتم جادویی" /></td>
            </tr>
          </thead>
        </table>
      </div>

        </div>
    )
}
