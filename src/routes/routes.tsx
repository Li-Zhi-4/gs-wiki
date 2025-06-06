import { HomePage } from "@/pages/HomePage";

import { ItemIndexPage } from "@/pages/ItemIndexPage";
import { ItemPage } from "@/pages/ItemPage";

import { DamageReductionCalculatorPage } from "@/pages/DamageReductionCalculatorPage";

export const routes = [
    { path: "/", element: <HomePage />},
    { path: "/items", element: <ItemIndexPage />},
    { path: "/items/:itemsID", element: <ItemPage />},
    { path: "/tools", element: <HomePage />}, // change this later
    { path: "/tools/damage-reduction-calculator", element: <DamageReductionCalculatorPage />},
]