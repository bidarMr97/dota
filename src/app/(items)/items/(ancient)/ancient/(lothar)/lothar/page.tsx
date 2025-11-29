
import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="../../images/items/ancient/lothar.png" alt="" className="m-auto" />
            <img src="../../images/items/ancient/12.jpg" alt="" />

            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="../weapons/broadsword"><img src="../../images/items/weapons/broadsword.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/weapons/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href="../weapons/blitz"><img src="../../images/items/weapons/blitz.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/weapons/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href="../cache/amulet"><img src="../../images/items/cache/amulet.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/cache/m.png" alt="" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}