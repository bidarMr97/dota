import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="../../images/items/trophy/pike.png" alt="" className="m-auto"/>
          <img src="../../images/items/trophy/10.jpg" alt="" />
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="dragon"><img src="../../images/items/trophy/dragon.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/trophy/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../arcane/force"><img src="../../images/items/arcane/force.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/arcane/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="../../images/items/1.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/trophy/m.png" alt="" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}