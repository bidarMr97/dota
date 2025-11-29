import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
  return (

    <div>
      <img src="../../images/items/enchanted/maelstrom.png" alt="" className="m-auto" />
      <img src="../../images/items/enchanted/2.jpg" alt="" />
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../weapons/mithril"><img src="../../images/items/weapons/mithril.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/weapons/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../weapons/javelin"><img src="../../images/items/weapons/javelin.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/weapons/m.png" alt="" /></td>
            </tr>
          </thead>
        </table>
      </div>

    </div>
  )
}