"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Users, Wrench, Car, Award, Shield, Circle, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="dotGrid"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="AutoShop"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Inventory", id: "inventory" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Premium Auto Services & Quality Vehicles"
          description="Your trusted destination for professional automotive repairs, maintenance, and quality pre-owned vehicles. Expert care for every ride."
          tag="Welcome to AutoShop"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363duVhy6gsyLA7AhWcnWC5yhmx/uploaded-1764239722224-q8rfbbp9.jpg"
          imageAlt="Luxury vehicles in showroom"
          buttons={[
            { text: "Browse Inventory", href: "inventory" },
            { text: "Book Service", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Trusted by car owners and businesses for over 25 years. We deliver quality automotive solutions with expert care and competitive pricing."
          metrics={[
            { icon: Users, label: "Satisfied Customers", value: "15,000+" },
            { icon: Wrench, label: "Services Completed", value: "50,000+" },
            { icon: Car, label: "Vehicles Sold", value: "5,000+" },
            { icon: Award, label: "Industry Recognition", value: "25 Years" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardFour
          title="Our Services"
          description="Comprehensive automotive solutions tailored to your vehicle's needs"
          tag="What We Offer"
          features={[
            {
              title: "Oil Changes & Maintenance",
              description: "Regular maintenance keeps your vehicle running smoothly. From oil changes to fluid checks, we ensure peak performance.",
              icon: Wrench
            },
            {
              title: "Brake Service",
              description: "Safe braking is essential. We inspect, service, and repair brake systems with precision and expertise.",
              icon: Shield
            },
            {
              title: "Tire & Wheel Service",
              description: "Tire rotation, balancing, and replacement. Professional service to ensure proper alignment and safety.",
              icon: Circle
            },
            {
              title: "Engine Diagnostics",
              description: "Advanced diagnostic tools identify engine problems quickly. Accurate troubleshooting for reliable solutions.",
              icon: Zap
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="inventory" data-section="inventory">
        <ProductCardOne
          title="Featured Inventory"
          description="Browse our carefully selected collection of quality pre-owned vehicles"
          tag="Available Now"
          products={[
            {
              id: "1",
              name: "2022 Premium Sedan",
              price: "$32,500",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363duVhy6gsyLA7AhWcnWC5yhmx/uploaded-1764239728472-fvxaf37f.jpg",
              imageAlt: "2022 Premium Sedan"
            },
            {
              id: "2",
              name: "2021 Modern SUV",
              price: "$38,900",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363duVhy6gsyLA7AhWcnWC5yhmx/uploaded-1764239730126-jddba0ga.jpg",
              imageAlt: "2021 Modern SUV"
            },
            {
              id: "3",
              name: "2023 Sports Car",
              price: "$45,200",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363duVhy6gsyLA7AhWcnWC5yhmx/uploaded-1764239732127-tbyoyq8n.jpg",
              imageAlt: "2023 Sports Car"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real feedback from satisfied vehicle owners and service clients"
          tag="Customer Reviews"
          testimonials={[
            {
              id: "1",
              name: "John Mitchell",
              handle: "@john_m",
              testimonial: "Outstanding service! The team at AutoShop fixed my car exactly as promised. Professional, friendly, and fair pricing. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363duVhy6gsyLA7AhWcnWC5yhmx/uploaded-1764239733497-o5wcy165.jpg",
              imageAlt: "John Mitchell"
            },
            {
              id: "2",
              name: "Sarah Chen",
              handle: "@sarah_chen",
              testimonial: "Found my perfect car here. The sales team was patient and helped me find exactly what I needed within my budget.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363duVhy6gsyLA7AhWcnWC5yhmx/uploaded-1764239735022-a1s1vbiw.png",
              imageAlt: "Sarah Chen"
            },
            {
              id: "3",
              name: "Michael Torres",
              handle: "@m_torres",
              testimonial: "I've been taking my cars to AutoShop for 5 years. Consistent quality work, honest pricing, and always treat their customers right.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363duVhy6gsyLA7AhWcnWC5yhmx/uploaded-1764239737448-8cr9zt3h.jpg",
              imageAlt: "Michael Torres"
            },
            {
              id: "4",
              name: "Emma Wilson",
              handle: "@emma_w",
              testimonial: "Best decision purchasing from AutoShop. Every vehicle is thoroughly inspected and documented. Peace of mind included.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363duVhy6gsyLA7AhWcnWC5yhmx/uploaded-1764239738946-qn2i1t2l.jpg",
              imageAlt: "Emma Wilson"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Get answers to common questions about our services and vehicle inventory"
          tag="Help & Support"
          faqs={[
            {
              id: "1",
              title: "What types of vehicles do you service?",
              content: "We service all makes and models including sedans, SUVs, trucks, and specialty vehicles. Whether it's routine maintenance or major repairs, our experienced technicians can handle it."
            },
            {
              id: "2",
              title: "Do you offer warranties on vehicles?",
              content: "Yes! All our pre-owned vehicles come with a comprehensive inspection report. We offer optional extended warranties on select vehicles for added peace of mind."
            },
            {
              id: "3",
              title: "How often should I get an oil change?",
              content: "Most modern vehicles require oil changes every 5,000-7,500 miles or every 6 months, whichever comes first. Check your vehicle's manual for specific recommendations."
            },
            {
              id: "4",
              title: "Can I trade in my vehicle?",
              content: "Absolutely! We accept trade-ins on most vehicles. Bring your car in for a free evaluation and we'll provide a competitive trade-in value."
            },
            {
              id: "5",
              title: "Do you offer financing options?",
              content: "Yes, we work with several lenders to offer flexible financing options. Our team can help you find a payment plan that works for your budget."
            },
            {
              id: "6",
              title: "What's your warranty on service work?",
              content: "All service work is backed by our satisfaction guarantee. If you're not completely satisfied, we'll make it right at no additional cost."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363duVhy6gsyLA7AhWcnWC5yhmx/uploaded-1764239740351-w292a1v2.jpg"
          imageAlt="Professional auto service center"
          mediaPosition="right"
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to service your vehicle or find your next car?"
          description="Contact us today for service appointments, inventory inquiries, or financing questions. Our team is ready to help."
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="We respect your privacy. Unsubscribe at any time. By subscribing, you agree to our terms and privacy policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="AutoShop"
          columns={[
            {
              items: [
                { label: "Services", href: "services" },
                { label: "Inventory", href: "inventory" },
                { label: "About Us", href: "about" }
              ]
            },
            {
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Service Center", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Terms & Conditions", href: "https://example.com/terms" },
                { label: "Privacy Policy", href: "https://example.com/privacy" },
                { label: "Financing", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}