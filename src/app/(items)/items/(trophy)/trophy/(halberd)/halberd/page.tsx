import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="../../images/items/trophy/halberd.png" alt="" className="m-auto"/>
          <img src="../../images/items/trophy/1.jpg" alt="" />
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../enchanted/sang"><img src="../../images/items/enchanted/sang.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/enchanted/m.png" alt="" /></td>
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