import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, TrendingUp, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-coral/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Career in India,{' '}
                  <span className="text-gradient">Your Way</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Get personalized career guidance, discover education paths, and unlock opportunities 
                  tailored specifically for the Indian job market.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/career">
                  <Button size="lg" className="btn-coral group">
                    Start Career Assessment
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/education">
                  <Button size="lg" variant="outline" className="btn-ghost">
                    Explore Education Paths
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral">50K+</div>
                  <div className="text-sm text-muted-foreground">Students Guided</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal">200+</div>
                  <div className="text-sm text-muted-foreground">Career Paths</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Career guidance illustration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose <span className="text-gradient">CareerGuide India?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored specifically for Indian students and professionals with local market insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-coral/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold">Personalized Guidance</h3>
                <p className="text-muted-foreground">
                  AI-powered recommendations based on your skills, interests, and the Indian job market
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-teal/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold">Indian Education Focus</h3>
                <p className="text-muted-foreground">
                  Comprehensive database of IIT, NIT, and other premier Indian institutions and courses
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-coral/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold">Market Insights</h3>
                <p className="text-muted-foreground">
                  Real-time data on salary trends, job opportunities, and skill demands in India
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to unlock your career potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-slide-up">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold">Take Assessment</h3>
              <p className="text-muted-foreground">
                Answer questions about your skills, interests, and career goals
              </p>
            </div>

            <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold">Get Recommendations</h3>
              <p className="text-muted-foreground">
                Receive personalized career paths and education suggestions
              </p>
            </div>

            <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold">Take Action</h3>
              <p className="text-muted-foreground">
                Follow your personalized roadmap to achieve your career goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Shape Your Future?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of Indian students and professionals who've found their perfect career path
            </p>
            <Link to="/career">
              <Button size="lg" className="btn-coral pulse-glow">
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
