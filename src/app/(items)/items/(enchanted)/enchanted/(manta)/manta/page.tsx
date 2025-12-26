import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="/images/items/enchanted/manta.png" alt="آیتم جادویی مانتا" className="m-auto"/>
          <img src="/images/items/enchanted/6.jpg" alt="نمای آیتم جادویی مانتا" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/enchanted/yasha"><img src="/images/items/enchanted/yasha.png" alt="آیتم جادویی یاشا" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/enchanted/m.png" alt="مواد آیتم جادویی" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/ultimate"><img src="/images/items/laregas/ultimate.png" alt="آیتم لارگاس اولتیمیت" /></a></td>
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
