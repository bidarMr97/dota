import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="../../images/items/protector/lotus.png" alt="" className="m-auto"/>
          <img src="../../images/items/protector/6.jpg" alt="" />
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../gateway/perseverence"><img src="../../images/items/gateway/perseverence.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gateway/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../laregas/energy"><img src="../../images/items/laregas/energy.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/laregas/s.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../laregas/plate"><img src="../../images/items/laregas/plate.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/laregas/s.png" alt="" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}