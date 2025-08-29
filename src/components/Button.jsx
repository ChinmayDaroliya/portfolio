const Button = ({text,className,id}) => {
    return (
       <a 
        onClick={(e)=>{

            e.preventDefault(); //stop the link from jumping  instantly

            const target = document.getElementById("counter"); //find the section with id counter

            // Only scroll if we found the section and an ID is passed in
            // taht prevents the contact button from scrolling to the top
            if(target && id){
                const offset = window.innerHeight * 0.15; //leave a bit of space at top

                // Calculate how far down the page we need to scroll
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({top,behavior:"smooth"}); //scroll to that position

            }

        }} 

       className={`${className ?? ''} cta-wrapper`}>
            <div className="cta-button group">
                <div className="bg-circle"></div>
                    <p className="text">{text}</p>
                    <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
            </div>
       </a>
    )
}

export default Button;