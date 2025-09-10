'use client';

import { useAuth } from '@/contexts/AuthContext';
import { PricingSection } from '@/components/PricingSection';
import { TypewriterEffect } from '@/components/TypewriterEffect';
import { VideoModal } from '@/components/VideoModal';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Lock, CreditCard, Moon, Users, BarChart3, Zap } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const workflowSteps = [
  {
    title: "Setup Authentication",
    description: "Secure user login and registration",
    preview: <TypewriterEffect text="Configuring auth providers..." />
  },
  {
    title: "Payment Integration", 
    description: "Stripe subscription management",
    preview: <TypewriterEffect text="Setting up payments..." />
  },
  {
    title: "Dashboard Creation",
    description: "Analytics and user dashboard",
    preview: <TypewriterEffect text="Building dashboard..." />
  },
  {
    title: "Deploy & Launch",
    description: "Go live with your SaaS",
    preview: <TypewriterEffect text="Deploying application..." />
  }
];

const featureCards = [
  {
    title: "Authentication",
    description: "Secure login with social providers",
    icon: <Lock className="h-6 w-6 text-primary" />,
    bgGradient: "from-blue-500/10 to-purple-500/10"
  },
  {
    title: "Payments",
    description: "Stripe subscription management",
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    title: "Dashboard",
    description: "Analytics and user management",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    bgGradient: "from-orange-500/10 to-red-500/10"
  },
  {
    title: "Dark Mode",
    description: "Built-in theme management",
    icon: <Moon className="h-6 w-6 text-primary" />,
    bgGradient: "from-indigo-500/10 to-purple-500/10"
  },
  {
    title: "User Management",
    description: "Complete user lifecycle",
    icon: <Users className="h-6 w-6 text-primary" />,
    bgGradient: "from-pink-500/10 to-rose-500/10"
  },
  {
    title: "Performance",
    description: "Optimized for speed",
    icon: <Zap className="h-6 w-6 text-primary" />,
    bgGradient: "from-yellow-500/10 to-orange-500/10"
  }
];

const workflowSections = [
  {
    id: "overview",
    title: "Overview",
    description: "Everything you need to build modern SaaS applications"
  },
  {
    id: "features",
    title: "Features", 
    description: "Powerful features to accelerate your development"
  },
  {
    id: "pricing",
    title: "Pricing",
    description: "Simple, transparent pricing for your needs"
  }
];

export default function LandingPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("overview");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-darker relative">
      {/* Navigation */}
      <nav className="sticky top-16 z-40 bg-white/80 dark:bg-neutral-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-4 overflow-x-auto hide-scrollbar">
            {workflowSections.map((section, index) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                onSetActive={() => setActiveSection(section.id)}
                className="flex items-center cursor-pointer group min-w-fit mx-6"
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 transition-all duration-300 ${
                  activeSection === section.id 
                  ? 'bg-primary text-white' 
                  : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                }`}>
                  {index + 1}
                </span>
                <span className={`text-sm font-medium transition-colors duration-300 hidden md:block ${
                  activeSection === section.id 
                  ? 'text-primary' 
                  : 'text-slate-600 dark:text-slate-300 group-hover:text-primary'
                }`}>
                  {section.title}
                </span>
              </ScrollLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="overview" className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-20 pb-16 sm:pb-24">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white"
              >
                <span className="block">Next.js SaaS</span>
                <span className="block text-primary">Starter Template</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
              >
                Build and launch your SaaS with authentication, payments, and analytics in minutes, not months.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-10 flex gap-4 justify-center"
              >
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-8 py-3 btn-primary shadow-lg hover:shadow-xl"
                >
                  Watch Demo
                </button>
                <button 
                  onClick={() => user ? router.push('/dashboard') : router.push('/login')} 
                  className="px-8 py-3 btn-secondary shadow-lg hover:shadow-xl"
                >
                  {user ? 'Go to Dashboard' : 'Start Free Trial'}
                </button>
              </motion.div>
            </div>

            {/* Code Preview + Workflow Steps */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <pre className="relative rounded-xl bg-slate-900 p-8 shadow-2xl overflow-hidden">
                  <code className="text-sm sm:text-base text-slate-100">
                    <TypewriterEffect text={`// 🚀 SaaS in Minutes
import { useAuth, usePayments } from '@/hooks';

export const SaaSApp = () => {
  const { user, signIn } = useAuth();
  const { subscribe } = usePayments();
  
  return (
    <div className="saas-app">
      {user ? (
        <Dashboard user={user} />
      ) : (
        <Landing onSignIn={signIn} />
      )}
    </div>
  );
};`} />
                  </code>
                </pre>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative p-4 card hover:shadow-lg"
                  >
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="ml-8">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-20 bg-white dark:bg-neutral-dark"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        onViewportEnter={() => setActiveSection("features")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Everything You Need
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Pre-built components and integrations to launch faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 card hover:shadow-lg bg-gradient-to-br ${feature.bgGradient}`}
              >
                <div className="p-3 bg-white dark:bg-neutral-dark rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        className="py-20 bg-slate-50 dark:bg-neutral-darker"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        onViewportEnter={() => setActiveSection("pricing")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Simple Pricing
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Choose the plan that works for you
            </p>
          </div>
          
          <PricingSection />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative py-20"
      >
        <div className="absolute inset-0 gradient-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative card p-12 text-center">
            <motion.h2 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              className="text-3xl font-bold text-slate-900 dark:text-white"
            >
              Ready to Launch Your SaaS?
            </motion.h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Join thousands of developers who have shipped faster with our template
            </p>
            
            <div className="mt-10 flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="px-8 py-3 btn-primary shadow-lg hover:shadow-xl"
              >
                Watch Demo
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => user ? router.push('/dashboard') : router.push('/login')}
                className="px-8 py-3 btn-secondary shadow-lg hover:shadow-xl"
              >
                {user ? 'Go to Dashboard' : 'Start Building'}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="dQw4w9WgXcQ"
      />
    </div>
  );
}