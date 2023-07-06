import React from 'react';

function Footer(){
    return(
        <div class="contact-box">
            <div class='contact-left'>
                <h3>Send you Request</h3>
                <form>
                    <div class="input row">
                        <div class="input group">
                            <label>Name</label>
                            <input type="" placeholder="John Doe" />
                        </div>
                        <div class="input group">
                            <label>Phone</label>
                            <input type="" placeholder="+254780897675" />
                        </div>
                    </div>
                    <div class="input-row">
                    <div class="input group">
                        <label>Email</label>
                        <input type="" placeholder="emailgoogle@gmail.com" />
                    </div>
                    </div>
                    <label>Message</label>
                    <textarea rows="5" placeholder='Your Message'></textarea>

                    <button type='submit'>submit</button>
                </form>
            </div>
            <div class="contact-right">
                <h3>Reach Us</h3>
                <table>
                    <tr>
                        <td>Email</td>
                        <td>emailgoogle@gmail.com</td>
                    </tr>
                    <tr>
                        <td>
                            <td>Phone</td>
                            <td>+2548756789765</td>
                        </td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>Sarit Plaza, 5th floor<br />
                            Karuna Road, Westlands, Nairobi.</td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default Footer;