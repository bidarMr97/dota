import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="/images/items/protector/hood.png" alt="کلاه محافظ" className="m-auto"/>
          <img src="/images/items/protector/4.jpg" alt="تصویر شماره ۴" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/cache/health"><img src="/images/items/cache/health.png" alt="سلامتی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/cache/cloak"><img src="/images/items/cache/cloak.png" alt="شنل" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/cache/regeneration"><img src="/images/items/cache/regeneration.png" alt="بازسازی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
            </tr>
          </thead>
        </table>
      </div>

        </div>
    )
}
