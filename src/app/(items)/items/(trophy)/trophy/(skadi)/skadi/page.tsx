import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/trophy/skadi.png" alt="جام اسکادی" className="m-auto"/>
          <img src="/images/items/trophy/9.jpg" alt="تصویر جام شماره نه" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/laregas/ultimate"><img src="/images/items/laregas/ultimate.png" alt="نهایی لارگاس" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="سنگ لارگاس" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/ultimate"><img src="/images/items/laregas/ultimate.png" alt="نهایی لارگاس" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="سنگ لارگاس" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/point"><img src="/images/items/laregas/point.png" alt="نقطه لارگاس" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="سنگ لارگاس" /></td>
            </tr>
         
          </thead>
        </table>
      </div>
        </div>
    )
}