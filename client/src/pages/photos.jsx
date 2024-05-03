import Menu from "../components/menu";
import Footer from "../components/footer";
import '../css/photos.css'

function Photos(){
    return(
        <>
        <Menu></Menu>
        <header>
            <h1>Fotos da casa do microondas</h1>
        </header>
        <div class="Photos">
            <a href="foto 1.jpg" class="item">
        <img src="foto 1.jpg" alt="" /></a>
            <a href="foto 2.jpg" class="item">
        <img src="foto 2.jpg" alt="" /></a>
            <a href="foto 3.jpg" class="item">
        <img src="foto 3.jpg" alt="" /></a>
            <a href="foto 4.jpg" class="item">
        <img src="foto 4.jpg" alt="" /></a>
            <a href="foto 5.jpg" class="item">
        <img src="foto 5.jpg" alt="" /></a>
            <a href="foto 6.jpg" class="item">
        <img src="foto 6.jpg" alt="" /></a>
            <a href="foto 7.jpg" class="item">
        <img src="foto 7.jpg" alt="" /></a>
            <a href="foto 8.jpg" class="item">
        <img src="foto 8.jpg" alt="" /></a>
            <a href="foto 9.jpg" class="item">
        <img src="foto 9.jpg" alt="" /></a>
            <a href="foto 10.jpg" class="item">
        <img src="foto 10.jpg" alt="" /></a>
            <a href="foto 11.jpg" class="item">
        <img src="foto 11.jpg" alt="" /></a>
            <a href="foto 12.jpg" class="item">
        <img src="foto 12.jpg" alt="" /></a>
            <a href="foto 13.jpg" class="item">
        <img src="foto 13.jpg" alt="" /></a>
        </div>
        <Footer></Footer>
        </>
    );
}
export default Photos