import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/cache/gloves.png" alt="آیتم کش دستکش" className="m-auto"/>
          <img src="/images/items/cache/3.jpg" alt="نمای آیتم کش دستکش" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
                  <table>
                    <thead>
                      <tr>
                        <td><a href=""><img src="/images/items/cache/gloves.png" alt="آیتم کش دستکش" /></a></td>
                        <td><FaLongArrowAltLeft size={32} color="red" /></td>
                        <td><img src="/images/items/cache/m.png" alt="مواد کش" /></td>
                      </tr>
                    </thead>
                  </table>
                </div>
        </div>
    )
}
