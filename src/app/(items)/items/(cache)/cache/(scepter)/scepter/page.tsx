import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/cache/scepter.png" alt="آیتم کش سپتر" className="m-auto"/>
          <img src="/images/items/cache/8.jpg" alt="نمای آیتم کش سپتر" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
                  <table>
                    <thead>
                      <tr>
                        <td><a href=""><img src="/images/items/cache/scepter.png" alt="آیتم کش سپتر" /></a></td>
                        <td><FaLongArrowAltLeft size={32} color="red" /></td>
                        <td><img src="/images/items/cache/m.png" alt="مواد کش" /></td>
                      </tr>
                    </thead>
                  </table>
                </div>
        </div>
    )
}
