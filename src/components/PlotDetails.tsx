import { Card, CardContent } from "@/components/ui/card";
import { Ruler, Route, Trees, FileText } from "lucide-react";
import plotImage from "@/assets/Pic4.jpg";

const PlotDetails = () => {
  const plotFeatures = [
    {
      icon: <Ruler className="w-8 h-8 text-primary" />,
      title: "Plot Dimensions",
      specs: [
        { label: "Size per plot", value: "817 m² (≈0.202 acres)" },
        { label: "Frontage", value: "27.78 m" },
        { label: "Depth", value: "29.42 m" }
      ]
    },
    {
      icon: <Route className="w-8 h-8 text-accent" />,
      title: "Access & Infrastructure",
      specs: [
        { label: "Driveway width", value: "5 m purpose-built" },
        { label: "Sidewalk", value: "2 m pedestrian walkway" },
        { label: "Access type", value: "One-sided frontage" }
      ]
    },
    {
      icon: <Trees className="w-8 h-8 text-primary" />,
      title: "Development Features",
      specs: [
        { label: "Plot beacons", value: "Clearly marked" },
        { label: "Numbering", value: "Sequential identification" },
        { label: "Alignment", value: "Well-aligned for privacy" }
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Ownership Benefits",
      specs: [
        { label: "Title deeds", value: "Available for every plot" },
        { label: "Pricing", value: "Competitive investment rates" },
        { label: "Appreciation", value: "High capital growth potential" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-gradient-ocean">
            Prime 72-Plot Subdivision
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Well-planned 18-acre subdivision along 2km stretch, offering 72 premium residential plots.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Plot Image */}
          <div className="animate-fade-in-left">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img
                src={plotImage}
                alt="Plot subdivision layout"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-1">Organized Plot Layout</h3>
                <p className="text-white/80 text-sm">Clear access roads and boundaries</p>
              </div>
            </div>
          </div>

          {/* Plot Information */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6 text-gradient-sunset">
              Secure Your Piece Today
            </h3>
            
            <div className="space-y-4">
              <div className="bg-gradient-ocean text-white p-4 rounded-xl">
                <h4 className="text-lg font-bold mb-2">Perfect Plot Size</h4>
                <p className="text-sm">
                  817 m² plots with 27.78m frontage - ideal for family homes with garden and parking.
                </p>
              </div>
              
              <div className="bg-gradient-sunset text-white p-4 rounded-xl">
                <h4 className="text-lg font-bold mb-2">Premium Infrastructure</h4>
                <p className="text-sm">
                  5m driveways with 2m pedestrian sidewalks for safe, convenient access.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Plot Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plotFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="card-hover bg-white/90 backdrop-blur-sm border-0 shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 p-2 bg-gradient-beach rounded-full w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <div className="space-y-2">
                  {feature.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex justify-between items-start">
                      <span className="text-xs font-medium text-muted-foreground">
                        {spec.label}:
                      </span>
                      <span className="text-xs font-semibold text-foreground text-right ml-2">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Development Plan Highlight */}
        <div className="bg-gradient-beach p-8 rounded-2xl shadow-luxury animate-scale-in">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-gradient-ocean">
              Development Plan & Infrastructure
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5m</div>
                <div className="text-sm font-semibold text-foreground">Driveway</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">2m</div>
                <div className="text-sm font-semibold text-foreground">Sidewalk</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2km</div>
                <div className="text-sm font-semibold text-foreground">Beach Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">72</div>
                <div className="text-sm font-semibold text-foreground">Total Plots</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlotDetails;