import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/enchanted/desolator.png" alt="آیتم جادویی دزولاتور" className="m-auto"/>
          <img src="/images/items/enchanted/4.jpg" alt="نمای آیتم جادویی دزولاتور" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/weapons/blight"><img src="/images/items/weapons/blight.png" alt="اسلحه بلیت" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/weapons/m.png" alt="مواد اسلحه" /></td>
            </tr>
            <tr>
              <td><a href="/items/weapons/mithril"><img src="/images/items/weapons/mithril.png" alt="اسلحه میترل" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/weapons/m.png" alt="مواد اسلحه" /></td>
            </tr>
            <tr>
              <td><a href="/items/weapons/mithril"><img src="/images/items/weapons/mithril.png" alt="اسلحه میترل" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/weapons/m.png" alt="مواد اسلحه" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}
