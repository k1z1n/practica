import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Popular from "../../components/Popular/Popular.jsx";
import Stocks from "../../components/Stocks/Stocks.jsx";

export default function HomePage() {
    return (
        <>
            <Header/>
            <Banner/>
            <Popular/>
            <Stocks/>
            <Footer/>
        </>

    )
}