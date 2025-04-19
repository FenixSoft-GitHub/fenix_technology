import { Mylocation } from '@/components/ContactUs';
import ContactForm from '@/components/ContactUs/ContactForm';
import ContactInfo from '@/components/ContactUs/ContactInfo';
import FAQSection from '@/components/ContactUs/FAQSection';
import SocialLinks from '@/components/ContactUs/SocialLinks';

export const ContactUsPage = () => {

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white w-full h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full bg-[url('/img/contactanos.avif')]"
                    style={{ maskImage: "linear-gradient(black 70%, transparent)" }}
                />
                <div className="absolute inset-0 bg-black opacity-20" />

                <div className="relative flex flex-col gap-12 items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8">
                    <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">
                        Contáctanos
                    </h1>
                    <p
                        className="max-w-[800px] mx-auto text-balance text-center text-sm tracking-wide md:text-xl"
                    >
                        ¿Tienes alguna pregunta, necesitas asistencia o simplemente quieres saber más sobre nuestros equipos de tecnología? En Fenix Technology, estamos aquí para ayudarte. Utiliza el formulario a continuación para enviarnos un mensaje directo, o consulta nuestra información de contacto para comunicarte con nosotros por correo electrónico o teléfono. Tu satisfacción es nuestra prioridad, y nos esforzaremos por responder a tu consulta lo antes posible.
                    </p>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-18">
                <div>
                    <ContactForm />
                </div>
                <div>
                    <ContactInfo />
                </div>
            </div>
            <div>
                <SocialLinks />
            </div>
            <div id='location'>
                <Mylocation />
            </div>
            <div id='faq' className="container mx-auto mb-10 max-w-[800px]">
                <FAQSection />
            </div>
        </div>
    )
}