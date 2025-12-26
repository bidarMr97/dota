import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/trophy/hex.png" alt="جام شش‌ضلعی" className="m-auto"/>
          <img src="/images/items/trophy/7.jpg" alt="تصویر جام شماره هفت" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/laregas/ultimate"><img src="/images/items/laregas/ultimate.png" alt="نهایی لارگاس" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="سنگ لارگاس" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/mystic"><img src="/images/items/laregas/mystic.png" alt="مرموز لارگاس" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="سنگ لارگاس" /></td>
            </tr>
            <tr>
              <td><a href="/items/cache/void"><img src="/images/items/cache/void.png" alt="خلأ مخزن" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="مواد مخزن" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}