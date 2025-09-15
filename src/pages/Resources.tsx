import { useState } from 'react';
import { FileText, Users, BookOpen, Briefcase, Search, ArrowRight, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

interface Resource {
  id: string;
  title: string;
  snippet: string;
  category: string;
  readTime: string;
  tags: string[];
  icon: React.ComponentType<any>;
  featured?: boolean;
}

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'How to Build a Winning Resume for Indian Companies',
      snippet: 'Complete guide to crafting a resume that stands out in the Indian job market. Learn about ATS optimization, industry-specific keywords, and formatting tips.',
      category: 'Resume Building',
      readTime: '8 min read',
      tags: ['Resume', 'Job Search', 'Career Tips'],
      icon: FileText,
      featured: true,
    },
    {
      id: '2',
      title: 'Mastering Technical Interviews at Indian Startups',
      snippet: 'Comprehensive preparation guide for technical interviews at companies like Flipkart, Zomato, and Swiggy. Includes coding challenges and system design.',
      category: 'Interview Prep',
      readTime: '12 min read',
      tags: ['Interview', 'Technical Skills', 'Startups'],
      icon: Briefcase,
      featured: true,
    },
    {
      id: '3',
      title: 'Finding Quality Internships in Tier 2 Cities',
      snippet: 'Discover hidden internship opportunities beyond metros. Learn how to leverage remote work and build connections in emerging tech hubs.',
      category: 'Internships',
      readTime: '6 min read',
      tags: ['Internships', 'Tier 2 Cities', 'Remote Work'],
      icon: BookOpen,
    },
    {
      id: '4',
      title: 'Networking Guide for Indian Professionals',
      snippet: 'Build meaningful professional relationships in India. Learn about industry events, LinkedIn strategies, and cultural nuances in professional networking.',
      category: 'Networking',
      readTime: '10 min read',
      tags: ['Networking', 'LinkedIn', 'Professional Growth'],
      icon: Users,
    },
    {
      id: '5',
      title: 'Salary Negotiation Tips for Indian Job Market',
      snippet: 'Navigate salary discussions effectively in the Indian context. Understand market rates, negotiation tactics, and when to ask for raises.',
      category: 'Career Growth',
      readTime: '7 min read',
      tags: ['Salary', 'Negotiation', 'Career Growth'],
      icon: Briefcase,
    },
    {
      id: '6',
      title: 'Transitioning from Engineering to Product Management',
      snippet: 'Complete roadmap for engineers looking to move into product roles. Includes skill development, portfolio building, and networking strategies.',
      category: 'Career Transition',
      readTime: '15 min read',
      tags: ['Career Change', 'Product Management', 'Engineering'],
      icon: FileText,
    },
    {
      id: '7',
      title: 'Building a Personal Brand on LinkedIn India',
      snippet: 'Establish yourself as a thought leader in your industry. Learn content strategies, engagement tactics, and how to build a following.',
      category: 'Personal Branding',
      readTime: '9 min read',
      tags: ['LinkedIn', 'Personal Brand', 'Content Creation'],
      icon: Users,
    },
    {
      id: '8',
      title: 'Remote Work Best Practices for Indian Teams',
      snippet: 'Excel in remote work environments. Cover communication tools, time management, and building relationships across time zones.',
      category: 'Remote Work',
      readTime: '11 min read',
      tags: ['Remote Work', 'Productivity', 'Team Communication'],
      icon: BookOpen,
    },
    {
      id: '9',
      title: 'Understanding Stock Options in Indian Startups',
      snippet: 'Demystify ESOP schemes and equity compensation. Learn how to evaluate stock options and their long-term value.',
      category: 'Finance',
      readTime: '13 min read',
      tags: ['ESOP', 'Startups', 'Financial Planning'],
      icon: Briefcase,
    },
    {
      id: '10',
      title: 'Women in Tech: Overcoming Challenges in Indian Workplace',
      snippet: 'Navigate unique challenges faced by women in Indian tech industry. Includes mentorship tips, work-life balance, and career advancement strategies.',
      category: 'Diversity',
      readTime: '14 min read',
      tags: ['Women in Tech', 'Diversity', 'Career Advancement'],
      icon: Users,
    },
    {
      id: '11',
      title: 'Freelancing vs Full-time: Making the Right Choice in India',
      snippet: 'Compare freelancing and traditional employment in the Indian context. Includes tax implications, benefit analysis, and career growth prospects.',
      category: 'Career Choice',
      readTime: '8 min read',
      tags: ['Freelancing', 'Career Choice', 'Work-life Balance'],
      icon: FileText,
    },
    {
      id: '12',
      title: 'Upskilling Strategies for Mid-Career Professionals',
      snippet: 'Stay relevant in a rapidly changing job market. Learn about emerging skills, certification programs, and continuous learning strategies.',
      category: 'Skill Development',
      readTime: '10 min read',
      tags: ['Upskilling', 'Mid-career', 'Continuous Learning'],
      icon: BookOpen,
    }
  ];

  const categories = [
    'all',
    'Resume Building',
    'Interview Prep',
    'Internships',
    'Networking',
    'Career Growth',
    'Career Transition',
    'Personal Branding',
    'Remote Work',
    'Finance',
    'Diversity',
    'Career Choice',
    'Skill Development'
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.snippet.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredResources = filteredResources.filter(resource => resource.featured);
  const regularResources = filteredResources.filter(resource => !resource.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Resume Building': 'bg-blue-500/20 text-blue-400',
      'Interview Prep': 'bg-green-500/20 text-green-400',
      'Internships': 'bg-yellow-500/20 text-yellow-400',
      'Networking': 'bg-purple-500/20 text-purple-400',
      'Career Growth': 'bg-red-500/20 text-red-400',
      'Career Transition': 'bg-indigo-500/20 text-indigo-400',
      'Personal Branding': 'bg-pink-500/20 text-pink-400',
      'Remote Work': 'bg-teal-500/20 text-teal-400',
      'Finance': 'bg-orange-500/20 text-orange-400',
      'Diversity': 'bg-cyan-500/20 text-cyan-400',
      'Career Choice': 'bg-lime-500/20 text-lime-400',
      'Skill Development': 'bg-emerald-500/20 text-emerald-400',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Career <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guides, tips, and insights to accelerate your career in India
          </p>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search articles, guides, and tips..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 input-focus"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="input-focus">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredResources.length} of {resources.length} resources
          </p>
        </div>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-coral">★</span>
              <span className="ml-2">Featured Resources</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card key={resource.id} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg leading-tight pr-4">{resource.title}</CardTitle>
                            <Badge className="bg-coral/20 text-coral flex-shrink-0">Featured</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground line-clamp-3">
                        {resource.snippet}
                      </p>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{resource.readTime}</span>
                        </div>
                        <Badge className={getCategoryColor(resource.category)}>
                          {resource.category}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {resource.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-sm text-xs flex items-center"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Button className="btn-coral w-full group">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* All Resources */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="card-hover animate-fade-in" style={{ animationDelay: `${(index + featuredResources.length) * 0.05}s` }}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-base leading-tight">{resource.title}</CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {resource.snippet}
                    </p>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{resource.readTime}</span>
                      </div>
                      <Badge className={getCategoryColor(resource.category)} variant="outline">
                        {resource.category}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-sm text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {resource.tags.length > 2 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded-sm text-xs">
                          +{resource.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <Button variant="outline" size="sm" className="btn-ghost w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No resources found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or category filter to find relevant resources.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Resources;