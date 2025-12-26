import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (
        <div>
          <img src="/images/items/protector/blade.png" alt="تیغه محافظ" className="m-auto"/>
          <img src="/images/items/protector/12.jpg" alt="تصویر شماره ۱۲" className="lg:w-[450px] m-auto border-6 border-red-500"/>
          <div className="flex justify-center mt-[20px] mb-[20px]">
            <table>
              <thead>
                <tr>
                  <td><a href="/items/weapons/chainmail"><img src="/images/items/weapons/chainmail.png" alt="زره زنجیری" /></a></td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/weapons/m.png" alt="حرف M" /></td>
                </tr>
                <tr>
                  <td><a href="/items/weapons/broadsword"><img src="/images/items/weapons/broadsword.png" alt="شمشیر پهن" /></a></td>
                  <td><FaLongArrowAltLeft size={32} color="red" /></td>
                  <td><img src="/images/items/weapons/m.png" alt="حرف M" /></td>
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
