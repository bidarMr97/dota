import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
  return (

    <div>
      <img src="/images/items/trophy/dragon.png" alt="جام اژدها" className="m-auto" />
      <img src="/images/items/trophy/8.jpg" alt="تصویر جام شماره هشت" className="lg:w-[450px] m-auto border-6 border-red-500"/>
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gryla/ogre"><img src="/images/items/gryla/ogre.png" alt="غول گریلا" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="مواد گریلا" /></td>
            </tr>
            <tr>
              <td><a href="/items/gryla/elvenskin"><img src="/images/items/gryla/elvenskin.png" alt="پوست الفی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="مواد گریلا" /></td>
            </tr>
            <tr>
              <td><a href="/items/gryla/elvenskin"><img src="/images/items/gryla/elvenskin.png" alt="پوست الفی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="مواد گریلا" /></td>
            </tr>

          </thead>
        </table>
      </div>
    </div>
  )
}