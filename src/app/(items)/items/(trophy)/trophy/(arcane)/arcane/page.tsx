import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/trophy/arcane.png" alt="جایزه آرکین" className="m-auto"/>
          <img src="/images/items/trophy/2.jpg" alt="تصویر شماره ۲" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/cache/blink"><img src="/images/items/cache/blink.png" alt="بلینک" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="نماد M" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/mystic"><img src="/images/items/laregas/mystic.png" alt="میستیک" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="نماد S" /></td>
            </tr>
          
            <tr>
              <td><a href=""><img src="/images/items/1.png" alt="آیتم خالی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/trophy/m.png" alt="نماد M" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}
