import GearItems from "./components/GearItems";

export const metadata = {
    title: "v.maarcos | setup",
    description: "Todas as ferramentas e aplicativos que uso",
};

export default function Setup() {
    return (
        <>
            <div className="flex flex-col  gap-12 md:gap-24">
                <div className="flex flex-col gap-12 animate-in">
                    <div>
                        <h1 className="animate-in text-3xl font-bold tracking-tight">
                        Equipamentos, ferramentas e aplicativos
                        </h1>
                        <p className="animate-in text-secondary" style={{"--index": 1}}>
                            todas ferramentas
                        </p>
                    </div>
                    <p className="max-w-lg animate-in" style={{"--index": 2}}>
                    Todas essas ferramentas e aplicativos facilitam minha vida e eu gosto
                        usando-os.
                    </p>
                    <GearItems/>
                </div>
            </div>
        </>
    );
}
