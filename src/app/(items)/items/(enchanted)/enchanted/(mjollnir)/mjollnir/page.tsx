import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="/images/items/enchanted/mjollnir.png" alt="آیتم جادویی مولنیر" className="m-auto"/>
          <img src="/images/items/enchanted/5.jpg" alt="نمای آیتم جادویی مولنیر" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/enchanted/maelstrom"><img src="/images/items/enchanted/maelstrom.png" alt="آیتم جادویی میل‌استروم" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/enchanted/m.png" alt="مواد آیتم جادویی" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/hyperstone"><img src="/images/items/laregas/hyperstone.png" alt="آیتم لارگاس هایپر استون" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="مواد لارگاس" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="/images/items/1.png" alt="آیتم ناشناخته" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/enchanted/m.png" alt="مواد آیتم جادویی" /></td>
            </tr>
          </thead>
        </table>
      </div>

        </div>
    )
}
