import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="../../images/items/todd/solar.png" alt="" className="m-auto"/>
          <img src="../../images/items/todd/12.jpg" alt="" />
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../supportive/medalion"><img src="../../images/items/supportive/medalion.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/supportive/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../laregas/talisman"><img src="../../images/items/laregas/talisman.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/laregas/s.png" alt="" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}