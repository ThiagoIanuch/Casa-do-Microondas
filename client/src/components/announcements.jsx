import styles from '../css/announcements.module.css';

function Announcements() {
    return (
        <div className={styles['slider']}>
            <div className={styles['slides']}>
                <input type="radio" name="botao" id={styles['b1']}></input>
                <input type="radio" name="botao" id={styles['b2']}></input>
                <input type="radio" name="botao" id={styles['b3']}></input>

                <div className={`${styles['slide']} ${styles['first']}`}> 
                    <img src="ia-micoondas.jpg" alt="imagem 1" />
                </div>

                <div className={styles['slide']}> 
                    <img src="ia-micoondas2.jpg" alt="imagem 2" />
                </div>

                <div className={styles['slide']}> 
                    <img src="ia-micoondas3.jpg" alt="imagem 3" />
                </div>
                
                <div className={styles['navigation-auto']}>
                    <div className={styles['auto-btn1']}></div>
                    <div className={styles['auto-btn2']}></div>
                    <div className={styles['auto-btn3']}></div>
                </div>
            </div>

            <div className={styles['navigation-manual']}>
                <label htmlFor={styles['b1']} className={styles['manual-btn']}></label>
                <label htmlFor={styles['b2']} className={styles['manual-btn']}></label>
                <label htmlFor={styles['b3']} className={styles['manual-btn']}></label>
            </div>
        </div>
    )
}

export default Announcements;