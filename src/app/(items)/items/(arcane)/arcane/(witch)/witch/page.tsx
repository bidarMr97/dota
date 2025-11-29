import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="../../images/items/arcane/witch.png" alt="" className="m-auto"/>
          <img src="../../images/items/arcane/12.jpg" alt="" />
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../gryla/robi"><img src="../../images/items/gryla/robi.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gryla/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../weapons/blitz"><img src="../../images/items/weapons/blitz.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/weapons/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../weapons/chainmail"><img src="../../images/items/weapons/chainmail.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/weapons/m.png" alt="" /></td>
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