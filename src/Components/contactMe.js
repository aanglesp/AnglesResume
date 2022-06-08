import React, {useState, useEffect} from "react";

export default function ContactMe(){

    const colors = ["#5F28EB","#ff2253","#d26cd5","#a1ce5b","#66b3cc","#08fdd8","#f0bb4b","#5F28EB"]; 
    
    const [style, setStyle] = useState()

    const [formData, setFormData] = React.useState(
        {
            name: "", 
            email: "", 
            subject: "", 
            message: "",
        }
    )
    
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // use style.transform bottom border
    function changeBottom(event){
        var cols = document.getElementsByClassName('border');
        for(let i = 0; i < cols.length; i++) {
            const randomNumber = Math.floor(Math.random() * colors.length)
            cols[i].style.borderColor = `${colors[randomNumber]}`;
        }
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        setFormErrors(validate(formData));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formData);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name) {
            errors.name = "Name is required!";
        }
        
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.subject) {
            errors.subject = "Name is required!";
        }
        if ( !values.message) {
            errors.message = "Name is required!";
        }
        
        return errors;
    };
    

    return (
        <div className="contactMeScreenDiv" id="contactMeScreen">
            <div className="titleText"> 
                <h1 className="h1Font">CONTACT ME</h1>
                    
                <p className="textInfo textContactMe">
                    &gt; I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
                </p>
            </div>
            
            <div className="textAndForm">
                <form className="formContactMe" action="https://submit-form.com/mJ6TWisN">
                    <div className="content">
                        <label className="textInfo">Name</label>
                        <input
                            autoComplete="off"
                            onClick={changeBottom}
                            className="inputFormContact"
                            style={style}
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                        />
                        <span className="border"></span>
                    </div>
                        <p className="textError">{formErrors.name}</p>
                    <div className="content">
                        <label className="textInfo">Email</label>
                        <input
                            autoComplete="off"
                            onClick={changeBottom}
                            className="inputFormContact"
                            type="text"
                            placeholder="email"
                            name="email"
                            onChange={handleChange}
                        />
                        <span className="border"></span>
                    </div>
                        <p className="textError">{formErrors.email}</p>
                    <div className="content">
                        <label className="textInfo">Subject</label>
                        <input
                            autoComplete="off"
                            onClick={changeBottom}
                            className="inputFormContact"
                            type="text"
                            placeholder="subject"
                            name="subject"
                            onChange={handleChange}
                        />
                        <span className="border"></span>
                    </div>
                        <p className="textError">{formErrors.subject}</p>
                    <div className="content">
                        <label className="textInfo">Message</label>
                        <input
                            autoComplete="off"
                            onClick={changeBottom}
                            className="inputFormContact inputmessage"
                            type="text"
                            placeholder="message"
                            name="message"
                            onChange={handleChange}
                        />
                        <span className="border"></span>
                    </div>
                        <p className="textError">{formErrors.message}</p>
                    <br />
                    <button type="submit" onClick={handleSubmit} className="glow-on-hover">Send message !</button>
                </form>
            </div>
        </div>
    )
}