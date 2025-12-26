import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="/images/items/enchanted/null.png" alt="آیتم جادویی نال" className="m-auto"/>
          <img src="/images/items/enchanted/12.jpg" alt="نمای آیتم جادویی نال" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/laregas/sacred"><img src="/images/items/laregas/sacred.png" alt="آیتم لارگاس مقدس" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="مواد لارگاس" /></td>
            </tr>
            <tr>
              <td><a href="/items/weapons/ironwill"><img src="/images/items/weapons/ironwill.png" alt="اسلحه آیرون‌ویل" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/weapons/m.png" alt="مواد اسلحه" /></td>
            </tr>
          </thead>
        </table>
      </div>

        </div>
    )
}
