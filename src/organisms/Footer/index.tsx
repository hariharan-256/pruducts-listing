import { Container } from "../Container";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center xl:text-left py-10">
            <Container>
                <div className="flex flex-wrap justify-around ">
                    <div className="flex-1 min-w-[200px]">
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <p>Home</p>
                        <p>Services</p>
                        <p>Products</p>
                        <p>FAQ</p>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <a href="https://facebook.com" className="text-white no-underline">
                            Facebook
                        </a>
                        <br />
                        <a href="https://twitter.com" className="text-white no-underline">
                            Twitter
                        </a>
                        <br />
                        <a href="https://linkedin.com" className="text-white no-underline">
                            LinkedIn
                        </a>
                        <br />
                        <a href="https://instagram.com" className="text-white no-underline">
                            Instagram
                        </a>
                    </div>
                    <div className="flex-1 min-w-[200px] m-5">
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p>Email: info@company.com</p>
                        <p>Phone: +123-456-7890</p>
                        <p>Address: 1234 Street Name, City, Country</p>
                    </div>
                </div>
                <div className="text-center mt-5 border-t border-gray-700 pt-3">
                    <p>&copy; 2024 Company Name. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};
