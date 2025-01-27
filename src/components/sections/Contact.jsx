import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github
} from 'lucide-react';
import { contactContent } from '../../constants/contactContent';

// Velog 및 Notion SVG 아이콘 컴포넌트
const VelogIcon = ({ size = 24, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 192 192" 
    width={size} 
    height={size}
    fill="currentColor"
    className={`text-emerald-600 hover:text-emerald-800 ${className}`}
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z"
    />
  </svg>
);

const NotionIcon = ({ size = 24, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-emerald-600 hover:text-emerald-800 ${className}`}
  >
    <path d="M 15.46875 1.5 L 2.9804688 2 A 0.50038132 0.50038132 0 0 0 2.9511719 2.0019531 A 1.0001 1.0001 0 0 0 2.9296875 2.0039062 A 1.0001 1.0001 0 0 0 2 3 L 2 16.894531 C 2 17.487 2.1760213 18.066018 2.5039062 18.558594 L 5.1679688 22.554688 A 1.0001 1.0001 0 0 0 6.0625 22.998047 L 22.0625 21.998047 A 1.0001 1.0001 0 0 0 23 21 L 23 5.5 A 1.0001 1.0001 0 0 0 22.736328 4.8242188 A 0.50037856 0.50037856 0 0 0 22.587891 4.6933594 A 0.50037856 0.50037856 0 0 0 22.585938 4.6914062 A 1.0001 1.0001 0 0 0 22.398438 4.5839844 L 18.296875 2.2441406 L 18.330078 2.265625 C 17.492273 1.6962298 16.485312 1.4260957 15.474609 1.5 L 15.46875 1.5 z M 15.525391 2.4980469 A 0.50005 0.50005 0 0 0 15.542969 2.4980469 C 16.330286 2.4394359 17.115017 2.6483002 17.767578 3.0917969 A 0.50005 0.50005 0 0 0 17.800781 3.1132812 L 20.324219 4.5527344 L 6.8554688 4.9882812 L 4.46875 2.9414062 L 15.525391 2.4980469 z M 21 6.5332031 L 21 20.060547 L 7 20.935547 L 7 6.984375 L 21 6.5332031 z M 19.441406 8.5019531 C 18.427406 8.5619531 17.407625 8.6115 16.390625 8.6875 C 16.056625 8.7125 15.808578 9.0013594 15.767578 9.3183594 C 15.748578 9.4663594 15.789031 9.5426875 15.957031 9.5546875 C 16.265031 9.5776875 16.570625 9.6212031 16.890625 9.6582031 L 16.890625 15.527344 C 16.796625 15.392344 16.745266 15.321047 16.697266 15.248047 C 15.387266 13.269047 14.071438 11.293641 12.773438 9.3066406 C 12.577437 9.0066406 12.393953 8.86225 12.001953 8.90625 C 11.084953 9.00725 10.160234 9.0373281 9.2402344 9.1113281 C 8.7302344 9.1523281 8.4274531 9.5989844 8.5644531 10.083984 C 8.9094531 10.113984 9.2572813 10.144781 9.6132812 10.175781 L 9.6132812 18.607422 C 9.3792813 18.673422 9.1461563 18.747688 8.9101562 18.804688 C 8.6701563 18.862688 8.5577187 19.024094 8.5117188 19.246094 C 8.4747187 19.424094 8.5183281 19.514047 8.7363281 19.498047 C 9.4853281 19.445047 10.238281 19.412188 10.988281 19.367188 C 11.298281 19.349188 11.609063 19.342969 11.914062 19.292969 C 12.330062 19.223969 12.556563 18.970453 12.601562 18.564453 C 12.231563 18.482453 11.859375 18.392312 11.484375 18.320312 C 11.317375 18.288312 11.260719 18.219875 11.261719 18.046875 C 11.267719 16.090875 11.266578 14.133734 11.267578 12.177734 C 11.267578 12.113734 11.280969 12.048406 11.292969 11.941406 C 11.350969 12.018406 11.374484 12.049984 11.396484 12.083984 C 12.408484 13.654984 13.417547 15.229875 14.435547 16.796875 C 14.873547 17.470875 15.322203 18.137875 15.783203 18.796875 C 16.117203 19.274875 16.607063 19.426547 17.164062 19.310547 C 17.512062 19.237547 17.8465 19.098234 18.1875 18.990234 C 18.3775 18.930234 18.432641 18.807422 18.431641 18.607422 C 18.424641 15.733422 18.427734 12.860328 18.427734 9.9863281 C 18.427734 9.4513281 18.426031 9.4517969 18.957031 9.3417969 C 19.445031 9.2407969 19.588406 9.0019531 19.441406 8.5019531 z"></path>
  </svg>
 );

const SocialLink = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-emerald-600 hover:text-emerald-800 transition-colors"
    aria-label={label}
  >
    <Icon />
  </a>
);

const Contact = () => {
  const { language } = useLanguage();
  const content = contactContent[language];

  return (
      <section id="contact" className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl paperlogy-extrabold text-gray-900 mb-4">
              {content.title}<span className="text-emerald-900">.</span>
            </h2>
            <p className="paperlogy-semibold text-gray-600 max-w-2xl">
              {content.subtitle}
            </p>
          </div>
  
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-emerald-600" />
                <a 
                  href={`mailto:${content.contacts.email}`} 
                  className="hover:text-emerald-600 transition-colors"
                >
                  {content.contacts.email}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-emerald-600" />
                <a 
                  href={`tel:${content.contacts.phone}`} 
                  className="hover:text-emerald-600 transition-colors"
                >
                  {content.contacts.phone}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-emerald-600" />
                <span>{content.contacts.location}</span>
              </div>
            </div>

            <div className="mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.4676780697953!2d127.02719857538603!3d37.26494637213763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7f3ca9536197%3A0xfcd29278554c0ae3!2z7ISd7J207Iuc7Jqp!5e0!3m2!1sko!2skr!4v1705484346865!5m2!1sko!2skr" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>


            <div className="flex space-x-6">
              <SocialLink 
                href={content.links.linkedin} 
                icon={Linkedin} 
                label="LinkedIn Profile" 
              />
              <SocialLink 
                href={content.links.github} 
                icon={Github}
                label="GitHub Profile" 
              />
              <a 
                href={content.links.velog} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-600 hover:text-emerald-800 transition-colors"
                aria-label="Velog"
              >
                <VelogIcon />
              </a>
              <a 
                href={content.links.notion} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-600 hover:text-emerald-800 transition-colors"
                aria-label="Notion"
              >
                <NotionIcon />
              </a>
            </div>

          </div>
        </div>
      </section>
  );
};

export default Contact;