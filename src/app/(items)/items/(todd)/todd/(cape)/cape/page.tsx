import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/todd/cape.png" alt="شنل" className="m-auto"/>
          <img src="/images/items/todd/2.jpg" alt="تصویر شماره ۲" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/cache/gloves"><img src="/images/items/cache/gloves.png" alt="دستکش" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/cache/amulet"><img src="/images/items/cache/amulet.png" alt="آویز" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/cache/cloak"><img src="/images/items/cache/cloak.png" alt="شنل" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}
