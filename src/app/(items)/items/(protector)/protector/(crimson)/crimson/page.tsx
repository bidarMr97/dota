import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (
        <div>
          <img src="/images/items/protector/crimson.png" alt="محافظ سرخ" className="m-auto"/>
          <img src="/images/items/protector/9.jpg" alt="تصویر شماره ۹" className="lg:w-[450px] m-auto border-6 border-red-500"/>

          <div className="flex justify-center mt-[20px] mb-[20px]">
            <table>
              <thead>
                <tr>
                  <td>
                    <a href="/items/protector/vanguard">
                      <img src="/images/items/protector/vanguard.png" alt="محافظ پیشگام" />
                    </a>
                  </td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/protector/m.png" alt="حرف M" /></td>
                </tr>
                <tr>
                  <td>
                    <a href="/items/supportive/bluckler">
                      <img src="/images/items/supportive/bluckler.png" alt="شیلد پشتیبان" />
                    </a>
                  </td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/supportive/m.png" alt="حرف M" /></td>
                </tr>
                <tr>
                  <td>
                    <a href=""><img src="/images/items/1.png" alt="تصویر جایگزین" /></a>
                  </td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/protector/m.png" alt="حرف M" /></td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
    )
}
