import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
  return (

    <div>
      <img src="/images/items/arcane/ethereal.png" alt="آیتم آرکین اتریال" className="m-auto"/>
      <img src="/images/items/arcane/1.jpg" alt="نمای آیتم آرکین اتریال" className="lg:w-[450px] m-auto border-6 border-red-500"/>
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/laregas/eaglehorn"><img src="/images/items/laregas/eaglehorn.png" alt="شاخ عقاب لارگاس" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="منبع لارگاس" /></td>
            </tr>
            <tr>
              <td><a href="/items/cache/scepter"><img src="/images/items/cache/scepter.png" alt="عصای کش" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="مواد کش" /></td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}
