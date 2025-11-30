import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/cache/blink.png" alt="" className="m-auto"/>
          <img src="/images/items/cache/1.jpg" alt="" />
           <div className="flex justify-center mt-[20px] mb-[20px]">
                  <table>
                    <thead>
                      <tr>
                        <td><a href=""><img src="/images/items/cache/blink.png" alt="" /></a></td>
                        <td><FaLongArrowAltLeft size={32} color="red" /></td>
                        <td><img src="/images/items/cache/m.png" alt="" /></td>
                      </tr>
                    </thead>
                  </table>
                </div>
        </div>
    )
}