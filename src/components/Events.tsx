import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import eventImage from '@/assets/event-ctrlaltcompete.png';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const event = {
    title: 'Ctrl + Alt + Compete',
    subtitle: 'The Initiation',
    date: 'June 25, 2024',
    location: 'RV College of Engineering',
    participants: '100+ Participants',
    description: 'We kicked it off with caffeine and chaos, judged the wild ideas with even wilder criteria, and wrapped it up with results that shocked even our code. A hackathon experience like no other!',
    image: eventImage,
    tags: ['Hackathon', 'Coding', 'Competition']
  };

  return (
    <section id="events" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-accent/30 text-accent font-heading text-sm mb-6">
            Our Events
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Event</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the thrill of technical competitions and collaborative learning
          </p>
        </motion.div>

        {/* Featured Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="group relative rounded-3xl glass border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-[300px] lg:h-full overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-heading font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-8 lg:p-10 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="font-heading text-xl text-primary italic">
                      {event.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-heading">Date</p>
                        <p className="text-sm font-semibold text-foreground">{event.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-heading">Venue</p>
                        <p className="text-sm font-semibold text-foreground">RVCE</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-heading">Participants</p>
                        <p className="text-sm font-semibold text-foreground">100+</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] group/btn"
                  >
                    View All Events
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
