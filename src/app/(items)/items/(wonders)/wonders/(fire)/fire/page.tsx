import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
          <img src="/images/items/wonders/fire.png" alt="شگفتی آتش" className="m-auto"/>
          <img src="/images/items/wonders/3.jpg" alt="تصویر شگفتی شماره سه" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           <div className="flex justify-center mt-[20px] mb-[20px]">
                  <table>
                    <thead>
                      <tr>
                        <td><a href=""><img src="/images/items/wonders/fire.png" alt="شگفتی آتش" /></a></td>
                        <td><FaLongArrowAltLeft size={32} color="red" /></td>
                        <td><img src="/images/items/wonders/m.png" alt="مواد شگفتی" /></td>
                      </tr>
                    </thead>
                  </table>
                </div>
        </div>
    )
}