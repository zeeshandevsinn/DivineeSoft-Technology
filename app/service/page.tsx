import { services } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicePage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Card key={s.id} className="hover:shadow-xl transition duration-300 border-border flex flex-col">
              <CardHeader>
                <s.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-6">{s.desc}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/case-studies/${s.id}`}>View Case Studies</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center">
        <div className="bg-[#0B1A2E] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
