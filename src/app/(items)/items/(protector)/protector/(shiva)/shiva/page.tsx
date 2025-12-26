import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="/images/items/protector/shiva.png" alt="شیوا" className="m-auto"/>
          <img src="/images/items/protector/11.jpg" alt="تصویر شماره ۱۱" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/laregas/plate"><img src="/images/items/laregas/plate.png" alt="صفحه" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/mystic"><img src="/images/items/laregas/mystic.png" alt="اسرارآمیز" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="/images/items/1.png" alt="تصویر ۱" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/protector/m.png" alt="حرف M" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}
