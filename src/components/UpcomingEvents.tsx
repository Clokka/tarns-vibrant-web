
const UpcomingEvents = () => {
  const events = [
    {
      date: "2024-07-15",
      title: "Summer Acoustic Night",
      venue: "The Cornerstone Café",
      location: "Downtown Music District",
      time: "8:00 PM",
      description: "An intimate evening of original songs and acoustic covers",
      ticketUrl: "#"
    },
    {
      date: "2024-07-28",
      title: "Festival of Independent Music",
      venue: "Riverside Park",
      location: "City Center",
      time: "3:00 PM",
      description: "Opening act for the annual indie music celebration",
      ticketUrl: "#"
    },
    {
      date: "2024-08-10",
      title: "Full Band Live Show",
      venue: "The Electric Lounge",
      location: "Arts Quarter",
      time: "9:30 PM",
      description: "High-energy performance with full band arrangement",
      ticketUrl: "#"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Upcoming Events
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {formatDate(event.date)}
                    </div>
                    <span className="text-muted-foreground text-sm">{event.time}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-1 mb-3">
                    <p className="text-foreground font-medium">{event.venue}</p>
                    <p className="text-muted-foreground text-sm">{event.location}</p>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                    Get Tickets
                  </button>
                  <button className="px-6 py-2 border border-border text-foreground rounded-full font-medium hover:bg-muted transition-colors">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Stay updated with all upcoming shows and events
          </p>
          <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/90 transition-colors">
            Follow for Updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
