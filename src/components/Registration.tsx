import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { UserPlus, CheckCircle } from "lucide-react";

const packages = [
  { value: "package-a", label: "Package A – R350/mo (1 Subject)" },
  { value: "package-b", label: "Package B – R550/mo (Maths & Science)" },
  { value: "package-c", label: "Package C – R1000/mo (Full Support)" },
];

const grades = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

const schema = z.object({
  studentName: z.string().trim().min(1, "Student name is required").max(100),
  parentName: z.string().trim().min(1, "Parent/guardian name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  grade: z.string().min(1, "Please select a grade"),
  package: z.string().min(1, "Please select a package"),
  message: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { studentName: "", parentName: "", email: "", phone: "", grade: "", package: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    const text = `*New Registration*%0A%0AStudent: ${encodeURIComponent(data.studentName)}%0AGrade: ${encodeURIComponent(data.grade)}%0APackage: ${encodeURIComponent(data.package)}%0AParent: ${encodeURIComponent(data.parentName)}%0AEmail: ${encodeURIComponent(data.email)}%0APhone: ${encodeURIComponent(data.phone)}${data.message ? `%0ANote: ${encodeURIComponent(data.message)}` : ""}`;
    window.open(`https://wa.me/27726631875?text=${text}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="register" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle size={64} className="mx-auto text-secondary mb-6" />
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Registration Sent!</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Your registration details have been sent via WhatsApp. We'll confirm your spot shortly.
          </p>
          <Button onClick={() => { setSubmitted(false); form.reset(); }} variant="outline">
            Register Another Student
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <UserPlus size={16} />
            Enrol Now
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">Student Registration</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Fill in the form below and we'll get in touch to confirm your classes.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField control={form.control} name="studentName" render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Full Name</FormLabel>
                  <FormControl><Input placeholder="e.g. Thabo Mokoena" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="parentName" render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent / Guardian Name</FormLabel>
                  <FormControl><Input placeholder="e.g. Mrs Mokoena" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl><Input type="email" placeholder="parent@email.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone / WhatsApp Number</FormLabel>
                  <FormControl><Input type="tel" placeholder="072 663 1875" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <FormField control={form.control} name="grade" render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade</FormLabel>
                  <FormControl>
                    <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Select grade...</option>
                      {grades.map((g) => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="package" render={({ field }) => (
                <FormItem>
                  <FormLabel>Package</FormLabel>
                  <FormControl>
                    <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Select package...</option>
                      {packages.map((p) => <option key={p.value} value={p.label}>{p.label}</option>)}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Notes (optional)</FormLabel>
                <FormControl><Textarea placeholder="Any specific subjects or requirements..." rows={3} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:brightness-110 font-bold text-base">
              Submit Registration via WhatsApp
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Registration;
