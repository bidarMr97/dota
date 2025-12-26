import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/trophy/halberd.png" alt="تبر نیزه‌ای" className="m-auto"/>
          <img src="/images/items/trophy/1.jpg" alt="تصویر جام شماره یک" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/enchanted/sang"><img src="/images/items/enchanted/sang.png" alt="سنگ جادویی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/enchanted/m.png" alt="مواد جادویی" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/talisman"><img src="/images/items/laregas/talisman.png" alt="طلسم لارگاس" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="سنگ لارگاس" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}