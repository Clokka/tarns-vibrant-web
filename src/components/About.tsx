
const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              About Tarn
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Tarn is a passionate musician whose journey began with a simple love for storytelling through song. 
                With influences ranging from indie folk to alternative rock, his music captures the raw emotions 
                of life's most profound moments.
              </p>
              <p>
                Known for his introspective lyrics and captivating live performances, Tarn has been making waves 
                in the local music scene. His authentic approach to songwriting and genuine connection with audiences 
                has earned him a dedicated following.
              </p>
              <p>
                When he's not performing, Tarn can be found writing new material, collaborating with fellow musicians, 
                or exploring the great outdoors for inspiration. His music reflects his deep appreciation for both 
                human connection and the natural world.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Singer-Songwriter
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Guitarist
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Live Performer
              </span>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/da50e92a-5060-4927-a807-c1424482be1a.png"
                alt="Tarn with guitar in nature"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
