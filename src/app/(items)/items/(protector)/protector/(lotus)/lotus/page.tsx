import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/protector/lotus.png" alt="لوتوس" className="m-auto"/>
          <img src="/images/items/protector/6.jpg" alt="تصویر شماره ۶" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gateway/perseverence"><img src="/images/items/gateway/perseverence.png" alt="استقامت" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gateway/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/energy"><img src="/images/items/laregas/energy.png" alt="انرژی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/plate"><img src="/images/items/laregas/plate.png" alt="صفحه" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}
