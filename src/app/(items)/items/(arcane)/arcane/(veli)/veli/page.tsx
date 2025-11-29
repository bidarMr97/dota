import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
  return (

    <div>
      <img src="../../images/items/arcane/veli.png" alt="" className="m-auto" />
      <img src="../../images/items/arcane/8.jpg" alt="" />
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../weapons/ironwill"><img src="../../images/items/weapons/ironwill.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/weapons/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../gryla/crown"><img src="../../images/items/gryla/crown.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gryla/m.png" alt="" /></td>
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