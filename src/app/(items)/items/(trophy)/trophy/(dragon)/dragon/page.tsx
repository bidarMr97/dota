import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="../../images/items/trophy/dragon.png" alt="" className="m-auto"/>
          <img src="../../images/items/trophy/8.jpg" alt="" />
          <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../gryla/ogre"><img src="../../images/items/gryla/ogre.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gryla/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../gryla/elvenskin"><img src="../../images/items/gryla/elvenskin.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gryla/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../gryla/elvenskin"><img src="../../images/items/gryla/elvenskin.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gryla/m.png" alt="" /></td>
            </tr>
            
          </thead>
        </table>
      </div>
        </div>
    )
}