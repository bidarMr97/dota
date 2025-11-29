import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="../../images/items/ancient/armlet.png" alt="" className="m-auto"/>
          <img src="../../images/items/ancient/4.jpg" alt="" />
       <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="../weapons/ironwill"><img src="../../images/items/weapons/ironwill.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red"/></td>
                            <td><img src="../../images/items/weapons/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href="../weapons/attack"><img src="../../images/items/weapons/attack.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/weapons/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href="../cache/gloves"><img src="../../images/items/cache/gloves.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/cache/m.png" alt="" /></td>
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