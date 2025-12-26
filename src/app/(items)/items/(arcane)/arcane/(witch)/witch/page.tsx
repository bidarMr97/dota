import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/arcane/witch.png" alt="آیتم آرکین ویچ" className="m-auto"/>
          <img src="/images/items/arcane/12.jpg" alt="نمای آیتم آرکین ویچ" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gryla/robi"><img src="/images/items/gryla/robi.png" alt="ردای گریلا" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="مواد گریلا" /></td>
            </tr>
            <tr>
              <td><a href="/items/weapons/blitz"><img src="/images/items/weapons/blitz.png" alt="اسلحه بلیتز" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/weapons/m.png" alt="مواد اسلحه" /></td>
            </tr>
            <tr>
              <td><a href="/items/weapons/chainmail"><img src="/images/items/weapons/chainmail.png" alt="زره زنجیری" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/weapons/m.png" alt="مواد اسلحه" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="/images/items/1.png" alt="آیتم پایه" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/arcane/m.png" alt="مواد آرکین" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}
