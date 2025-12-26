import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/todd/tp-up.png" alt="افزایش TP" className="m-auto"/>
          <img src="/images/items/todd/4.jpg" alt="تصویر شماره ۴" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gateway/boots"><img src="/images/items/gateway/boots.png" alt="چکمه‌ها" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gateway/m.png" alt="نماد M" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="/images/items/1.png" alt="آیتم خالی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/todd/m.png" alt="نماد M" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}
