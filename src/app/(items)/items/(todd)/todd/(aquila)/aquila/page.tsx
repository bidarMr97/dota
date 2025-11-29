import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="../../images/items/todd/aquila.png" alt="" className="m-auto"/>
          <img src="../../images/items/todd/6.jpg" alt="" />
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../gateway/wraith"><img src="../../images/items/gateway/wraith.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gateway/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../supportive/ring"><img src="../../images/items/supportive/ring.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/supportive/m.png" alt="" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}