import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="../../images/items/enchanted/satanic.png" alt="" className="m-auto"/>
          <img src="../../images/items/enchanted/10.jpg" alt="" />
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../enchanted/helm"><img src="../../images/items/enchanted/helm.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/enchanted/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../laregas/reaver"><img src="../../images/items/laregas/reaver.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/laregas/s.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href=""><img src="../../images/items/1.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/enchanted/m.png" alt="" /></td>
            </tr>
          </thead>
        </table>
      </div>

        </div>
    )
}