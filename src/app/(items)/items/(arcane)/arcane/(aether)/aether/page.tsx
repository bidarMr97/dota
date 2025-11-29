import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
  return (

    <div>
      <img src="../../images/items/arcane/aether.png" alt="" className="m-auto" />
      <img src="../../images/items/arcane/11.jpg" alt="" />
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../cache/void"><img src="../../images/items/cache/void.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/cache/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../laregas/energy"><img src="../../images/items/laregas/energy.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/laregas/s.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="../../images/items/1.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/arcane/m.png" alt="" /></td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}