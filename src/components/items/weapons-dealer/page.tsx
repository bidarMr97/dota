export default function WeaponsDealer() {
    return (
        <div>
            <section className="flex items-center justify-center gap-[2px] border-[4px] border-[green]" dir="ltr">
                <img src="images/items/weapons/m.png" alt="فروشنده سلاح" className="w-[20px] h-[20px]" />
                <h2 className="text-white">Weapons Dealer  </h2>
            </section>
            <table>
                <thead>
                    <tr>
                        <td className="h-[40px]"><a href="items/weapons/attack"><img src="images/items/weapons/attack.png" alt="حمله" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/weapons/broadsword"><img src="images/items/weapons/broadsword.png" alt="شمشیر عریض" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/weapons/quarter"><img src="images/items/weapons/quarter.png" alt="کوارتر" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/weapons/claymore"><img src="images/items/weapons/claymore.png" alt="کلیمور" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/weapons/protection"><img src="images/items/weapons/protection.png" alt="محافظت" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/weapons/blitz"><img src="images/items/weapons/blitz.png" alt="بلیتز" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/weapons/javelin"><img src="images/items/weapons/javelin.png" alt="نیزه" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/weapons/mithril"><img src="images/items/weapons/mithril.png" alt="میثریل" className="w-[50px]" /></a></td>
                    </tr>

                    <tr>
                        <td className="h-[40px]"><a href="items/weapons/chainmail"><img src="images/items/weapons/chainmail.png" alt="زره زنجیری" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/weapons/ironwill"><img src="images/items/weapons/ironwill.png" alt="اراده آهنین" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/weapons/blight"><img src="images/items/weapons/blight.png" alt="ویرانی" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/weapons/queling"><img src="images/items/weapons/queling.png" alt="کوئلینگ" className="w-[50px]" /></a></td>
                    </tr>

                </thead>
            </table>
        </div>
    )
}
