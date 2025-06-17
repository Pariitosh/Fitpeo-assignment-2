import '../styles/footer.css'
export default function Footer() {
    return (
        <>

            <footer>
                <div className="footer-left">
                    <h1>DESIGN</h1>
                    <h1>DECLARES</h1>
                </div>

                <div className="footer-right">
                    <div className='footer-tight-top'>


                        <ul className='socials'>
                            <li>Contact</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Privacy Policy</li>
                        </ul>
                        <div className='sign-up'>
                            <p className='sign-up-text'>Sign up to the D! Newsletter</p>
                            <div className='form-input footer-input'>
                                <label>Email:*</label>
                                <input />
                            </div>

                            <div className='subscribe'>
                                <label className="custom-radio2 news-check">
                                    <input type="radio" name="group1" value="option2" />
                                    <span className="checkmark"></span>
                                    I would like to be added to the Design Declares! newsletter and receive further updates.
                                </label>
                                <button className='btn'>Subscribe</button>
                            </div>
                            <p className='underline privacy'>View our Privacy Policy</p>
                        </div>
                    </div>
                    <p className='footer-para1'>This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and on demand. <span className='underline hover-white'>Learn more about our carbon footprint.</span></p>

                    <p className='footer-para2'>Empowered by <span className='underline hover-white'>Driftime®</span></p>
                </div>

            </footer>
        </>
    )
}