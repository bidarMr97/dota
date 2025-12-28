export default function BlackMarket() {
    return (
        <div>
            <section className="flex items-center justify-center gap-[2px] border-[4px] border-[green]" dir="ltr">
                <img src="images/items/market/m.png" alt="بازار سیاه" className="w-[20px] h-[20px]" />
                <h2 className="text-white">BlackMarket</h2>
            </section>
            <table>
                <thead>
                    <tr>
                        <td className="h-[40px]"><a href="items/market/tome"><img src="images/items/market/tome.png" alt="کتابچه" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/market/gem"><img src="images/items/market/gem.png" alt="سنگ قیمتی" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/market/venom"><img src="images/items/market/venom.png" alt="زهر" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/market/bottle"><img src="images/items/market/bottle.png" alt="بطری" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/market/ward"><img src="images/items/market/ward.png" alt="نگهبان" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/market/sentry"><img src="images/items/market/sentry.png" alt="چشم" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/market/dust"><img src="images/items/market/dust.png" alt="گرد و غبار" className="w-[50px]" /></a></td>
                        <td className="h-[40px]"><a href="items/market/smoke"><img src="images/items/market/smoke.png" alt="دود" className="w-[50px]" /></a></td>
                    </tr>
                    <tr>
                        <td className="h-[40px]"><a href="items/market/tp"><img src="images/items/market/tp.png" alt="تی‌پی" className="w-[50px]" /></a></td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
