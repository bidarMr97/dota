import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
  return (

    <div>
      <img src="/images/items/protector/linken.png" alt="لینکن" className="m-auto" />
      <img src="/images/items/protector/5.jpg" alt="تصویر شماره ۵" className="lg:w-[450px] m-auto border-6 border-red-500"/>
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="/items/gateway/perseverence"><img src="/images/items/gateway/perseverence.png" alt="استقامت" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/gateway/m.png" alt="حرف M" /></td>
            </tr>
            <tr>
              <td><a href="/items/laregas/ultimate"><img src="/images/items/laregas/ultimate.png" alt="نهایی" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="/images/items/1.png" alt="یک" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="/images/items/protector/m.png" alt="حرف M" /></td>
            </tr>
          </thead>
        </table>
      </div>

    </div>
  )
}
