import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="/images/items/enchanted/yasha.png" alt="آیتم جادویی یاشا" className="m-auto"/>
          <img src="/images/items/enchanted/9.jpg" alt="نمای آیتم جادویی یاشا" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gryla/alacrity"><img src="/images/items/gryla/alacrity.png" alt="آیتم گریلا آلاکریتی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="مواد آیتم گریلا" /></td>
            </tr>
            <tr>
              <td><a href="/items/gryla/elvenskin"><img src="/images/items/gryla/elvenskin.png" alt="آیتم گریلا الونسکین" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="مواد آیتم گریلا" /></td>
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
