"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { FileUp, Download, CheckCircle2 } from "lucide-react";

type FormState = {
  studentName: string;
  grade: string;
  dob: string;
  address: string;
  parentName: string;
  phone: string;
  email: string;
  file: File | null;
};

const steps = ["Student", "Guardian", "Upload", "Review"] as const;

export default function AdmissionsPage() {
  const [step, setStep] = useState<(typeof steps)[number]>("Student");
  const [doneOpen, setDoneOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [data, setData] = useState<FormState>({
    studentName: "",
    grade: "",
    dob: "",
    address: "",
    parentName: "",
    phone: "",
    email: "",
    file: null,
  });

  const stepIndex = useMemo(() => steps.indexOf(step), [step]);
  const progress = useMemo(
    () => ((stepIndex + 1) / steps.length) * 100,
    [stepIndex]
  );

  function next() {
    const i = steps.indexOf(step);
    if (i < steps.length - 1) setStep(steps[i + 1]);
  }

  function prev() {
    const i = steps.indexOf(step);
    if (i > 0) setStep(steps[i - 1]);
  }

  const canGoNext = useMemo(() => {
    if (step === "Student") {
      return Boolean(data.studentName && data.grade && data.dob);
    }
    if (step === "Guardian") {
      return Boolean(data.parentName && data.phone);
    }
    if (step === "Upload") {
      return Boolean(data.file);
    }
    return true;
  }, [step, data]);

  async function submit() {
    setIsSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("studentName", data.studentName);
      fd.append("grade", data.grade);
      fd.append("dob", data.dob);
      fd.append("address", data.address);
      fd.append("parentName", data.parentName);
      fd.append("phone", data.phone);
      fd.append("email", data.email);

      // IMPORTANT: key must be "file" to match your route.ts
      if (data.file) fd.append("file", data.file);

      const res = await fetch("/api/admissions", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("Submit failed:", text);
        alert("Submit failed. Please check the console.");
        return;
      }

      setDoneOpen(true);
    } catch (err) {
      console.error(err);
      alert("Submit failed. Please check the console.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold">Admissions</h1>
              <p className="text-muted-foreground mt-2">
                Download the application form, complete it, and submit it online.
              </p>
            </div>

            {/* Top Actions */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">
                      Download Application Form
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Download the official admissions form (PDF), fill it, then
                      upload it below.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button asChild>
                        <a href="/forms/admission-form.pdf" download>
                          Download PDF
                        </a>
                      </Button>

                      <Button variant="outline" asChild>
                        <Link href="#apply">Submit Online</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileUp className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">What You Need</h2>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc pl-4">
                      <li>Filled application form (PDF/JPG/PNG)</li>
                      <li>Student details + guardian contact</li>
                      <li>Correct grade and date of birth</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Apply Wizard */}
            <div id="apply" className="scroll-mt-24">
              <Card className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold">
                      Submit Application
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Multi-step wizard with progress and review.
                    </p>
                  </div>

                  <div className="w-44">
                    <Progress value={progress} />
                    <p className="text-xs text-muted-foreground mt-2 text-right">
                      Step {stepIndex + 1} / {steps.length}
                    </p>
                  </div>
                </div>

                <Tabs
                  value={step}
                  onValueChange={(v) => setStep(v as any)}
                >
                  <TabsList className="grid grid-cols-4 w-full">
                    {steps.map((s) => (
                      <TabsTrigger key={s} value={s}>
                        {s}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {/* Student */}
                  <TabsContent value="Student">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 grid md:grid-cols-2 gap-4"
                    >
                      <div>
                        <label className="text-sm font-medium">
                          Student Name *
                        </label>
                        <Input
                          value={data.studentName}
                          onChange={(e) =>
                            setData({ ...data, studentName: e.target.value })
                          }
                          placeholder="e.g., Dakum Perera"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">
                          Grade Applying For *
                        </label>
                        <Input
                          value={data.grade}
                          onChange={(e) =>
                            setData({ ...data, grade: e.target.value })
                          }
                          placeholder="e.g., Grade 6"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">
                          Date of Birth *
                        </label>
                        <Input
                          type="date"
                          value={data.dob}
                          onChange={(e) =>
                            setData({ ...data, dob: e.target.value })
                          }
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">Address</label>
                        <Input
                          value={data.address}
                          onChange={(e) =>
                            setData({ ...data, address: e.target.value })
                          }
                          placeholder="Home address"
                          className="mt-2"
                        />
                      </div>
                    </motion.div>
                  </TabsContent>

                  {/* Guardian */}
                  <TabsContent value="Guardian">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 grid md:grid-cols-2 gap-4"
                    >
                      <div>
                        <label className="text-sm font-medium">
                          Parent/Guardian Name *
                        </label>
                        <Input
                          value={data.parentName}
                          onChange={(e) =>
                            setData({ ...data, parentName: e.target.value })
                          }
                          placeholder="Full name"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">Phone *</label>
                        <Input
                          value={data.phone}
                          onChange={(e) =>
                            setData({ ...data, phone: e.target.value })
                          }
                          placeholder="07X XXXXXXX"
                          className="mt-2"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input
                          type="email"
                          value={data.email}
                          onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                          }
                          placeholder="name@email.com"
                          className="mt-2"
                        />
                      </div>
                    </motion.div>
                  </TabsContent>

                  {/* Upload */}
                  <TabsContent value="Upload">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 space-y-4"
                    >
                      <div>
                        <label className="text-sm font-medium">
                          Upload Filled Form *
                        </label>
                        <Input
                          type="file"
                          accept=".pdf,.png,.jpg,.jpeg"
                          className="mt-2"
                          onChange={(e) =>
                            setData({
                              ...data,
                              file: e.target.files?.[0] ?? null,
                            })
                          }
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Accepted: PDF, JPG, PNG.
                        </p>
                      </div>

                      {data.file && (
                        <Card className="p-4">
                          <p className="text-sm">
                            Selected file:{" "}
                            <span className="font-medium">
                              {data.file.name}
                            </span>
                          </p>
                        </Card>
                      )}
                    </motion.div>
                  </TabsContent>

                  {/* Review */}
                  <TabsContent value="Review">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 grid gap-4"
                    >
                      <Card className="p-5">
                        <h3 className="font-semibold mb-3">Review Details</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>
                            <span className="font-medium text-foreground">
                              Student:
                            </span>{" "}
                            {data.studentName || "-"}
                          </p>
                          <p>
                            <span className="font-medium text-foreground">
                              Grade:
                            </span>{" "}
                            {data.grade || "-"}
                          </p>
                          <p>
                            <span className="font-medium text-foreground">
                              DOB:
                            </span>{" "}
                            {data.dob || "-"}
                          </p>
                          <p>
                            <span className="font-medium text-foreground">
                              Address:
                            </span>{" "}
                            {data.address || "-"}
                          </p>
                          <p>
                            <span className="font-medium text-foreground">
                              Guardian:
                            </span>{" "}
                            {data.parentName || "-"}
                          </p>
                          <p>
                            <span className="font-medium text-foreground">
                              Phone:
                            </span>{" "}
                            {data.phone || "-"}
                          </p>
                          <p>
                            <span className="font-medium text-foreground">
                              Email:
                            </span>{" "}
                            {data.email || "-"}
                          </p>
                          <p>
                            <span className="font-medium text-foreground">
                              File:
                            </span>{" "}
                            {data.file?.name || "-"}
                          </p>
                        </div>
                      </Card>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          variant="outline"
                          onClick={() => setStep("Student")}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={submit}
                          disabled={isSubmitting || !data.file}
                          className="sm:ml-auto"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                      </div>
                    </motion.div>
                  </TabsContent>
                </Tabs>

                {/* Footer buttons */}
                <div className="flex items-center justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prev}
                    disabled={stepIndex === 0}
                  >
                    Back
                  </Button>

                  {step !== "Review" ? (
                    <Button onClick={next} disabled={!canGoNext}>
                      Next
                    </Button>
                  ) : (
                    <Button onClick={submit} disabled={isSubmitting || !data.file}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Dialog */}
        <Dialog open={doneOpen} onOpenChange={setDoneOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Application Submitted
              </DialogTitle>
              <DialogDescription>
                Your application was submitted successfully (local dev). Next we
                can connect email + database.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setDoneOpen(false)}>
                Close
              </Button>
              <Button asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </>
  );
}
