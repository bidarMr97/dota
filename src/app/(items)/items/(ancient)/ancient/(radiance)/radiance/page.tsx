
  
  import { FaLongArrowAltLeft } from "react-icons/fa";
  export default function () {
    return (
      <div>
            <img src="../../images/items/ancient/radiance.png" alt="" className="m-auto" />
          <img src="../../images/items/ancient/9.jpg" alt="" />
           
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="../laregas/sacred"><img src="../../images/items/laregas/sacred.png" alt="" /></a></td>
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