import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
          <img src="../../images/items/protector/bkb.png" alt="" className="m-auto"/>
          <img src="../../images/items/protector/2.jpg" alt="" />
           <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../gryla/ogre"><img src="../../images/items/gryla/ogre.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gryla/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../weapons/mithril"><img src="../../images/items/weapons/mithril.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/weapons/m.png" alt="" /></td>
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