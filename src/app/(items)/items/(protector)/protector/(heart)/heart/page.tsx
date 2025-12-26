import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (
        <div>
          <img src="/images/items/protector/heart.png" alt="محافظ قلب" className="m-auto"/>
          <img src="/images/items/protector/7.jpg" alt="تصویر شماره ۷" className="lg:w-[450px] m-auto border-6 border-red-500"/>

          <div className="flex justify-center mt-[20px] mb-[20px]">
            <table>
              <thead>
                <tr>
                  <td>
                    <a href="/items/laregas/vitality">
                      <img src="/images/items/laregas/vitality.png" alt="قدرت حیاتی" />
                    </a>
                  </td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
                </tr>
                <tr>
                  <td>
                    <a href="/items/laregas/vitality">
                      <img src="/images/items/laregas/vitality.png" alt="قدرت حیاتی" />
                    </a>
                  </td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
                </tr>
                <tr>
                  <td>
                    <a href="/items/laregas/reaver">
                      <img src="/images/items/laregas/reaver.png" alt="سلاح انتقام‌گیر" />
                    </a>
                  </td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
    )
}
