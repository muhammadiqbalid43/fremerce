import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="py-12 border-t">
      <div className="container grid gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 text-center md:text-left ">
          <Link to="/">
            <span className="text-xl font-bold">FREMERCE</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Your one-stop destination for premium fashion and accessories.
          </p>
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>

        <div className="space-y-4 text-center md:text-left ">
          <h3 className="font-medium">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Best Sellers
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Sale
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-center md:text-left ">
          <h3 className="font-medium">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Size Guide
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-center md:text-left ">
          <h3 className="font-medium">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container pt-8 mx-auto mt-8 border-t">
        <p className="text-xs text-center text-muted-foreground">
          {" "}
          © {new Date().getFullYear()} Fremerce. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
