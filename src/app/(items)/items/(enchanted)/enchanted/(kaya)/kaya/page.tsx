import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
  return (

    <div>
      <img src="/images/items/enchanted/kaya.png" alt="آیتم جادویی کایا" className="m-auto" />
      <img src="/images/items/enchanted/1.jpg" alt="نمای آیتم جادویی کایا" className="lg:w-[450px] m-auto border-6 border-red-500"/>
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gryla/staff"><img src="/images/items/gryla/staff.png" alt="آیتم گریلا استاف" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="مواد گریلا" /></td>
            </tr>
            <tr>
              <td><a href="/items/gryla/robi"><img src="/images/items/gryla/robi.png" alt="آیتم گریلا رابی" /></a></td>
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
