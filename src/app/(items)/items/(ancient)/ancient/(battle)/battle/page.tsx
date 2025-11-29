
import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="../../images/items/ancient/battle.png" alt="" className="m-auto" />
            <img src="../../images/items/ancient/10.jpg" alt="" />

            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="../gateway/perseverence"><img src="../../images/items/gateway/perseverence.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/gateway/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href="../weapons/queling"><img src="../../images/items/weapons/queling.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/weapons/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href="../weapons/broadsword"><img src="../../images/items/weapons/broadsword.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/weapons/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href="../weapons/claymore"><img src="../../images/items/weapons/claymore.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/weapons/m.png" alt="" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}