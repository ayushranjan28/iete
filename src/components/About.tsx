import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 text-foreground">
              History of <span className="text-gradient">IETE-RVCE</span>
            </h2>
            
            <div className="space-y-6 font-sans text-muted-foreground text-lg leading-relaxed">
              <p>
                IETE-RVCE Student Branch was started in 2017 and since then from having few members 
                initially to having 200+ members now, we have shown immense growth in terms of 
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

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: '200+', label: 'Members' },
                { value: '50+', label: 'Events' },
                { value: '2017', label: 'Founded' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-xl glass border border-border/50"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="font-heading text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-gradient p-1">
              <div className="rounded-xl overflow-hidden bg-card">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Students collaborating on technology projects"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
