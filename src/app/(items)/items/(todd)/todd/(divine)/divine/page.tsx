import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/todd/divine.png" alt="الهی" className="m-auto"/>
          <img src="/images/items/todd/1.jpg" alt="تصویر شماره ۱" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/laregas/sacred"><img src="/images/items/laregas/sacred.png" alt="مقدس" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/demon"><img src="/images/items/laregas/demon.png" alt="شیطانی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
            </tr>
         
          </thead>
        </table>
      </div>
        </div>
    )
}
