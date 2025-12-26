import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/todd/aghanim.png" alt="آگانی" className="m-auto"/>
          <img src="/images/items/todd/9.jpg" alt="تصویر شماره ۹" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gryla/ogre"><img src="/images/items/gryla/ogre.png" alt="اوگر" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/gryla/alacrity"><img src="/images/items/gryla/alacrity.png" alt="چابکی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/gryla/staff"><img src="/images/items/gryla/staff.png" alt="چوبدستی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/point"><img src="/images/items/laregas/point.png" alt="نقطه" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/todd/m.png" alt="حرف M" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}
