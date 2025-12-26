import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (
        <div>
          <img src="/images/items/laregas/vitality.png" alt="حیات" className="m-auto"/>
          <img src="/images/items/laregas/10.jpg" alt="تصویر شماره ۱۰" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
            <table>
              <thead>
                <tr>
                  <td><a href=""><img src="/images/items/laregas/vitality.png" alt="حیات" /></a></td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
    )
}
