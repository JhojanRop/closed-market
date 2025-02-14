import Image from "next/image";

export default function CategoriesCard() {
    return (
        <section className="w-full max-w-xl py-8 px-6 bg-slate-300 rounded-lg flex flex-row gap-2">
            <ProductsCards
                title="Yamaha R3"
                description="Linda Yamaha R3, con papeles al día y todo nuevo"
                img='/images/YamahaR3.jpg'
            />
            <ProductsCards
                title="Yamaha MT07"
                description="Linda Yamaha MT07, con papeles al día y todo nuevo"
                img="/images/YamahaMT07.jpg"
            />
            <ProductsCards
                title="BMW S1000RR"
                description="Linda BMW S1000RR, con papeles al día y todo nuevo"
                img="/images/BMWS1000RR.jpg"
            />
        </section>
    );
}

export function ProductsCards({ title, description, img }) {
    return (
        <div className="flex gap-3">
            <div className="w-full min-h-full">
                <div className="bg-slate-400 rounded-lg p-4">
                    <Image src={img} alt={title} width={300} height={200} className="w-full h-48 object-cover rounded-lg" />
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-gray-500">{description}</p>
                    <button className="block w-fit mx-auto px-6 py-2 text-white font-medium bg-matisse-500 rounded transition-colors duration-300 hover:bg-matisse-600">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );

}
