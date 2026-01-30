'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { Download, Eye, CheckCircle, AlertCircle, Clock, XCircle } from 'lucide-react';

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gradeApplying: '',
    gender: '',
    parentName: '',
    parentNIC: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    previousSchool: '',
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [applicationRef, setApplicationRef] = useState('');
  const [statusResult, setStatusResult] = useState(null);
  const [statusRef, setStatusRef] = useState('');
  const [statusDOB, setStatusDOB] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `SBC-${Date.now()}`;
    setApplicationRef(ref);
    setSubmitted(true);
    setFormData({
      fullName: '',
      dob: '',
      gradeApplying: '',
      gender: '',
      parentName: '',
      parentNIC: '',
      parentPhone: '',
      parentEmail: '',
      address: '',
      previousSchool: '',
      agreed: false,
    });
  };

  const handleStatusCheck = (e) => {
    e.preventDefault();
    // Mock status check
    const statuses = ['Pending', 'Reviewed', 'Accepted', 'Rejected'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    setStatusResult({
      status: randomStatus,
      date: new Date().toLocaleDateString(),
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-lg opacity-90">
              Join our community of learners committed to excellence
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="download" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="download">Download Form</TabsTrigger>
                <TabsTrigger value="submit">Submit Application</TabsTrigger>
              </TabsList>

              {/* Download Form Tab */}
              <TabsContent value="download" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Download Admission Form
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Download the admission form, fill it out, and submit it along with your supporting documents.
                  </p>
                </div>

                <Card className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Admission Form 2026
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Last updated: January 30, 2026
                      </p>
                      <p className="text-sm text-muted-foreground">
                        PDF format • 2.5 MB • For all grade levels
                      </p>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                      <Button variant="outline" className="flex-1 md:flex-none gap-2 bg-transparent">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                      <Button className="flex-1 md:flex-none gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-secondary/50 border-secondary">
                  <h3 className="font-semibold text-foreground mb-4">Required Documents</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Completed admission form (signed by parents)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Birth certificate (copy)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Latest school report card</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Parent/Guardian NIC (copy)</span>
                    </li>
                  </ul>
                </Card>
              </TabsContent>

              {/* Submit Application Tab */}
              <TabsContent value="submit" className="space-y-6">
                {!submitted ? (
                  <>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        Submit Application
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        Complete this form to submit your application. You'll receive an application reference number.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Student Information */}
                      <Card className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-6">
                          Student Information
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="dob">Date of Birth *</Label>
                              <Input
                                id="dob"
                                name="dob"
                                type="date"
                                value={formData.dob}
                                onChange={handleInputChange}
                                required
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="gender">Gender *</Label>
                              <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground mt-1"
                              >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="gradeApplying">Grade Applying For *</Label>
                            <select
                              id="gradeApplying"
                              name="gradeApplying"
                              value={formData.gradeApplying}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground mt-1"
                            >
                              <option value="">Select Grade</option>
                              <option value="grade6">Grade 6</option>
                              <option value="grade7">Grade 7</option>
                              <option value="grade8">Grade 8</option>
                              <option value="grade9">Grade 9</option>
                              <option value="grade10">Grade 10</option>
                              <option value="grade11">Grade 11</option>
                            </select>
                          </div>
                        </div>
                      </Card>

                      {/* Parent Information */}
                      <Card className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-6">
                          Parent/Guardian Information
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                            <Input
                              id="parentName"
                              name="parentName"
                              value={formData.parentName}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="parentNIC">NIC/Passport Number *</Label>
                              <Input
                                id="parentNIC"
                                name="parentNIC"
                                value={formData.parentNIC}
                                onChange={handleInputChange}
                                required
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="parentPhone">Phone Number *</Label>
                              <Input
                                id="parentPhone"
                                name="parentPhone"
                                type="tel"
                                value={formData.parentPhone}
                                onChange={handleInputChange}
                                required
                                className="mt-1"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="parentEmail">Email Address *</Label>
                            <Input
                              id="parentEmail"
                              name="parentEmail"
                              type="email"
                              value={formData.parentEmail}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </Card>

                      {/* Address Information */}
                      <Card className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-6">
                          Address Information
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="address">Full Address *</Label>
                            <Textarea
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                              rows={3}
                            />
                          </div>
                          <div>
                            <Label htmlFor="previousSchool">Previous School (Optional)</Label>
                            <Input
                              id="previousSchool"
                              name="previousSchool"
                              value={formData.previousSchool}
                              onChange={handleInputChange}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </Card>

                      {/* File Upload Section */}
                      <Card className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-6">
                          Document Upload
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <Label>Completed Admission Form (PDF)</Label>
                            <div className="mt-2 flex items-center justify-center w-full">
                              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary rounded-lg cursor-pointer bg-primary/5 hover:bg-primary/10 transition">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg
                                    className="w-8 h-8 mb-2 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 4v16m8-8H4"
                                    />
                                  </svg>
                                  <p className="text-sm font-semibold text-primary">Click to upload</p>
                                  <p className="text-xs text-muted-foreground">PDF up to 10MB</p>
                                </div>
                                <input type="file" className="hidden" accept=".pdf" />
                              </label>
                            </div>
                          </div>
                          <div>
                            <Label>Supporting Documents (Multiple)</Label>
                            <div className="mt-2 flex items-center justify-center w-full">
                              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer bg-foreground/5 hover:bg-foreground/10 transition">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg
                                    className="w-8 h-8 mb-2 text-muted-foreground"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 4v16m8-8H4"
                                    />
                                  </svg>
                                  <p className="text-sm font-semibold text-foreground">Click to upload</p>
                                  <p className="text-xs text-muted-foreground">PDF, images up to 5MB each</p>
                                </div>
                                <input type="file" className="hidden" accept=".pdf,.jpg,.png" multiple />
                              </label>
                            </div>
                          </div>
                        </div>
                      </Card>

                      {/* Agreement */}
                      <Card className="p-6">
                        <div className="flex gap-3">
                          <Checkbox
                            id="agreed"
                            name="agreed"
                            checked={formData.agreed}
                            onCheckedChange={(checked) =>
                              setFormData(prev => ({ ...prev, agreed: checked }))
                            }
                          />
                          <Label htmlFor="agreed" className="flex-1 text-sm">
                            I confirm that all the information provided is accurate and complete. I have read and accepted the admissions terms and conditions.
                          </Label>
                        </div>
                      </Card>

                      {/* Submit Buttons */}
                      <div className="flex gap-4">
                        <Button
                          type="submit"
                          disabled={!formData.agreed}
                          className="flex-1"
                        >
                          Submit Application
                        </Button>
                        <Button type="button" variant="outline" className="flex-1 bg-transparent">
                          Save as Draft
                        </Button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="space-y-6">
                    <Card className="p-8 bg-primary/10 border-primary">
                      <div className="flex gap-4">
                        <CheckCircle className="w-12 h-12 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            Application Submitted Successfully!
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            Your application has been received. Please keep your reference number for future correspondence.
                          </p>
                          <div className="bg-white p-4 rounded-lg border-2 border-primary">
                            <p className="text-sm text-muted-foreground">Application Reference Number</p>
                            <p className="text-2xl font-bold text-primary">{applicationRef}</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <p className="text-center text-muted-foreground">
                      We will review your application and contact you at the email address provided within 7-10 business days.
                    </p>

                    <Button onClick={() => setSubmitted(false)} className="w-full">
                      Submit Another Application
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {/* Status Checker */}
            <div className="mt-16">
              <Card className="p-8 bg-foreground/5">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Check Application Status
                </h2>
                <form onSubmit={handleStatusCheck} className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="statusRef">Application Reference Number</Label>
                      <Input
                        id="statusRef"
                        value={statusRef}
                        onChange={(e) => setStatusRef(e.target.value)}
                        placeholder="e.g., SBC-1234567890"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="statusDOB">Student Date of Birth</Label>
                      <Input
                        id="statusDOB"
                        type="date"
                        value={statusDOB}
                        onChange={(e) => setStatusDOB(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button type="submit" className="w-full">
                        Check Status
                      </Button>
                    </div>
                  </div>
                </form>

                {statusResult && (
                  <div className="mt-6 p-6 rounded-lg border-2 border-border">
                    <div className="flex items-start gap-4">
                      {statusResult.status === 'Accepted' && (
                        <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                      )}
                      {statusResult.status === 'Rejected' && (
                        <XCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                      )}
                      {statusResult.status === 'Pending' && (
                        <Clock className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                      )}
                      {statusResult.status === 'Reviewed' && (
                        <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      )}
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Status: {statusResult.status}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Last updated: {statusResult.date}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
