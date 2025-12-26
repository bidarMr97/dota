import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (
        <div>
          <img src="/images/items/protector/aeon.png" alt="ایئون محافظ" className="m-auto"/>
          <img src="/images/items/protector/8.jpg" alt="تصویر شماره ۸" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
            <table>
              <thead>
                <tr>
                  <td><a href="/items/laregas/energy"><img src="/images/items/laregas/energy.png" alt="انرژی لارجاس" /></a></td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
                </tr>
                <tr>
                  <td><a href="/items/laregas/vitality"><img src="/images/items/laregas/vitality.png" alt="زندگی لارجاس" /></a></td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
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
