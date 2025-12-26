import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (
        <div>
          <img src="/images/items/protector/assault.png" alt="حمله محافظ" className="m-auto"/>
          <img src="/images/items/protector/3.jpg" alt="تصویر شماره ۳" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
            <table>
              <thead>
                <tr>
                  <td><a href="/items/laregas/plate"><img src="/images/items/laregas/plate.png" alt="صفحه لارجاس" /></a></td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
                </tr>
                <tr>
                  <td><a href="/items/laregas/hyperstone"><img src="/images/items/laregas/hyperstone.png" alt="سنگ فوق‌العاده لارجاس" /></a></td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
                </tr>
                <tr>
                  <td><a href="/items/weapons/chainmail"><img src="/images/items/weapons/chainmail.png" alt="زره زنجیری" /></a></td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/weapons/m.png" alt="حرف M" /></td>
                </tr>
                <tr>
                  <td><a href=""><img src="/images/items/1.png" alt="آیتم نامعلوم" /></a></td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/protector/m.png" alt="حرف M" /></td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
    )
}
