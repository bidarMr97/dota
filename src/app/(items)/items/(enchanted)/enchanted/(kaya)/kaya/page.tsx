import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
  return (

    <div>
      <img src="../../images/items/enchanted/kaya.png" alt="" className="m-auto" />
      <img src="../../images/items/enchanted/1.jpg" alt="" />
      <div className="flex justify-center mt-[20px] mb-[20px]">
        <table>
          <thead>
            <tr>
              <td><a href="../gryla/staff"><img src="../../images/items/gryla/staff.png" alt="" /></a></td>
              <td><FaLongArrowAltLeft size={32} color="red" /></td>
              <td><img src="../../images/items/gryla/m.png" alt="" /></td>
            </tr>
            <tr>
              <td><a href="../gryla/robi"><img src="../../images/items/gryla/robi.png" alt="" /></a></td>
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