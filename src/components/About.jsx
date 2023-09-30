import watch_img from '../images/watch-3.png';

export default function About () {
    return ( 
    <section className="about">
        <div className="bg_world">
            <div className="left">
                <h3>Dream Big Inspire the World</h3>
                <h2>We turn creative ideas into your business.</h2>
                <ul className="navbar">
                    <li><a href="">WEB DESIGN</a></li>
                    <li><a href="">MOBILE APP</a></li>
                    <li><a href="">BRANDING</a></li>
                    <li><a href="">BRANDING</a></li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquam odit, soluta impedit ratione voluptatem nulla nihil hic aliquid corporis ipsum autem consequuntur ad ipsam id voluptates ab molestiae dolore excepturi aspernatur quidem veniam consequatur.
                </p>
                <div className="flex-btn">
                    <button>READ MORE</button>
                </div>
            </div>
            <div className="right">
                <img src={watch_img} alt="watch" />

            </div>
        </div>
    </section>
    );
}