import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/todd/aquila.png" alt="آکوئیلا" className="m-auto"/>
          <img src="/images/items/todd/6.jpg" alt="تصویر شماره ۶" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gateway/wraith"><img src="/images/items/gateway/wraith.png" alt="رث" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gateway/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/supportive/ring"><img src="/images/items/supportive/ring.png" alt="حلقه" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/supportive/m.png" alt="حرف M" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}
