import { useState } from 'react';
import { User, Download, TrendingUp, BookOpen, Target, Star, ChevronRight, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';

interface ProfileData {
  name: string;
  email: string;
  location: string;
  currentRole: string;
  experience: string;
  skills: string[];
  interests: string[];
}

interface CareerMatch {
  title: string;
  match: number;
  reason: string;
  nextSteps: string[];
}

interface CourseRecommendation {
  title: string;
  provider: string;
  duration: string;
  relevance: number;
  skillsGained: string[];
}

const Profile = () => {
  const [profileData] = useState<ProfileData>({
    name: 'Arjun Sharma',
    email: 'arjun.sharma@email.com',
    location: 'Bangalore, Karnataka',
    currentRole: 'Software Developer',
    experience: '2 years',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
    interests: ['Web Development', 'Machine Learning', 'Product Management'],
  });

  const careerMatches: CareerMatch[] = [
    {
      title: 'Full Stack Developer',
      match: 95,
      reason: 'Perfect alignment with your JavaScript, React, and Node.js skills',
      nextSteps: ['Learn TypeScript', 'Build microservices', 'Study system design']
    },
    {
      title: 'Product Manager',
      match: 78,
      reason: 'Strong technical background aligns with your product management interest',
      nextSteps: ['Take PM course', 'Build product portfolio', 'Network with PMs']
    },
    {
      title: 'Data Engineer',
      match: 72,
      reason: 'Your Python and SQL skills are valuable for data engineering roles',
      nextSteps: ['Learn Apache Spark', 'Study data pipelines', 'Get AWS certification']
    }
  ];

  const courseRecommendations: CourseRecommendation[] = [
    {
      title: 'Advanced React Development',
      provider: 'IIT Madras',
      duration: '3 months',
      relevance: 95,
      skillsGained: ['React Hooks', 'Redux', 'Testing', 'Performance Optimization']
    },
    {
      title: 'Product Management Fundamentals',
      provider: 'UpGrad',
      duration: '4 months',
      relevance: 88,
      skillsGained: ['Product Strategy', 'User Research', 'Analytics', 'Roadmap Planning']
    },
    {
      title: 'Machine Learning with Python',
      provider: 'NPTEL',
      duration: '12 weeks',
      relevance: 75,
      skillsGained: ['ML Algorithms', 'Pandas', 'Scikit-learn', 'Data Analysis']
    }
  ];

  const skillGaps = [
    { skill: 'TypeScript', importance: 'High', currentLevel: 0, targetLevel: 80 },
    { skill: 'System Design', importance: 'High', currentLevel: 20, targetLevel: 70 },
    { skill: 'Product Strategy', importance: 'Medium', currentLevel: 15, targetLevel: 60 },
    { skill: 'Machine Learning', importance: 'Medium', currentLevel: 30, targetLevel: 70 }
  ];

  const getMatchColor = (match: number) => {
    if (match >= 90) return 'skill-match-high';
    if (match >= 75) return 'skill-match-medium';
    return 'skill-match-low';
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Your Career <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Personalized insights and recommendations for your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl">{profileData.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{profileData.email}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span>{profileData.currentRole}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{profileData.experience} experience</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Top Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {profileData.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="btn-coral w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Profile PDF
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="careers">Career Matches</TabsTrigger>
                <TabsTrigger value="education">Courses</TabsTrigger>
                <TabsTrigger value="skills">Skill Gaps</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Career Score */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-coral" />
                      Career Readiness Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">82/100</div>
                        <p className="text-muted-foreground">Strong foundation with room for growth</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Technical Skills</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2">
                          <div className="h-full rounded-full skill-match-high" style={{ width: '85%' }} />
                        </Progress>

                        <div className="flex justify-between text-sm">
                          <span>Industry Knowledge</span>
                          <span>78%</span>
                        </div>
                        <Progress value={78} className="h-2">
                          <div className="h-full rounded-full skill-match-medium" style={{ width: '78%' }} />
                        </Progress>

                        <div className="flex justify-between text-sm">
                          <span>Leadership Skills</span>
                          <span>65%</span>
                        </div>
                        <Progress value={65} className="h-2">
                          <div className="h-full rounded-full skill-match-low" style={{ width: '65%' }} />
                        </Progress>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-coral mb-1">{careerMatches.length}</div>
                      <div className="text-sm text-muted-foreground">Career Matches</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-teal mb-1">{courseRecommendations.length}</div>
                      <div className="text-sm text-muted-foreground">Recommended Courses</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-coral mb-1">{skillGaps.length}</div>
                      <div className="text-sm text-muted-foreground">Skill Gaps Identified</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="careers" className="space-y-6">
                <div className="space-y-4">
                  {careerMatches.map((career, index) => (
                    <Card key={career.title} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-1">{career.title}</h3>
                            <p className="text-sm text-muted-foreground">{career.reason}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-coral">{career.match}%</div>
                            <div className="text-xs text-muted-foreground">Match</div>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span>Career Match Score</span>
                            <span>{career.match}%</span>
                          </div>
                          <Progress value={career.match} className="h-2">
                            <div 
                              className={`h-full rounded-full ${getMatchColor(career.match)}`}
                              style={{ width: `${career.match}%` }}
                            />
                          </Progress>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2 text-sm">Recommended Next Steps:</h4>
                          <ul className="space-y-1">
                            {career.nextSteps.map((step, stepIndex) => (
                              <li key={stepIndex} className="text-sm text-muted-foreground flex items-start">
                                <ChevronRight className="w-3 h-3 mt-0.5 mr-2 flex-shrink-0 text-coral" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <div className="space-y-4">
                  {courseRecommendations.map((course, index) => (
                    <Card key={course.title} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <BookOpen className="w-4 h-4 mr-1" />
                                {course.provider}
                              </span>
                              <span>{course.duration}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-teal">{course.relevance}%</div>
                            <div className="text-xs text-muted-foreground">Relevance</div>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span>Course Relevance</span>
                            <span>{course.relevance}%</span>
                          </div>
                          <Progress value={course.relevance} className="h-2">
                            <div 
                              className={`h-full rounded-full ${getMatchColor(course.relevance)}`}
                              style={{ width: `${course.relevance}%` }}
                            />
                          </Progress>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2 text-sm">Skills You'll Gain:</h4>
                          <div className="flex flex-wrap gap-1">
                            {course.skillsGained.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <div className="space-y-4">
                  {skillGaps.map((skill, index) => (
                    <Card key={skill.skill} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-1">{skill.skill}</h3>
                            <div className="flex items-center space-x-2">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getImportanceColor(skill.importance)}`}
                              >
                                {skill.importance} Priority
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">Gap</div>
                            <div className="text-lg font-bold text-coral">
                              {skill.targetLevel - skill.currentLevel}%
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Current Level</span>
                              <span>{skill.currentLevel}%</span>
                            </div>
                            <Progress value={skill.currentLevel} className="h-2">
                              <div 
                                className="h-full rounded-full bg-muted-foreground"
                                style={{ width: `${skill.currentLevel}%` }}
                              />
                            </Progress>
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Target Level</span>
                              <span>{skill.targetLevel}%</span>
                            </div>
                            <Progress value={skill.targetLevel} className="h-2">
                              <div 
                                className="h-full rounded-full skill-match-high"
                                style={{ width: `${skill.targetLevel}%` }}
                              />
                            </Progress>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;