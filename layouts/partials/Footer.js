import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;
  return (
    <footer className="section bg-gray-500">
      <div className="container text-center">
        {/* footer menu */}
        <ul className="mb-8 space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link href={menu.url} className="p-4 text-white font-semibold hover:text-[#01AD9F]">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* social icons */}
        <Social source={social} className="social-icons mb-8" />
        {/* copyright */}
        {markdownify(copyright, "p", "text-light")}
      </div>
    </footer>
  );
};

export default Footer;
