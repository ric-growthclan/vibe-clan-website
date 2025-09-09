import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Code, Users, DollarSign, Lightbulb, MessageSquare, MessageCircle, Youtube } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import aiCodeIcon from "@/assets/ai-code-icon.jpg";
import collaborationIcon from "@/assets/collaboration-icon.jpg";
import moneyIcon from "@/assets/money-icon.jpg";
import knowledgeIcon from "@/assets/knowledge-icon.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            The AI Coding Wave{" "}
            <span className="gradient-text animate-glow">is Here.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-mono">
            Join the global community of developers building, sharing, and monetizing AI-generated code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="youtube" size="lg" className="text-lg px-8 py-4 h-auto hover:scale-105 transition-transform duration-300" asChild>
              <a href="https://www.youtube.com/@vibeclan-community" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2" />
                Watch on YouTube
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="discord" size="lg" className="text-lg px-8 py-4 h-auto hover:scale-105 transition-transform duration-300" asChild>
              <a href="https://discord.gg/45gAz8ZMuN" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2" />
                Join Discord
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="reddit" size="lg" className="text-lg px-8 py-4 h-auto hover:scale-105 transition-transform duration-300" asChild>
              <a href="https://www.reddit.com/r/vibeclan/" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                Explore Reddit
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Why Join VibeClan?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-glow p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <img src={aiCodeIcon} alt="Early Access" className="w-12 h-12 rounded-lg" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-mono">Early Access to Drops</h3>
              <p className="text-muted-foreground">Exclusive AI-generated templates, snippets, and tools before anyone else.</p>
            </Card>

            <Card className="card-glow p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <img src={collaborationIcon} alt="Collaboration" className="w-12 h-12 rounded-lg" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-mono">Real Collaboration</h3>
              <p className="text-muted-foreground">Build with others, get feedback, iterate fast. No solo grinding.</p>
            </Card>

            <Card className="card-glow p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <img src={moneyIcon} alt="Monetization" className="w-12 h-12 rounded-lg" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-mono">Monetization Opportunities</h3>
              <p className="text-muted-foreground">Test your code, sell it, grow an audience. Turn skills into income.</p>
            </Card>

            <Card className="card-glow p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <img src={knowledgeIcon} alt="Knowledge" className="w-12 h-12 rounded-lg" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-mono">Insider Knowledge</h3>
              <p className="text-muted-foreground">Tips, prompts, workflows from power users who actually ship.</p>
            </Card>

            <Card className="card-glow p-8 text-center md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-mono">Zero BS</h3>
              <p className="text-muted-foreground">No fluff, no spam, just builders talking code and shipping products.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Share Section */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What We <span className="gradient-text">Share</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code, title: "AI-generated code snippets", desc: "Ready-to-use code blocks" },
              { icon: Users, title: "Real-world case studies", desc: "How others built and shipped" },
              { icon: DollarSign, title: "Member success stories", desc: "From side project to profit" },
              { icon: Lightbulb, title: "Tool reviews & news", desc: "Latest AI coding tools" },
              { icon: MessageSquare, title: "Memes", desc: "Because coding should be fun" },
              { icon: ExternalLink, title: "Live demos", desc: "See AI coding in action" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2 font-mono">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-mono italic mb-8 text-muted-foreground">
            "This is the most real dev community I've seen in years."
          </blockquote>
          <p className="text-primary font-mono font-semibold">— Alex, Early Member</p>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest from Our <span className="gradient-text">Blog</span>
            </h2>
            <p className="text-xl text-muted-foreground font-mono">
              Deep dives, tutorials, and insights from the AI coding frontier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Building a SaaS with Claude Sonnet in 48 Hours",
                excerpt: "How we shipped a complete product using AI-generated code and zero traditional development",
                readTime: "8 min read",
                tag: "Case Study"
              },
              {
                title: "The Ultimate AI Coding Prompt Library",
                excerpt: "50+ battle-tested prompts that actually work for React, Python, and more",
                readTime: "12 min read",
                tag: "Resources"
              },
              {
                title: "From Idea to $10K MRR with AI Tools",
                excerpt: "Member spotlight: How Sarah used AI to build and scale her micro-SaaS",
                readTime: "6 min read",
                tag: "Success Story"
              }
            ].map((post, i) => (
              <Card key={i} className="card-glow p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-mono rounded-full">
                    {post.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-mono leading-tight">{post.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-mono">{post.readTime}</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-mono">
                    Read More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="font-mono">
              View All Articles
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-background via-secondary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Come vibe with us.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 font-mono">
            Join thousands of developers building the future with AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="youtube" size="lg" className="text-lg px-10 py-5 h-auto hover:scale-105 transition-transform duration-300" asChild>
              <a href="https://www.youtube.com/@vibeclan-community" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2" />
                Watch on YouTube
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="discord" size="lg" className="text-lg px-10 py-5 h-auto hover:scale-105 transition-transform duration-300" asChild>
              <a href="https://discord.gg/45gAz8ZMuN" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2" />
                Join Discord Community
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="reddit" size="lg" className="text-lg px-10 py-5 h-auto hover:scale-105 transition-transform duration-300" asChild>
              <a href="https://www.reddit.com/r/vibeclan/" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                Explore Reddit Hub
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4 font-mono">VibeClan</h3>
          <p className="text-muted-foreground font-mono">Building the future, one AI-generated line at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;