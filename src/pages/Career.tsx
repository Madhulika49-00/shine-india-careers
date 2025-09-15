import { useState } from 'react';
import { ChevronRight, Code, Briefcase, Calculator, Palette, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import Layout from '@/components/Layout';

interface CareerSuggestion {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  match: number;
  salary: string;
  skills: string[];
  nextSteps: string[];
}

const Career = () => {
  const [formData, setFormData] = useState({
    skills: '',
    interests: '',
    education: '',
    experience: ''
  });
  const [showResults, setShowResults] = useState(false);

  const careerSuggestions: CareerSuggestion[] = [
    {
      title: 'Software Engineer',
      description: 'Design, develop, and maintain software applications using modern technologies. High demand in Indian tech hubs like Bangalore, Hyderabad, and Pune.',
      icon: Code,
      match: 95,
      salary: '₹6-25 LPA',
      skills: ['JavaScript', 'React', 'Node.js', 'Database Management'],
      nextSteps: ['Complete a coding bootcamp', 'Build a portfolio on GitHub', 'Apply to startups in Bangalore']
    },
    {
      title: 'Data Analyst',
      description: 'Analyze complex data to help businesses make informed decisions. Growing field with opportunities in e-commerce, fintech, and healthcare.',
      icon: TrendingUp,
      match: 88,
      salary: '₹4-15 LPA',
      skills: ['Python', 'SQL', 'Excel', 'Data Visualization'],
      nextSteps: ['Learn Python and SQL', 'Get certified in Power BI', 'Apply to analytics roles in Mumbai']
    },
    {
      title: 'UX Designer',
      description: 'Create intuitive and engaging user experiences for digital products. High demand in product companies and design agencies.',
      icon: Palette,
      match: 82,
      salary: '₹5-20 LPA',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Thinking'],
      nextSteps: ['Build a design portfolio', 'Complete Google UX Design Certificate', 'Network with designers in Delhi NCR']
    },
    {
      title: 'Chartered Accountant',
      description: 'Provide financial expertise and advisory services. Prestigious career path with opportunities in Big 4 firms and corporations.',
      icon: Calculator,
      match: 75,
      salary: '₹8-30 LPA',
      skills: ['Financial Analysis', 'Taxation', 'Audit', 'Financial Reporting'],
      nextSteps: ['Clear CA Final exams', 'Gain articleship experience', 'Apply to Big 4 firms in major cities']
    },
    {
      title: 'Digital Marketing Manager',
      description: 'Develop and execute digital marketing strategies to grow brand presence and drive sales. Perfect for the growing e-commerce market.',
      icon: Users,
      match: 70,
      salary: '₹4-18 LPA',
      skills: ['SEO/SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics'],
      nextSteps: ['Get Google Ads certification', 'Build personal brand online', 'Apply to e-commerce companies']
    },
    {
      title: 'Product Manager',
      description: 'Lead product development from conception to launch. High-impact role in tech companies and startups.',
      icon: Briefcase,
      match: 68,
      salary: '₹10-35 LPA',
      skills: ['Product Strategy', 'Market Research', 'Agile Methodology', 'Leadership'],
      nextSteps: ['Complete PM certification', 'Build product portfolio', 'Network with PMs in tech companies']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const getMatchColor = (match: number) => {
    if (match >= 90) return 'skill-match-high';
    if (match >= 75) return 'skill-match-medium';
    return 'skill-match-low';
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Discover Your Ideal <span className="text-gradient">Career Path</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized career recommendations based on your skills, interests, and the Indian job market
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Assessment Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Career Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="skills">Your Skills</Label>
                    <Textarea
                      id="skills"
                      placeholder="e.g., Python, JavaScript, Communication, Problem Solving..."
                      value={formData.skills}
                      onChange={(e) => setFormData({...formData, skills: e.target.value})}
                      className="input-focus"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Interests</Label>
                    <Textarea
                      id="interests"
                      placeholder="e.g., Technology, Design, Finance, Teaching..."
                      value={formData.interests}
                      onChange={(e) => setFormData({...formData, interests: e.target.value})}
                      className="input-focus"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education">Education Level</Label>
                    <Select onValueChange={(value) => setFormData({...formData, education: value})}>
                      <SelectTrigger className="input-focus">
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12th">12th Grade</SelectItem>
                        <SelectItem value="graduation">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                      <SelectTrigger className="input-focus">
                        <SelectValue placeholder="Select your experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fresher">Fresher (0 years)</SelectItem>
                        <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                        <SelectItem value="mid">Mid-level (3-7 years)</SelectItem>
                        <SelectItem value="senior">Senior (7+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="btn-coral w-full">
                    Get Career Recommendations
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {showResults ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Your Career Matches</h2>
                  <span className="text-sm text-muted-foreground">
                    Based on Indian job market trends
                  </span>
                </div>

                <div className="grid gap-6">
                  {careerSuggestions.map((career, index) => {
                    const Icon = career.icon;
                    return (
                      <Card key={career.title} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            
                            <div className="flex-1 space-y-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="text-lg font-semibold">{career.title}</h3>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {career.description}
                                  </p>
                                </div>
                                <div className="text-right flex-shrink-0 ml-4">
                                  <div className="text-lg font-bold text-coral">{career.match}%</div>
                                  <div className="text-sm text-muted-foreground">Match</div>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span>Skill Match</span>
                                  <span>{career.match}%</span>
                                </div>
                                <Progress value={career.match} className="h-2">
                                  <div 
                                    className={`h-full rounded-full ${getMatchColor(career.match)}`}
                                    style={{ width: `${career.match}%` }}
                                  />
                                </Progress>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <div className="font-medium text-foreground mb-2">Expected Salary</div>
                                  <div className="text-coral font-semibold">{career.salary}</div>
                                </div>
                                <div>
                                  <div className="font-medium text-foreground mb-2">Key Skills</div>
                                  <div className="flex flex-wrap gap-1">
                                    {career.skills.slice(0, 3).map((skill) => (
                                      <span 
                                        key={skill}
                                        className="px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="font-medium text-foreground mb-2 text-sm">Next Steps</div>
                                <ul className="space-y-1">
                                  {career.nextSteps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="text-sm text-muted-foreground flex items-start">
                                      <span className="w-1.5 h-1.5 bg-coral rounded-full mt-2 mr-2 flex-shrink-0" />
                                      {step}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center space-y-4">
                  <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto" />
                  <h3 className="text-xl font-semibold">Ready for Your Career Assessment?</h3>
                  <p className="text-muted-foreground">
                    Fill out the form on the left to get personalized career recommendations 
                    tailored for the Indian job market.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;