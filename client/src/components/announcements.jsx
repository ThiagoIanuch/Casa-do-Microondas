

import '../css/announcements.css'

function Announcements() {

    return (

        <div className="slider">

        <div className="slides">

          <input type="radio" name="botao" id="b1"></input>
          <input type="radio" name="botao" id="b2"></input>
          <input type="radio" name="botao" id="b3"></input>

                <div className="slide primeira"> 
                    <img src="dall-e-2.webp" alt="imagem 1" />
                </div>

                <div className="slide"> 
                    <img src="c:\Users\HP\Pictures\Saved Pictures\ia-micoondas.jpg" alt="imagem 2" />
                </div>

                <div className="slide"> 
                    <img src="c:\Users\HP\Pictures\Saved Pictures\ia-micoondas3.jpg" alt="imagem 3" />
                </div>

                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                </div>


        </div>

                <div className="navigation-manual">
                    <label for="b1" class="manual-btn"></label>
                    <label for="b2" class="manual-btn"></label>
                    <label for="b3" class="manual-btn"></label>
                </div>

      </div>

    )


}

export default Announcements