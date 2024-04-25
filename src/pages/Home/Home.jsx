import Header from "../../components/Header/Header";
import BrevoWebinar from "../../components/MainPage/BrevoWebinar";
import Cards from "../../components/MainPage/Cards";
import CompanyLogos from "../../components/MainPage/CompanyLogos";
import FeaturesSection from "../../components/MainPage/FeaturesSection";
import HeroSection from "../../components/MainPage/HeroSection";
import SolutionForBusiness from "../../components/MainPage/SolutionForBusiness";
// import ConnectedTool from "../MainPage/connectTools/ConnectedTool";
import Footer from "../../components/footer/Footer"

const Home = () => {

    return (
        <>
            <Header />
            {/* Hero Section */}
            <HeroSection />
            {/* Features Section */}
            <FeaturesSection />

            {/* Cards */}
            <Cards />

            {/* BREVO WEBINAR */}
            <BrevoWebinar />

            {/*company's logos*/}
            <CompanyLogos />

            {/* Solutions for every business */}

            <SolutionForBusiness />
            {/* ConnectedTool */}

            {/* <ConnectedTool/> */}

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;
