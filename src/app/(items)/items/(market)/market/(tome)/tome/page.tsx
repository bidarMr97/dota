import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (
        <div>
          <img src="/images/items/market/tome.png" alt="کتاب جادویی" className="m-auto"/>
          <img src="/images/items/market/3.jpg" alt="تصویر شماره ۳" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
            <table>
              <thead>
                <tr>
                  <td><a href=""><img src="/images/items/market/tome.png" alt="کتاب جادویی" /></a></td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/market/m.png" alt="حرف M" /></td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
    )
}
