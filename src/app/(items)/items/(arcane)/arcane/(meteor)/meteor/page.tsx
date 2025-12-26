import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
  return (

    <div>
      <img src="/images/items/arcane/meteor.png" alt="آیتم آرکین شهاب" className="m-auto" />
      <img src="/images/items/arcane/4.jpg" alt="نمای آیتم آرکین شهاب" className="lg:w-[450px] m-auto border-6 border-red-500"/>
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gateway/perseverence"><img src="/images/items/gateway/perseverence.png" alt="دروازه پایداری" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gateway/m.png" alt="مواد دروازه" /></td>
            </tr>
            <tr>
              <td><a href="/items/gryla/crown"><img src="/images/items/gryla/crown.png" alt="تاج گریلا" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gryla/m.png" alt="مواد گریلا" /></td>
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
