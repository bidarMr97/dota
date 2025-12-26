import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="/images/items/enchanted/satanic.png" alt="آیتم جادویی ساتانیک" className="m-auto"/>
          <img src="/images/items/enchanted/10.jpg" alt="نمای آیتم جادویی ساتانیک" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/enchanted/helm"><img src="/images/items/enchanted/helm.png" alt="کلاه‌خود جادویی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/enchanted/m.png" alt="مواد آیتم جادویی" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/reaver"><img src="/images/items/laregas/reaver.png" alt="آیتم لارگاس ریور" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="مواد لارگاس" /></td>
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
