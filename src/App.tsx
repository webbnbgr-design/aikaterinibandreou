import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Scale, 
  Gavel, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ (Αλλάξτε τα εδώ) ---
const CONTACT_INFO = {
  name: "Αικατερίνη Β. Ανδρέου",
  title: "Δικηγόρος",
  address: "Λέσβου 43, Κυψέλη, Αθήνα, Τ.Κ. 11364",
  phone: "210 8671046",
  email: "info@andreou-law.gr", // Placeholder email
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.123456789!2d23.738!3d38.001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3936630f9d%3A0x6b7b3b3b3b3b3b3b!2zzpvOrc-DzrLOv8-FIDQzLCDOkc64zq7Ovc6xIDExMyA2NA!5e0!3m2!1sel!2sgr!4v1620000000000!5m2!1sel!2sgr"
};

// --- ΤΟΜΕΙΣ ΔΙΚΑΙΟΥ ---
const SERVICES = [
  {
    id: 'civil',
    title: 'Αστικό Δίκαιο',
    description: 'Εξειδικευμένη υποστήριξη σε υποθέσεις εμπραγμάτου, ενοχικού και κληρονομικού δικαίου.',
    icon: Scale
  },
  {
    id: 'criminal',
    title: 'Ποινικό Δίκαιο',
    description: 'Υπεράσπιση και εκπροσώπηση σε όλα τα στάδια της ποινικής διαδικασίας με συνέπεια.',
    icon: Gavel
  },
  {
    id: 'family',
    title: 'Οικογενειακό Δίκαιο',
    description: 'Διαζύγια, επιμέλεια τέκνων, διατροφές και ρύθμιση οικογενειακών σχέσεων.',
    icon: Users
  },
  {
    id: 'labor',
    title: 'Εργατικό Δίκαιο',
    description: 'Προστασία εργασιακών δικαιωμάτων, αποζημιώσεις και εργατικές διαφορές.',
    icon: Briefcase
  },
  {
    id: 'commercial',
    title: 'Εμπορικό & Πτωχευτικό',
    description: 'Νομική κάλυψη επιχειρήσεων, συμβάσεις και διαδικασίες εξυγίανσης ή πτώχευσης.',
    icon: ShieldCheck
  }
];

// --- ΚΡΙΤΙΚΕΣ ΠΕΛΑΤΩΝ ---
const REVIEWS = [
  {
    id: 1,
    name: "Γιώργος Π.",
    text: "Εξαιρετική επαγγελματίας. Με βοήθησε σε μια δύσκολη υπόθεση κληρονομικού δικαίου με απόλυτη επιτυχία.",
    rating: 5
  },
  {
    id: 2,
    name: "Μαρία Κ.",
    text: "Άμεση ανταπόκριση και βαθιά γνώση του αντικειμένου. Την συνιστώ ανεπιφύλακτα για οικογενειακά θέματα.",
    rating: 5
  },
  {
    id: 3,
    name: "Νίκος Α.",
    text: "Σοβαρότητα και ειλικρίνεια από την πρώτη στιγμή. Πολύ καλή συνεργασία σε εμπορικό επίπεδο.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Σχετικά', href: '#about' },
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Κριτικές', href: '#reviews' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold tracking-tight ${scrolled ? 'text-navy-900' : 'text-white'}`}>
              Αικατερίνη Β. Ανδρέου
            </span>
            <span className={`text-xs uppercase tracking-widest ${scrolled ? 'text-gold-500' : 'text-slate-300'}`}>
              Δικηγόρος
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${scrolled ? 'text-navy-800' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-navy-900' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-navy-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-navy-800 font-medium text-lg"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
            alt="Law Office" 
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
              Νομική Υποστήριξη με <span className="text-gold-500">Συνέπεια</span> και <span className="text-gold-500">Εμπειρία</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Προσωπική προσέγγιση και αποτελεσματική εκπροσώπηση σε κάθε νομική σας ανάγκη.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="bg-gold-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-sm font-bold transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone size={18} />
                {CONTACT_INFO.phone}
              </a>
              <a 
                href="#contact"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-sm font-bold transition-all w-full sm:w-auto text-center"
              >
                Επικοινωνία
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="heading-serif text-3xl md:text-4xl text-navy-900 mb-6">Σχετικά με εμάς</h2>
            <div className="w-20 h-1 bg-gold-500 mb-8"></div>
            <p className="text-slate-700 leading-relaxed mb-6">
              Το δικηγορικό γραφείο της Αικατερίνης Β. Ανδρέου λειτουργεί με γνώμονα την παροχή υψηλού επιπέδου νομικών υπηρεσιών. Με πολυετή εμπειρία και εξειδίκευση σε κρίσιμους τομείς του δικαίου, στεκόμαστε δίπλα στον πολίτη και την επιχείρηση.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Η φιλοσοφία μας βασίζεται στην ειλικρίνεια, την εχεμύθεια και τη συνεχή ενημέρωση για τις νομοθετικές εξελίξεις, διασφαλίζοντας το βέλτιστο αποτέλεσμα για τους εντολείς μας.
            </p>
            <ul className="space-y-3">
              {['Εξατομικευμένη Στρατηγική', 'Άμεση Επικοινωνία', 'Αποτελεσματική Εκπροσώπηση'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy-800 font-medium">
                  <ChevronRight size={18} className="text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000" 
                alt="Lawyer Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-8 hidden lg:block">
              <p className="text-4xl font-serif font-bold text-gold-500">15+</p>
              <p className="text-sm uppercase tracking-widest">Έτη Εμπειρίας</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="heading-serif text-3xl md:text-4xl text-navy-900 mb-4">Τομείς Δικαίου</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Παρέχουμε ολοκληρωμένες νομικές υπηρεσίες καλύπτοντας ένα ευρύ φάσμα αναγκών.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              whileHover={{ y: -10 }}
              className="p-8 border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors">
                <service.icon className="text-gold-500 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="heading-serif text-xl text-navy-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section-padding bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl md:text-4xl mb-4">Τι λένε οι πελάτες μας</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-navy-800 p-8 rounded-sm relative">
                <Quote className="absolute top-4 right-4 text-navy-700 w-12 h-12" />
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-6 relative z-10">
                  "{review.text}"
                </p>
                <p className="font-bold text-white">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-serif text-3xl md:text-4xl text-navy-900 mb-6">Επικοινωνία</h2>
              <p className="text-slate-600 mb-10">
                Είμαστε στη διάθεσή σας για οποιαδήποτε πληροφορία ή για να προγραμματίσουμε μια συνάντηση.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center shrink-0">
                    <MapPin className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Διεύθυνση</h4>
                    <p className="text-slate-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center shrink-0">
                    <Phone className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Τηλέφωνο</h4>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-slate-600 hover:text-gold-500 transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center shrink-0">
                    <Mail className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Email</h4>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 hover:text-gold-500 transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] lg:h-full min-h-[400px] bg-slate-100 rounded-sm overflow-hidden shadow-inner">
              <iframe 
                src={CONTACT_INFO.mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <span className="font-serif text-2xl font-bold text-white block mb-1">
                Αικατερίνη Β. Ανδρέου
              </span>
              <span className="text-gold-500 text-xs uppercase tracking-[0.2em]">
                Δικηγορικό Γραφείο
              </span>
            </div>
            
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} {CONTACT_INFO.name}. Με επιφύλαξη παντός δικαιώματος.</p>
            <p>Σχεδιασμός & Ανάπτυξη</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
