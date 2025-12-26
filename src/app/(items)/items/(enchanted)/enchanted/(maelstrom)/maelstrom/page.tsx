import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
  return (

    <div>
      <img src="/images/items/enchanted/maelstrom.png" alt="آیتم جادویی میل‌استروم" className="m-auto" />
      <img src="/images/items/enchanted/2.jpg" alt="نمای آیتم جادویی میل‌استروم" className="lg:w-[450px] m-auto border-6 border-red-500"/>
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/weapons/mithril"><img src="/images/items/weapons/mithril.png" alt="اسلحه میترل" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/weapons/m.png" alt="مواد اسلحه" /></td>
            </tr>
            <tr>
              <td><a href="/items/weapons/javelin"><img src="/images/items/weapons/javelin.png" alt="اسلحه جاولین" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/weapons/m.png" alt="مواد اسلحه" /></td>
            </tr>
          </thead>
        </table>
      </div>

    </div>
  )
}
