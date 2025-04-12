import { Outlet } from "react-router-dom";
import Navigation from "../components/Nav/Navigation";


export default function RootPage(){
    return (
        <main>
            <Navigation/>
            <Outlet/>
        </main>
    )
}