import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/todd/solar.png" alt="سولار" className="m-auto"/>
          <img src="/images/items/todd/12.jpg" alt="تصویر شماره ۱۲" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/supportive/medalion"><img src="/images/items/supportive/medalion.png" alt="مدالیون" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/supportive/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/talisman"><img src="/images/items/laregas/talisman.png" alt="طلسم" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}
