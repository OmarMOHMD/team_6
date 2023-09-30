import employee_img from '../images/Replace Image.png';


export default function Main() {
    return (
<main className="main_wrapper">
    <div className="left">
        <h3>We are best and creative agency</h3>
        <h2>We turn creative ideas into your business.</h2>
        <p>Lorem ipsum dolor sit amet consec adipi elit. Voluptates accus qui nulla alias
            cons maxime iusto cupiditate placeat distinctio.
        </p>
        <div className="flex-btn">
            <button type="submit" value="OUR STORY" name="OUR STORY">OUR STORY</button>
            <button type="submit">READ MORE</button>
        </div>

    </div>

    <div className="right">
        <img src={employee_img} alt="employee" />
    </div>

</main>

    );
}
