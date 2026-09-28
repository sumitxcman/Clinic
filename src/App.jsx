import React, { useState } from 'react';
import {
  Activity,
  HeartPulse,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Award,
  Sparkles,
  Stethoscope,
  Smile,
  Zap,
  Users,
  MessageCircle,
  Star
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    concern: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const treatments = [
    {
      title: "Dry Needling Therapy",
      desc: "Advanced therapeutic trigger-point dry needling to release myofascial knot tension, alleviate deep chronic pain, and restore tissue mobility.",
      icon: Zap,
    },
    {
      title: "Cupping Therapy",
      desc: "Traditional & modern myofascial decompression cupping to stimulate microcirculation, reduce inflammation, and accelerate tissue recovery.",
      icon: Sparkles,
    },
    {
      title: "Back & Neck Pain Care",
      desc: "Specialized non-invasive therapy for cervical stiffness, lumbar disc compression, postural misalignment, and chronic spinal discomfort.",
      icon: HeartPulse,
    },
    {
      title: "Manual Therapy & Joint Alignment",
      desc: "Hands-on joint mobilization, soft tissue release, and knee, hip & leg alignment restoration tailored to restore biomechanical symmetry.",
      icon: ShieldCheck,
    },
    {
      title: "Postpartum Care & Rehabilitation",
      desc: "Dedicated postnatal physical therapy focused on core re-strengthening, belly stiffness reduction, pelvic floor care, and postural restoration.",
      icon: Smile,
    },
    {
      title: "Sports & Post-Surgery Rehab",
      desc: "Structured rehabilitation protocols to help athletes and surgical recovery patients regain mobility, strength, and confidence.",
      icon: Activity,
    }
  ];

  const conditions = [
    "Back Pain & Sciatica",
    "Neck & Cervical Stiffness",
    "Knee & Leg Alignment",
    "Belly Stiffness & Postpartum Care",
    "Shoulder & Rotator Cuff Pain",
    "Sports Injuries",
    "Muscle Spasms & Knots",
    "Joint Stiffness & Arthritis",
    "Postural Imbalance",
    "Post-Surgical Recovery"
  ];

  const processSteps = [
    {
      number: "01",
      title: "Detailed Assessment",
      desc: "Dr. Megha understands your symptoms, movement restrictions, medical history, and daily pain points."
    },
    {
      number: "02",
      title: "Personalized Care Plan",
      desc: "A custom clinical protocol combining Manual Therapy, Dry Needling, Cupping, or targeted exercise is crafted."
    },
    {
      number: "03",
      title: "Gentle & Hands-on Treatment",
      desc: "You receive empathetic, one-on-one therapy focused on comfort, tissue release, and pain elimination."
    },
    {
      number: "04",
      title: "Long-Term Alignment & Health",
      desc: "Guidance on posture correction and home exercises to ensure lasting relief and prevent recurrence."
    }
  ];

  const whyChooseUs = [
    {
      title: "Empathetic, One-on-One Attention",
      desc: "Recognized for soft-spoken, patient-first care where every session is personally guided without feeling rushed."
    },
    {
      title: "Advanced Clinical Modalities",
      desc: "Proficient in certified Dry Needling, Cupping Therapy, and evidence-based Manual Mobilization."
    },
    {
      title: "Postpartum & Women's Health Focus",
      desc: "A proud women-owned practice offering specialized recovery care for mothers and postpartum rehabilitation."
    },
    {
      title: "Proven 5.0 ★ Track Record",
      desc: "Consistently rated 5.0 stars with over 219+ heartfelt Google reviews from satisfied patients in Delhi."
    },
    {
      title: "Peaceful Park-Facing Clinic",
      desc: "Located in Model Town III facing greenery, offering a serene, sanitized, and calming healing space."
    }
  ];

  const googleReviews = [
    {
      author: "Reeta Jain",
      rating: 5,
      timing: "5 months ago",
      snippet: "Dr. Megha – A True Angel For My Daughter. She treated her with exceptional care, empathy, and remarkable expertise. Truly grateful for her guidance and support!"
    },
    {
      author: "Aarushi Makhija",
      rating: 5,
      timing: "7 months ago",
      snippet: "Highly Recommend - Superb postpartum care and guidance even with online consultation! Her exercises and gentle approach helped me recover my physical strength quickly."
    },
    {
      author: "Kusum Sewalia",
      rating: 5,
      timing: "3 months ago",
      snippet: "Excellent experience with Dr. Megha, Physiotherapist at Model Town. She is highly professional, knowledgeable, and caring. Carefully understood my concerns and provided effective treatment!"
    }
  ];

  const faqs = [
    {
      q: "Where is Dr. Meghha N Gupta's clinic located?",
      a: "The clinic is conveniently situated park facing at C-12, Model Town III, Pocket C, Phase 3, Azadpur, New Delhi, Delhi 110009."
    },
    {
      q: "What conditions does Dr. Megha specialize in?",
      a: "Dr. Megha specializes in back and neck pain treatment, Dry Needling, Cupping therapy, postpartum physical recovery, belly stiffness, knee & leg alignment, and manual therapy."
    },
    {
      q: "Are online consultations available?",
      a: "Yes! In addition to in-clinic sessions, Dr. Megha provides structured guidance and exercise therapy via online consultations for postpartum and rehabilitation patients."
    },
    {
      q: "Is Dry Needling or Cupping painful?",
      a: "Both therapies are performed with sterile, gentle clinical techniques. Most patients experience immediate tension release with minimal discomfort under Dr. Megha's experienced care."
    },
    {
      q: "What are the clinic's operating hours?",
      a: "The clinic is open Monday through Saturday and closes at 6:00 PM. Prior appointment booking is highly recommended."
    },
    {
      q: "How can I book an appointment?",
      a: "You can book an appointment by calling +91 99110 58375, sending a message on WhatsApp, or submitting the appointment request form on this page."
    }
  ];

  const galleryImages = [
    {
      title: "Authentic Cupping Therapy Session",
      category: "Myofascial Decompression",
      img: "/cupping-therapy-session.jpg"
    },
    {
      title: "Stability Ball & Movement Rehabilitation",
      category: "Functional Rehab",
      img: "/rehab-exercise-ball.jpg"
    },
    {
      title: "Neuromuscular & Facial Therapy",
      category: "Targeted Manual Care",
      img: "/treatment-neuromuscular.jpg"
    },
    {
      title: "One-on-One Clinical Consultation",
      category: "Patient Assessment",
      img: "/consultation-clean.jpg"
    },
    {
      title: "Authentic Dry Needling Therapy",
      category: "Trigger Point Relief",
      img: "/dry-needling-session.jpg"
    },
    {
      title: "Peaceful Park-Facing Reception",
      category: "Clinic Environment",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-xl bg-teal-700 flex items-center justify-center text-white shadow-sm group-hover:bg-teal-800 transition-colors">
                <Activity className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors">
                  Dr. Meghha N Gupta
                </span>
                <span className="text-[11px] font-medium tracking-wider text-teal-700 uppercase">
                  Physiotherapy & Rehabilitation Center
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-600">
              <a href="#home" className="hover:text-teal-700 transition-colors">Home</a>
              <a href="#about" className="hover:text-teal-700 transition-colors">About</a>
              <a href="#treatments" className="hover:text-teal-700 transition-colors">Treatments</a>
              <a href="#conditions" className="hover:text-teal-700 transition-colors">Conditions</a>
              <a href="#why-us" className="hover:text-teal-700 transition-colors">Why Us</a>
              <a href="#testimonials" className="hover:text-teal-700 transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-teal-700 transition-colors">Contact</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="https://wa.me/919911058375"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-1 text-emerald-600" />
                WhatsApp
              </a>
              <a
                href="#appointment"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-sm hover:shadow transition-all"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-teal-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              About Dr. Megha
            </a>
            <a
              href="#treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Treatments
            </a>
            <a
              href="#conditions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Conditions
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Patient Reviews (5.0 ★)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-3 px-4 rounded-xl font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-sm"
              >
                Book Appointment
              </a>
              <a
                href="https://wa.me/919911058375"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2.5 px-4 rounded-xl font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 text-sm"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-emerald-700" />
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section id="home" className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/70 via-[#F8FAFC] to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (order-2 on mobile, order-1 on desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
                <span>Dry Needling • Cupping • Manual Therapy • Postpartum Care</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Move Better. <br />
                <span className="text-teal-700">Feel Stronger.</span> <br />
                Live Pain-Free.
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Compassionate and expert physiotherapy by <strong className="text-slate-800">Dr. Meghha N Gupta</strong> in Model Town, Delhi. Advanced therapies tailored for back & neck pain, knee alignment, belly stiffness, and postpartum recovery.
              </p>

              {/* Google Review Badge Banner */}
              <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs max-w-md">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-50 text-amber-500 font-bold">
                  ★
                </div>
                <div>
                  <div className="flex items-center space-x-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="text-xs font-bold text-slate-900 ml-1">5.0 Star Rating</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Based on <strong>219+ verified Google Reviews</strong> in Delhi
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <a
                  href="#appointment"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-md hover:shadow-lg transition-all"
                >
                  Book an Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919911058375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-all"
                >
                  <MessageCircle className="mr-2 w-5 h-5 text-emerald-700" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Bottom Hero Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80 mt-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">Dry Needling (32+)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">Cupping Therapy (25+)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">Back Pain Relief (40+)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">Empathetic Care</span>
                </div>
              </div>
            </div>

            {/* Right Visual (order-1 on mobile, order-2 on desktop) */}
            <div className="order-1 lg:order-2 lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <img
                    src="/treatment-neuromuscular.jpg"
                    alt="Dr. Meghha N Gupta providing guided physiotherapy rehabilitation therapy"
                    className="w-full h-[400px] sm:h-[470px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <span className="bg-teal-800/80 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                      Park Facing Clinic • Model Town III, Delhi
                    </span>
                  </div>
                </div>

                {/* Floating Trust Card */}
                <div className="relative sm:absolute mt-4 sm:mt-0 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 max-w-sm sm:max-w-xs transition-transform hover:-translate-y-1 z-10">
                  <div className="flex items-start space-x-3">
                    <div className="p-2.5 rounded-xl bg-teal-100 text-teal-700 shrink-0">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Personalized Healing</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                        Gentle, empathetic treatment combining manual therapy and modern clinical modalities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTRODUCTION SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                <img
                  src="/rehab-exercise-ball.jpg"
                  alt="Modern rehabilitation and physical therapy session in Model Town III"
                  className="w-full h-[440px] object-cover"
                />
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Care That Moves With You
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Your Recovery. Our Expertise.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Led by <strong>Dr. Meghha N Gupta</strong>, our center in Model Town III is dedicated to offering personalized, evidence-informed physiotherapy. Known for her soft-spoken and deeply empathetic approach, Dr. Megha takes time to understand your pain, biomechanics, and daily lifestyle limitations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From precision Dry Needling and Cupping to comprehensive postpartum recovery and joint alignment, each treatment plan is custom designed to bring quick comfort and permanent mobility.
              </p>

              <div>
                <a
                  href="#team"
                  className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors group"
                >
                  Meet Dr. Meghha N Gupta
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Verified Statistics from Listing */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-teal-700">5.0 ★</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Google Rating</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-teal-700">219+</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Happy Patients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-teal-700">100%</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Dedicated Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TREATMENTS SECTION */}
      <section id="treatments" className="py-20 bg-teal-50/40 border-y border-teal-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Physiotherapy Treatments Designed Around You
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base">
              Evidence-based clinical treatments focused on pain relief, functional movement restoration, and sustainable physical wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, idx) => {
              const IconComponent = treatment.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-100/70 text-teal-700 flex items-center justify-center mb-5 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                      {treatment.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {treatment.desc}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#appointment"
                      className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                    >
                      Book Consultation <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CONDITIONS WE HELP WITH */}
      <section id="conditions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Helping You Get Back to Everyday Life
            </h2>
            <p className="text-slate-600 mt-4 text-sm sm:text-base">
              We provide comprehensive therapeutic assessment and rehabilitation for common conditions and musculoskeletal challenges:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {conditions.map((condition, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all text-slate-800"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0"></div>
                <span className="text-sm font-semibold tracking-tight">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Simple 4-Step Process</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              How Your Journey Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative bg-white p-7 rounded-2xl border border-slate-200/70 shadow-xs">
                <span className="text-3xl font-extrabold text-teal-700/30 block mb-3 font-mono">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Patient-Centered Excellence</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              A Better Approach to Physiotherapy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.slice(0, 3).map((item, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-teal-50/40 border border-teal-100">
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {whyChooseUs.slice(3, 5).map((item, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-teal-50/40 border border-teal-100">
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DOCTOR PROFILE SECTION */}
      <section id="team" className="py-20 bg-teal-50/30 border-y border-teal-100/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Clinical Leadership</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Meet Your Physiotherapist
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[340px] sm:max-w-[360px] rounded-3xl overflow-hidden border-2 border-teal-100 shadow-lg bg-slate-100 relative group">
                  <div className="h-[420px] sm:h-[460px] w-full overflow-hidden bg-white">
                    <img
                      src="/dr-megha-gupta.jpg"
                      alt="Dr. Meghha N Gupta - Senior Physiotherapist"
                      className="w-full h-full object-cover object-[50%_8%] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent p-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 block">
                      Lead Physiotherapist
                    </span>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      Dr. Meghha N Gupta
                    </h4>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide">
                    Senior Physiotherapist
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold border border-rose-100">
                    Women-Owned Clinic
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Dr. Meghha N Gupta
                </h3>
                <p className="text-sm font-semibold text-teal-700">
                  Senior Physiotherapist & Rehabilitation Specialist
                </p>

                <div className="space-y-3 pt-2 text-sm text-slate-600">
                  <div>
                    <span className="font-bold text-slate-800">Clinical Specialization: </span>
                    <span>Dry Needling, Cupping Therapy, Manual Therapy, Postpartum Care, Knee & Spinal Alignment</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800">Clinic Location: </span>
                    <span>Park Facing, Model Town III, Azadpur, New Delhi</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800">Google Reputation: </span>
                    <span className="text-amber-600 font-semibold">5.0 ★ Rating (219+ Verified Patient Reviews)</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="#appointment"
                    className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold bg-teal-700 text-white hover:bg-teal-800 transition-colors shadow-sm"
                  >
                    Book with Dr. Megha
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a
                    href="tel:09911058375"
                    className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2 text-teal-700" />
                    Call: 099110 58375
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REAL GOOGLE TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Verified Patient Reviews</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              What Our Patients Say
            </h2>
            <div className="flex items-center justify-center space-x-2 mt-3">
              <div className="flex text-amber-400">
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <span className="font-bold text-slate-800">5.0</span>
              <span className="text-slate-500 text-sm">(219 reviews on Google)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {googleReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200/70 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">{rev.timing}</span>
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    "{rev.snippet}"
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-slate-900">{rev.author}</span>
                    <p className="text-xs text-teal-700 font-medium">Google Verified Patient</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">
                    Google
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CLINIC GALLERY */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Modern Facilities</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Clinic Gallery
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Explore our sanitized, welcoming, and technologically equipped physical therapy environments in Model Town III.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((g, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-xs border border-slate-200/70 bg-white">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={g.img}
                    alt={g.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block">
                    {g.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">
                    {g.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Patient Guidance</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-teal-700 transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. APPOINTMENT CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-teal-800 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Start Your Recovery with Dr. Megha?
          </h2>
          <p className="text-teal-100 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Take the first step toward lasting relief, better posture, and renewed mobility. Contact our reception at Model Town III today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#appointment"
              className="inline-flex items-center px-7 py-3 rounded-full text-base font-semibold bg-white text-teal-900 hover:bg-teal-50 shadow-md transition-colors"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book an Appointment
            </a>
            <a
              href="tel:09911058375"
              className="inline-flex items-center px-7 py-3 rounded-full text-base font-semibold bg-teal-700/80 hover:bg-teal-700 text-white border border-teal-600 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 099110 58375
            </a>
            <a
              href="https://wa.me/919911058375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 rounded-full text-base font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 14. CONTACT & APPOINTMENT FORM SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Get in Touch</div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Visit Our Clinic
                </h2>
                <p className="text-slate-600 text-sm mt-3">
                  Reach out to schedule your personalized physiotherapy session or to inquire about treatment options.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-teal-50 text-teal-700 border border-teal-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Clinic Location</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Park Facing, C-12, Model Town III, Pocket C, Phase 3, Azadpur, New Delhi, Delhi, 110009
                    </p>
                    <span className="inline-block mt-1 text-xs text-teal-700 font-medium">
                      Plus Code: P55M+PJ Model Town III
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-teal-50 text-teal-700 border border-teal-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Phone / WhatsApp</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      <a href="tel:09911058375" className="hover:text-teal-700 font-medium">099110 58375</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-teal-50 text-teal-700 border border-teal-100">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Opening Hours</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Monday – Saturday: Open until 6:00 PM
                    </p>
                    <span className="text-xs text-slate-500">Sunday: By prior appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Appointment Form */}
            <div id="appointment" className="lg:col-span-7 bg-[#F8FAFC] p-8 sm:p-10 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request an Appointment</h3>
              <p className="text-sm text-slate-600 mb-6">
                Fill out the form below and Dr. Megha's clinic coordinator will reach out to confirm your slot.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-teal-700 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-teal-900">Appointment Request Received</h4>
                  <p className="text-sm text-teal-800">
                    Thank you, {formData.fullName || 'Patient'}. We have received your consultation request and will call you back at {formData.phone || '099110 58375'} shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        concern: '',
                        preferredDate: '',
                        preferredTime: '',
                        message: ''
                      });
                    }}
                    className="inline-flex text-xs font-semibold text-teal-800 underline hover:text-teal-900 pt-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="e.g. 099110 58375"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="e.g. email@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Primary Treatment / Concern *
                      </label>
                      <select
                        name="concern"
                        required
                        value={formData.concern}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      >
                        <option value="">Select Treatment Focus</option>
                        <option value="Dry Needling Therapy">Dry Needling Therapy</option>
                        <option value="Cupping Therapy">Cupping Therapy</option>
                        <option value="Back & Neck Pain">Back & Neck Pain Treatment</option>
                        <option value="Knee & Leg Alignment">Knee & Leg Alignment</option>
                        <option value="Postpartum Care">Postpartum Care & Recovery</option>
                        <option value="Belly Stiffness">Belly Stiffness Relief</option>
                        <option value="Manual Therapy">Manual Therapy</option>
                        <option value="General Consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      >
                        <option value="">Select Preferred Time</option>
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 6:00 PM)">Evening (4:00 PM - 6:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Brief Description of Symptoms
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us a little about your symptoms, pain duration, or postpartum needs..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-teal-700 hover:bg-teal-800 shadow-sm hover:shadow transition-all text-sm uppercase tracking-wider"
                  >
                    Request Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 15. GOOGLE MAP SECTION */}
      <section className="py-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xs">
            <div className="p-4 bg-white border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-700" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Dr. Meghha N Gupta - Physiotherapy Center</h4>
                  <p className="text-xs text-slate-500">C-12, Model Town III, Pocket C, Phase 3, Azadpur, New Delhi, Delhi, 110009</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Dr.+Meghha+N+Gupta+Physiotherapist+Model+Town+III+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-teal-700 hover:text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-lg border border-teal-200"
              >
                Open in Google Maps →
              </a>
            </div>
            <iframe
              title="Dr. Meghha N Gupta Clinic Location"
              src="https://maps.google.com/maps?q=Model+Town+III,+Pocket+C,+Azadpur,+Delhi+110009&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 16. FOOTER */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            {/* Column 1: Brand */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                  <Activity className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="font-bold text-xl text-white tracking-tight">Dr. Meghha N Gupta</span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                Dedicated physiotherapy and rehabilitation care focused on helping you move without pain and regain your active life.
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <p>Park Facing, C-12, Model Town III, Pocket C, Phase 3, Azadpur, New Delhi, Delhi, 110009</p>
                <p className="text-teal-400 font-medium">Plus Code: P55M+PJ Model Town III</p>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-teal-400 transition-colors">About Dr. Megha</a></li>
                <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Treatments</a></li>
                <li><a href="#conditions" className="hover:text-teal-400 transition-colors">Conditions</a></li>
                <li><a href="#why-us" className="hover:text-teal-400 transition-colors">Why Choose Us</a></li>
                <li><a href="#testimonials" className="hover:text-teal-400 transition-colors">Patient Reviews</a></li>
              </ul>
            </div>

            {/* Column 3: Treatments */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Key Specializations</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>Dry Needling Therapy</li>
                <li>Cupping Therapy</li>
                <li>Back & Neck Pain Care</li>
                <li>Postpartum Care & Recovery</li>
                <li>Knee & Leg Alignment</li>
                <li>Belly Stiffness Relief</li>
              </ul>
            </div>

            {/* Column 4: Contact / WhatsApp */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact & Clinic</h4>
              <p className="text-xs text-slate-400 mb-2">
                Direct Clinic Hotline:
              </p>
              <a href="tel:09911058375" className="text-sm font-bold text-teal-400 hover:text-teal-300 block mb-3">
                099110 58375
              </a>
              <div className="pt-2">
                <a
                  href="https://wa.me/919911058375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  Chat on WhatsApp
                </a>
              </div>
              <div className="pt-3 text-xs text-slate-400">
                Mon – Sat: Closes 6:00 PM
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0">
            <div>
              &copy; {new Date().getFullYear()} Dr. Meghha N Gupta - Physiotherapy Center. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <span className="text-slate-500">Women-Owned Business</span>
              <span>Model Town, New Delhi</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
