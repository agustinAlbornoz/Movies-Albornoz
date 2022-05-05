import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "../Item/ItemListContainer"
import Layout from "../Layout/Layout"


const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<ItemListContainer />}/>
                            <Route path="movieDetail/:nameId" element={<ItemDetailContainer/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rutas