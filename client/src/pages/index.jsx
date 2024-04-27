import Menu from '../components/menu.jsx'
import Hero from '../components/hero.jsx'
import Announcements from '../components/announcements.jsx'

import Services from '../components/services.jsx'
import Footer from '../components/footer.jsx'

function Index() {
    return (
        <>
            <Menu></Menu>
            <Hero></Hero>
            <Announcements></Announcements>

            <Services></Services>
            <Footer></Footer>
        </>
    )
}

export default Index