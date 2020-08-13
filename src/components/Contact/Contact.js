import React from 'react';

const Contact = (props) => {

    console.log(props)

    return (
        <div id="contactForm">
        <hr/>
            <h2>Contact Us</h2>
          <p class="lead">Thanks for visiting our page! Feel free to leave 
          us a message to get in touch. Let us know how we're doing!</p>
        

          <form action="https://formspree.io/mqkygydn" method="POST">
            <div class="form-group">
              
              <label>
                Your email:
                <input type="text" class="form-control" name="_replyto"/>
              </label>

            </div>
            <div class="form-group">
              <label>
                Your message:
                <textarea name="message" class="form-control"></textarea>
              </label>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>

)
}

export default Contact;