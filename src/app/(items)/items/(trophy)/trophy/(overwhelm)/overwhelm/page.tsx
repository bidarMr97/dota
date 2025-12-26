import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
  return (

    <div>
      <img src="/images/items/trophy/overwhelm.png" alt="جام غلبه" className="m-auto" />
      <img src="/images/items/trophy/3.jpg" alt="تصویر جام شماره سه" className="lg:w-[450px] m-auto border-6 border-red-500"/>
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/cache/blink"><img src="/images/items/cache/blink.png" alt="چشمک مخزن" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="مواد مخزن" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/reaver"><img src="/images/items/laregas/reaver.png" alt="دروگر لارگاس" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="سنگ لارگاس" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="/images/items/1.png" alt="آیتم شماره یک" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/trophy/m.png" alt="مواد جام" /></td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}