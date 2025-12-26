import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/todd/sang-yasha.png" alt="سنگ یاشا" className="m-auto"/>
          <img src="/images/items/todd/5.jpg" alt="تصویر شماره ۵" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/enchanted/sang"><img src="/images/items/enchanted/sang.png" alt="سنگ افسون‌شده" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/enchanted/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/enchanted/yasha"><img src="/images/items/enchanted/yasha.png" alt="یاشا افسون‌شده" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/enchanted/m.png" alt="حرف M" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}
