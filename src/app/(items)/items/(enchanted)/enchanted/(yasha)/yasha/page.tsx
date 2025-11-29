import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="../../images/items/enchanted/yasha.png" alt="" className="m-auto"/>
          <img src="../../images/items/enchanted/9.jpg" alt="" />
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../gryla/alacrity"><img src="../../images/items/gryla/alacrity.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gryla/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../gryla/elvenskin"><img src="../../images/items/gryla/elvenskin.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gryla/m.png" alt="" /></td>
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