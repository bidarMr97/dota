import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="/images/items/gateway/boots.png" alt="کفش دروازه‌ای" className="m-auto"/>
          <img src="/images/items/gateway/1.jpg" alt="نمای آیتم کفش دروازه‌ای" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/cache/speed"><img src="/images/items/cache/speed.png" alt="آیتم کش سرعت" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="مواد آیتم کش" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="/images/items/1.png" alt="آیتم ناشناخته" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gateway/m.png" alt="مواد آیتم دروازه‌ای" /></td>
            </tr>
          </thead>
        </table>
      </div>

        </div>
    )
}
