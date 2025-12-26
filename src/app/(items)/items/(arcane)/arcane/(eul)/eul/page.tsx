import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
  return (

    <div>
      <img src="/images/items/arcane/eul.png" alt="آیتم آرکین یول" className="m-auto"/>
      <img src="/images/items/arcane/7.jpg" alt="نمای آیتم آرکین یول" className="lg:w-[450px] m-auto border-6 border-red-500"/>
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gryla/staff"><img src="/images/items/gryla/staff.png" alt="عصای گریلا" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="مواد گریلا" /></td>
            </tr>
            <tr>
              <td><a href="/items/cache/void"><img src="/images/items/cache/void.png" alt="کش وُید" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="مواد کش" /></td>
            </tr>
            <tr>
              <td><a href="/items/cache/wind"><img src="/images/items/cache/wind.png" alt="کش باد" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/cache/m.png" alt="مواد کش" /></td>
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
