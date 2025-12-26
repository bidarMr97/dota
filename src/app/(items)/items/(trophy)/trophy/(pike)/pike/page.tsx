import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/trophy/pike.png" alt="جام نیزه بلند" className="m-auto"/>
          <img src="/images/items/trophy/10.jpg" alt="تصویر جام شماره ده" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/trophy/dragon"><img src="/images/items/trophy/dragon.png" alt="جام اژدها" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/trophy/m.png" alt="مواد جام" /></td>
            </tr>
            <tr>
              <td><a href="/items/arcane/force"><img src="/images/items/arcane/force.png" alt="نیروی جادویی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/arcane/m.png" alt="مواد جادویی" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="/images/items/1.png" alt="آیتم شماره یک" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/trophy/m.png" alt="مواد جام" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}