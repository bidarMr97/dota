import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/todd/yasha-kaya.png" alt="یاشا-کایا" className="m-auto"/>
          <img src="/images/items/todd/8.jpg" alt="تصویر شماره ۸" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/enchanted/yasha"><img src="/images/items/enchanted/yasha.png" alt="یاشا" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/enchanted/m.png" alt="نماد M" /></td>
            </tr>
            <tr>
              <td><a href="/items/enchanted/kaya"><img src="/images/items/enchanted/kaya.png" alt="کایا" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/enchanted/m.png" alt="نماد M" /></td>
            </tr>
         
          </thead>
        </table>
      </div>
        </div>
    )
}
