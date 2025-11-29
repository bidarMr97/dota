import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="../../images/items/ancient/kayanon.png" alt="" className="m-auto" />
            <img src="../../images/items/ancient/7.jpg" alt="" />

            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="crystalys"><img src="../../images/items/ancient/crystalys.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/ancient/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href="../laregas/demon"><img src="../../images/items/laregas/demon.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/laregas/s.png" alt="" /></td>
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