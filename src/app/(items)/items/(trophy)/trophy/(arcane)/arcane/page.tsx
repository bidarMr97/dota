import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="../../images/items/trophy/arcane.png" alt="" className="m-auto"/>
          <img src="../../images/items/trophy/2.jpg" alt="" />
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../cache/blink"><img src="../../images/items/cache/blink.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/cache/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../laregas/mystic"><img src="../../images/items/laregas/mystic.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/laregas/s.png" alt="" /></td>
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