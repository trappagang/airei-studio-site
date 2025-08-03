import { ContactForm } from "@/components/contact/contact-form";
import { JoinUs } from "@/components/contact/join-us";
import { Footer } from "@/components/landing/footer";
import { Section } from "@/components/landing/section";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <main className="flex-grow pt-[64px] text-white">
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-black z-0" />
                    <Section className="!pt-16 md:!pt-24 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h1 className="font-headline text-4xl md:text-6xl mb-4 relative glitch-button" data-text="Connect">
                                <span className="relative z-10">Connect & Create</span>
                            </h1>
                            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                                Have a project in mind or want to join our network? We'd love to hear from you.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
                            <ContactForm />
                            <JoinUs />
                        </div>
                    </Section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
