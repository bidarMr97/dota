import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="/images/items/trophy/endless-tp.png" alt="جام انتقال بی‌پایان" className="m-auto"/>
          <img src="/images/items/trophy/11.jpg" alt="تصویر جام شماره یازده" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gateway/boots"><img src="/images/items/gateway/boots.png" alt="چکمه دروازه" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gateway/m.png" alt="مواد دروازه" /></td>
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