import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (

        <div>
            <img src="../../images/items/gateway/power.png" alt="" className="m-auto" />
            <img src="../../images/items/gateway/4.jpg" alt="" />
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <tfoot>
                        <tr>
                            <td><a href="../cache/speed"><img src="../../images/items/cache/speed.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/cache/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href="../cache/gloves"><img src="../../images/items/cache/gloves.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/cache/m.png" alt="" /></td>
                        </tr>
                         <tr><td><span className="text-[red] text-[45px]">یا</span></td></tr>
                        <tr>
                            <td><a href="../gryla/robi"><img src="../../images/items/gryla/robi.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/gryla/m.png" alt="" /></td>

                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="flex">
                &nbsp;&nbsp;&nbsp;&nbsp;<p className="text-[red] text-[45px]">یا</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="../../images/items/gryla/belt.png" alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p className="text-[red] text-[45px]">یا</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="../../images/items/gryla/elvenskin.png" alt="" />
            </div>
        </div>
    )
}