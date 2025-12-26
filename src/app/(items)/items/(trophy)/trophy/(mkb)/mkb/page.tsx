import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/trophy/mkb.png" alt="جام MKB" className="m-auto"/>
          <img src="/images/items/trophy/5.jpg" alt="تصویر جام شماره پنج" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/laregas/demon"><img src="/images/items/laregas/demon.png" alt="شیطان لارگاس" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="سنگ لارگاس" /></td>
            </tr>
            <tr>
              <td><a href="/items/weapons/javelin"><img src="/images/items/weapons/javelin.png" alt="نیزه پرتابی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/weapons/m.png" alt="مواد سلاح" /></td>
            </tr>
            <tr>
              <td><a href="/items/weapons/blitz"><img src="/images/items/weapons/blitz.png" alt="سلاح برق‌آسا" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/weapons/m.png" alt="مواد سلاح" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="/images/items/1.png" alt="آیتم شماره یک" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/trophy/m.png" alt="مواد جام" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}