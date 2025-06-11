import { HomePage } from "@/pages/HomePage";

import { ItemIndexPage } from "@/pages/ItemIndexPage";
import { ArmourIndexPage } from "@/pages/ArmourIndexPage";
import { ItemPage } from "@/pages/ItemPage";

import { DamageReductionCalculatorPage } from "@/pages/DamageReductionCalculatorPage";

import { MonsterIndexPage } from "@/pages/MonsterIndexPage";

export const routes = [
    { path: "/", element: <HomePage />},

    { path: "/items", element: <ItemIndexPage />},
    { path: "/armour-items", element: <ArmourIndexPage />},
    { path: "/items/:itemsID", element: <ItemPage />},



    { path: "/tools", element: <HomePage />}, // change this later
    { path: "/tools/damage-reduction-calculator", element: <DamageReductionCalculatorPage />},

    { path: "/monsters", element: <MonsterIndexPage />},
]