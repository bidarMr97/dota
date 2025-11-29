import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="../../images/items/protector/shiva.png" alt="" className="m-auto"/>
          <img src="../../images/items/protector/11.jpg" alt="" />
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../laregas/plate"><img src="../../images/items/laregas/plate.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/laregas/s.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../laregas/mystic"><img src="../../images/items/laregas/mystic.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/laregas/s.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="../../images/items/1.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/protector/m.png" alt="" /></td>
            </tr>
          </thead>
        </table>
      </div>
        </div>
    )
}