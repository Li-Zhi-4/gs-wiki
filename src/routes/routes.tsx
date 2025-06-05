import { HomePage } from "@/pages/HomePage";
import { ItemIndexPage } from "@/pages/ItemIndexPage";
import { ItemPage } from "@/pages/ItemPage";

export const routes = [
    { path: "/", element: <HomePage />},
    { path: "/items", element: <ItemIndexPage />},
    { path: "/items/:itemsID", element: <ItemPage />},
]