  import { FaLongArrowAltLeft } from "react-icons/fa";
  export default function () {
    return (
      <div>
            <img src="../../images/items/ancient/crystalys.png" alt="" className="m-auto" />
          <img src="../../images/items/ancient/8.jpg" alt="" />
           
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="../weapons/broadsword"><img src="../../images/items/weapons/broadsword.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/weapons/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href="../weapons/attack"><img src="../../images/items/weapons/attack.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/weapons/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href=""><img src="../../images/items/1.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/ancient/m.png" alt="" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}