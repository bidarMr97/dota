import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
  return (

    <div>
      <img src="../../images/items/arcane/force.png" alt="" className="m-auto" />
      <img src="../../images/items/arcane/5.jpg" alt="" />
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../gryla/staff"><img src="../../images/items/gryla/staff.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gryla/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../cache/regeneration"><img src="../../images/items/cache/regeneration.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/cache/m.png" alt="" /></td>
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