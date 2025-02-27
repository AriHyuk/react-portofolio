import { JSX } from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

interface IconProps {
  url: string;
  name: string;
  icon: JSX.Element;
}

interface SocialMediaIconsProps {
  icons: IconProps[];
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ icons }) => (
  <div className="flex space-x-4">
    {icons.map((icon, index) => (
      <a
        key={index}
        href={icon.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300"
        aria-label={icon.name}
      >
        {icon.icon}
      </a>
    ))}
  </div>
);

interface QuickLink {
  name: string;
  url: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

const Footer: React.FC = () => {
  const socialMediaIcons: IconProps[] = [
    { url: "https://instagram.com", name: "Instagram", icon: <FaInstagram className="text-2xl" /> },
    { url: "https://twitter.com", name: "Twitter", icon: <FaTwitter className="text-2xl" /> },
    { url: "https://facebook.com", name: "Facebook", icon: <FaFacebook className="text-2xl" /> },
    { url: "https://linkedin.com", name: "LinkedIn", icon: <FaLinkedin className="text-2xl" /> },
  ];

  const quickLinks: QuickLink[] = [
    { name: "Beranda", url: "#" },
    { name: "About Me", url: "about" },
    { name: "Layanan", url: "#" },
    { name: "Kontak", url: "#" },
  ];

  const contactInfo: ContactInfo = {
    email: "ariawl0209@gmail.com",
    phone: "+62 858 9370 7918",
    address: "Cikande, Serang, Indonesia",
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tentang Kami */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Me</h3>
            <p className="text-gray-400">
              Saya adalah seorang pengembang web yang berfokus pada pengembangan aplikasi web dan desain UI/UX. 
              Saya memiliki pengalaman dalam pengembangan aplikasi web dengan teknologi
            </p>
          </div>

          {/* Link Cepat */}
          <div>
            <h3 className="text-lg font-bold mb-4">Link Cepat</h3>
            <ul className="text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.url} className="hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Email: {contactInfo.email}</li>
              <li className="mb-2">Telepon: {contactInfo.phone}</li>
              <li className="mb-2">Alamat: {contactInfo.address}</li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sosial Media</h3>
            <SocialMediaIcons icons={socialMediaIcons} />
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-gray-700 my-6" />

        {/* Bagian Bawah Footer */}
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} ari awaludin.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;