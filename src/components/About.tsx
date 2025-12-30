import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, Calendar, Award } from 'lucide-react';
import aboutTeam from '@/assets/about-team.jpg';
import aboutLab from '@/assets/about-lab.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: 'Technical Excellence',
      description: 'Cutting-edge workshops and hands-on learning experiences'
    },
    {
      icon: Users,
      title: 'Strong Community',
      description: '200+ active members collaborating on innovative projects'
    },
    {
      icon: Calendar,
      title: 'Regular Events',
      description: 'Workshops, seminars, hackathons, and technical competitions'
    },
    {
      icon: Award,
      title: 'Industry Connect',
      description: 'Expert sessions and networking with industry professionals'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-primary/30 text-primary font-heading text-sm mb-6">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-gradient">IETE-RVCE</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Fostering innovation and technical excellence since 2017
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-foreground">
              History of <span className="text-primary">IETE-RVCE</span>
            </h3>
            
            <div className="space-y-5 font-sans text-muted-foreground text-lg leading-relaxed">
              <p>
                IETE-RVCE Student Branch was started in 2017 and since then from having few members 
                initially to having <span className="text-primary font-semibold">200+ members</span> now, we have shown immense growth in terms of 
                membership and the quality of events.
              </p>
              <p>
                We have been successfully conducting workshops, seminars and shifted swiftly to 
                webinars and online workshops during the pandemic because no matter what the 
                circumstances, learning never stops.
              </p>
              <p>
                From encouraging our student members to take up projects that develop a research 
                mindset to even building this website, we at IETE RVCE have strived to help the 
                members to gain practical skills to become better professionals.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group p-6 rounded-xl glass border border-border/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient">
                    200+
                  </div>
                  <div className="font-heading text-sm text-muted-foreground mt-2">
                    Active Members
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group p-6 rounded-xl glass border border-border/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient">
                    2017
                  </div>
                  <div className="font-heading text-sm text-muted-foreground mt-2">
                    Year Founded
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden border-2 border-primary/20"
                >
                  <img
                    src={aboutTeam}
                    alt="IETE-RVCE team at hackathon"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden border-2 border-secondary/20"
                >
                  <img
                    src={aboutLab}
                    alt="Electronics lab at RVCE"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="pt-8 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden border-2 border-accent/20"
                >
                  <img
                    src={aboutLab}
                    alt="Technical workshop session"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden border-2 border-primary/20"
                >
                  <img
                    src={aboutTeam}
                    alt="Students collaborating"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group relative p-6 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="font-sans text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
