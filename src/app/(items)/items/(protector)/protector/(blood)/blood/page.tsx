import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (
        <div>
          <img src="/images/items/protector/blood.png" alt="محافظ خون" className="m-auto"/>
          <img src="/images/items/protector/1.jpg" alt="تصویر شماره ۱" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          
          <div className="flex justify-center mt-[20px] mb-[20px]">
            <table>
              <thead>
                <tr>
                  <td>
                    <a href="/items/enchanted/kaya">
                      <img src="/images/items/enchanted/kaya.png" alt="کایا افسون شده" />
                    </a>
                  </td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/enchanted/m.png" alt="حرف M" /></td>
                </tr>
                <tr>
                  <td>
                    <a href="/items/todd/soul">
                      <img src="/images/items/todd/soul.png" alt="روح تاد" />
                    </a>
                  </td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/todd/m.png" alt="حرف M" /></td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
    )
}
