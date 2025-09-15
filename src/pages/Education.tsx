import { useState } from 'react';
import { Search, Filter, BookOpen, Clock, MapPin, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  format: 'Online' | 'Offline' | 'Hybrid';
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: string;
  description: string;
  skills: string[];
  price: string;
  location?: string;
}

const Education = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');

  const courses: Course[] = [
    {
      id: '1',
      title: 'Full Stack Web Development',
      provider: 'IIT Madras Online',
      duration: '6 months',
      format: 'Online',
      category: 'Technology',
      difficulty: 'Intermediate',
      rating: 4.8,
      students: '12,500+',
      description: 'Comprehensive full-stack development course covering React, Node.js, and databases. Industry-aligned curriculum with real projects.',
      skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      price: '₹25,000',
    },
    {
      id: '2',
      title: 'Data Science and Machine Learning',
      provider: 'NPTEL',
      duration: '12 weeks',
      format: 'Online',
      category: 'Technology',
      difficulty: 'Advanced',
      rating: 4.7,
      students: '8,200+',
      description: 'Learn Python, machine learning algorithms, and data analysis. Free certification from IIT professors.',
      skills: ['Python', 'Machine Learning', 'Statistics', 'Data Analysis'],
      price: 'Free',
    },
    {
      id: '3',
      title: 'Digital Marketing Certification',
      provider: 'Google India',
      duration: '3 months',
      format: 'Online',
      category: 'Marketing',
      difficulty: 'Beginner',
      rating: 4.6,
      students: '25,000+',
      description: 'Master digital marketing fundamentals including SEO, SEM, and social media marketing.',
      skills: ['SEO', 'Google Ads', 'Analytics', 'Social Media'],
      price: 'Free',
    },
    {
      id: '4',
      title: 'MBA in Technology Management',
      provider: 'IIM Bangalore',
      duration: '2 years',
      format: 'Offline',
      category: 'Management',
      difficulty: 'Advanced',
      rating: 4.9,
      students: '200+',
      description: 'Executive MBA program for technology professionals. Weekend classes available.',
      skills: ['Leadership', 'Strategy', 'Technology Management', 'Finance'],
      price: '₹23,00,000',
      location: 'Bangalore',
    },
    {
      id: '5',
      title: 'UX/UI Design Bootcamp',
      provider: 'UpGrad',
      duration: '8 months',
      format: 'Hybrid',
      category: 'Design',
      difficulty: 'Intermediate',
      rating: 4.5,
      students: '3,400+',
      description: 'Intensive design bootcamp with 1:1 mentoring and job guarantee.',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      price: '₹2,50,000',
    },
    {
      id: '6',
      title: 'Chartered Financial Analyst (CFA)',
      provider: 'CFA Institute India',
      duration: '18 months',
      format: 'Hybrid',
      category: 'Finance',
      difficulty: 'Advanced',
      rating: 4.8,
      students: '5,000+',
      description: 'Globally recognized certification for investment professionals.',
      skills: ['Investment Analysis', 'Portfolio Management', 'Ethics', 'Economics'],
      price: '₹1,80,000',
    },
    {
      id: '7',
      title: 'Artificial Intelligence Course',
      provider: 'IIT Delhi',
      duration: '4 months',
      format: 'Online',
      category: 'Technology',
      difficulty: 'Advanced',
      rating: 4.7,
      students: '6,800+',
      description: 'Comprehensive AI course covering deep learning, NLP, and computer vision.',
      skills: ['Python', 'TensorFlow', 'Deep Learning', 'NLP'],
      price: '₹45,000',
    },
    {
      id: '8',
      title: 'Content Writing & Copywriting',
      provider: 'Coursera India',
      duration: '2 months',
      format: 'Online',
      category: 'Marketing',
      difficulty: 'Beginner',
      rating: 4.4,
      students: '15,200+',
      description: 'Learn to create compelling content for digital marketing and brand communication.',
      skills: ['Writing', 'SEO Writing', 'Brand Voice', 'Content Strategy'],
      price: '₹3,999',
    }
  ];

  const categories = ['all', 'Technology', 'Design', 'Marketing', 'Finance', 'Management'];
  const formats = ['all', 'Online', 'Offline', 'Hybrid'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesFormat = selectedFormat === 'all' || course.format === selectedFormat;
    
    return matchesSearch && matchesCategory && matchesFormat;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'Online': return 'bg-blue-500/20 text-blue-400';
      case 'Offline': return 'bg-purple-500/20 text-purple-400';
      case 'Hybrid': return 'bg-teal-500/20 text-teal-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Indian <span className="text-gradient">Education Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover top courses, certifications, and degree programs from premier Indian institutions
          </p>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search courses, skills, or providers..."
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

          <Select value={selectedFormat} onValueChange={setSelectedFormat}>
            <SelectTrigger className="input-focus">
              <SelectValue placeholder="Format" />
            </SelectTrigger>
            <SelectContent>
              {formats.map(format => (
                <SelectItem key={format} value={format}>
                  {format === 'all' ? 'All Formats' : format}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span>Sorted by Relevance</span>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCourses.map((course, index) => (
            <Card key={course.id} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.provider}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{course.students}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge className={getDifficultyColor(course.difficulty)}>
                    {course.difficulty}
                  </Badge>
                  <Badge className={getFormatColor(course.format)}>
                    {course.format}
                  </Badge>
                  <Badge variant="outline">
                    {course.category}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  {course.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{course.location}</span>
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Skills you'll learn:</div>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-sm text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <div className="text-sm text-muted-foreground">Price</div>
                    <div className="text-lg font-bold text-coral">{course.price}</div>
                  </div>
                  <Button className="btn-coral">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find relevant courses.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Education;