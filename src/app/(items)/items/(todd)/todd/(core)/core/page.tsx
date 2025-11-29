import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="../../images/items/todd/core.png" alt="" className="m-auto"/>
          <img src="../../images/items/todd/10.jpg" alt="" />
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../todd/soul"><img src="../../images/items/todd/soul.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/todd/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../laregas/mystic"><img src="../../images/items/laregas/mystic.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/laregas/s.png" alt="" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}