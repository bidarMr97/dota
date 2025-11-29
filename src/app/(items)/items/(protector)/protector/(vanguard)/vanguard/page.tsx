import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
          <img src="../../images/items/protector/vanguard.png" alt="" className="m-auto"/>
          <img src="../../images/items/protector/10.jpg" alt="" />
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../cache/health"><img src="../../images/items/cache/health.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/cache/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../laregas/vitality"><img src="../../images/items/laregas/vitality.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/laregas/s.png" alt="" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}