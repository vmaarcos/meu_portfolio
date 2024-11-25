import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactLinks = [
  {
    label: "Email",
    href: "mailto:eumarcosalvess@gmail.com",
    icon: <EnvelopeIcon className="w-5 h-5" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/vmaarcos",
    icon: <FaGithub />,
  },

  {
    label: "Instagram",
    href: "https://www.instagram.com/v.maarcos_/",
    icon: <FaInstagram />,
  },
  {
    label: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=5511948502101&text=Olá%20👋%20vim%20pelo%20seu%20portfolio.",
    icon: <FaWhatsapp />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marcos-vinicios-02174b24b/",
    icon: <FaLinkedin />,
  },
];

export default ContactLinks;
