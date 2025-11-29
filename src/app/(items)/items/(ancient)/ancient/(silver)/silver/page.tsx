
  
  import { FaLongArrowAltLeft } from "react-icons/fa";
  export default function () {
    return (
      <div>
            <img src="../../images/items/ancient/silver.png" alt="" className="m-auto" />
          <img src="../../images/items/ancient/5.jpg" alt="" />
           
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="lothar"><img src="../../images/items/ancient/lothar.png" alt="" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="../../images/items/ancient/m.png" alt="" /></td>
                        </tr>
                        <tr>
                            <td><a href="../laregas/ultimate"><img src="../../images/items/laregas/ultimate.png" alt="" /></a></td>
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