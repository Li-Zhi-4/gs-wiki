import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import armourJson from '@/data/Armour.json'


function filterData( armour: string | null ) {
    if (!armour) {return 0}
    const filterArmourPiece = armourJson.filter( (item) => (item.name === armour) );
    const filterArmour = filterArmourPiece[0].armour;
    return filterArmour;
}


type ArmourCardProps = {
    helm: string | null;
    chest: string | null;
    gauntlets: string | null;
    trousers: string | null;
    boots: string | null;
};

function armourCalculator({ helm, chest, gauntlets, trousers, boots }: ArmourCardProps) {
    const data = [filterData(helm), filterData(chest), filterData(gauntlets), filterData(trousers), filterData(boots)];
    const armour = data.reduce((acc, val) => acc + val, 0);
    return armour;
}

function damageReductionCalculator(armour: number) {
    return ( armour / (armour + 165));
}


export function ArmourCard({ helm, chest, gauntlets, trousers, boots }: ArmourCardProps) {
    const armour = armourCalculator({helm, chest, gauntlets, trousers, boots});

    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardDescription>Armour</CardDescription>
                <CardTitle className="text-5xl">{armour}</CardTitle>
            </CardHeader>
            <CardContent>This is the total armour of your selected set.</CardContent>
        </Card>
    )
}

export function DamageReductionCard({ helm, chest, gauntlets, trousers, boots }: ArmourCardProps) {
    const armour = armourCalculator({helm, chest, gauntlets, trousers, boots});
    const dmgReduction = damageReductionCalculator(armour);

    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardDescription>Damage Reduction</CardDescription>
                <CardTitle className="text-5xl">{Math.trunc(dmgReduction * 10000)/100}%</CardTitle>
            </CardHeader>
            <CardContent>This is the total physical damage reduction of your selected set.</CardContent>
        </Card>
    )
}