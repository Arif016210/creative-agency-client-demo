import React from 'react';
import './FooterForm.css';

const FooterForm = () => {
    return (
        <section className="container" >
            <div className="row footerForm-container" >
                <div className="col-md-6" >
                    <div className="footerForm-left" >
                        <h3>Let us handle your <br /> project, professionally.</h3>
                        <small>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</small>
                    </div>
                </div>
                <div className="col-md-6" >
                    <form action="">
                        <input type="text" className="form-control" placeholder="your email address" required="required" />
                        <br />
                        <input type="text" className="form-control" placeholder="your name/company's name" required="required" />
                        <br />
                        <textarea rows="10" class="form-control" placeholder="your massage" required="required"></textarea>
                        <br />
                        <button className="footerForm-btn" >Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FooterForm;