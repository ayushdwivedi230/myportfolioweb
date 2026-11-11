import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Magnetic from './Magnetic';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID
      const response = await fetch('https://formspree.io/f/mqeynkke', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <div className="h-1 bg-linear-to-r from-primary to-secondary w-20 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's connect</h3>
            <p className="text-white/60 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. 
              Feel free to reach out through any of the platforms below or use the contact form.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "ad475843@gmail.com", href: "mailto:ad475843@gmail.com" },
                { icon: Github, label: "GitHub", value: "ayushdwivedi230", href: "https://github.com/ayushdwivedi230" },
                { icon: Linkedin, label: "LinkedIn", value: "Ayush Dwivedi", href: "https://www.linkedin.com/in/ayush-dwivedi-47b18225b/" }
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{item.label}</p>
                    <p className="text-lg font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl card-3d"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Name</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:outline-hidden transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:outline-hidden transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                <textarea 
                  required
                  name="message"
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:outline-hidden transition-colors resize-none"
                />
              </div>
              
              <div className="flex flex-col gap-4">
                <Magnetic strength={0.2} className="w-full md:w-auto">
                  <button 
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto px-10 py-4 bg-primary text-dark font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </Magnetic>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-emerald-400 text-sm font-medium"
                    >
                      <CheckCircle2 size={16} />
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-rose-400 text-sm font-medium"
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email me directly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
