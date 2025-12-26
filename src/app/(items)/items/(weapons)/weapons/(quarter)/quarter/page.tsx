import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/weapons/quarter.png" alt="سلاح چوب‌دستی کوتاه" className="m-auto"/>
          <img src="/images/items/weapons/12.jpg" alt="تصویر سلاح شماره دوازده" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
                  <table>
                    <thead>
                      <tr>
                        <td><a href=""><img src="/images/items/weapons/quarter.png" alt="سلاح چوب‌دستی کوتاه" /></a></td>
                        <td><FaLongArrowAltLeft size={32} color="red" /></td>
                        <td><img src="/images/items/weapons/m.png" alt="مواد سلاح" /></td>
                      </tr>
                    </thead>
                  </table>
                </div>
        </div>
    )
}