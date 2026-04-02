import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, CheckCircle } from "lucide-react";

const packages = [
  { value: "package-a", label: "Package A – R350/mo (1 Subject)" },
  { value: "package-b", label: "Package B – R550/mo (Maths & Science)" },
  { value: "package-c", label: "Package C – R1000/mo (Full Support)" },
];

const grades = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

const provinces = [
  "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo",
  "Mpumalanga", "North West", "Northern Cape", "Western Cape",
];

const schema = z.object({
  studentName: z.string().trim().min(1, "First name is required").max(100),
  studentSurname: z.string().trim().min(1, "Surname is required").max(100),
  gender: z.string().min(1, "Please select a gender"),
  studentEmail: z.string().trim().email("Please enter a valid email").max(255),
  studentPhone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  grade: z.string().min(1, "Please select a grade"),
  province: z.string().min(1, "Please select a province"),
  schoolName: z.string().trim().min(1, "School name is required").max(150),
  package: z.string().min(1, "Please select a package"),
  parentName: z.string().trim().min(1, "Parent first name is required").max(100),
  parentSurname: z.string().trim().min(1, "Parent surname is required").max(100),
  parentPhone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  parentEmail: z.string().trim().email("Please enter a valid email").max(255),
  agreeOnlineLessons: z.boolean().refine(v => v, "You must agree to online lessons"),
  agreeTerms: z.boolean().refine(v => v, "You must agree to the terms and conditions"),
  agreePayment: z.boolean().refine(v => v, "You must agree to the payment plan"),
});

type FormValues = z.infer<typeof schema>;

const selectClass = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      studentName: "", studentSurname: "", gender: "", studentEmail: "", studentPhone: "",
      grade: "", province: "", schoolName: "", package: "",
      parentName: "", parentSurname: "", parentPhone: "", parentEmail: "",
      agreeOnlineLessons: false, agreeTerms: false, agreePayment: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    const text = `*New Registration*%0A%0A*Student Info*%0AName: ${encodeURIComponent(data.studentName + " " + data.studentSurname)}%0AGender: ${encodeURIComponent(data.gender)}%0AEmail: ${encodeURIComponent(data.studentEmail)}%0APhone: ${encodeURIComponent(data.studentPhone)}%0AGrade: ${encodeURIComponent(data.grade)}%0AProvince: ${encodeURIComponent(data.province)}%0ASchool: ${encodeURIComponent(data.schoolName)}%0APackage: ${encodeURIComponent(data.package)}%0A%0A*Parent Info*%0AName: ${encodeURIComponent(data.parentName + " " + data.parentSurname)}%0APhone: ${encodeURIComponent(data.parentPhone)}%0AEmail: ${encodeURIComponent(data.parentEmail)}`;
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
      <div className="container mx-auto px-4 max-w-3xl">
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-card border border-border rounded-2xl p-8 shadow-lg">
            {/* Student Information */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Student Information</h3>
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="studentName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="studentSurname" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Surname</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="gender" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <select {...field} className={selectClass}>
                          <option value="">Select gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="studentEmail" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl><Input type="email" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="studentPhone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone / WhatsApp Number</FormLabel>
                      <FormControl><Input type="tel" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="grade" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade</FormLabel>
                      <FormControl>
                        <select {...field} className={selectClass}>
                          <option value="">Select grade</option>
                          {grades.map((g) => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="province" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Province</FormLabel>
                      <FormControl>
                        <select {...field} className={selectClass}>
                          <option value="">Select province</option>
                          {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="schoolName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>School Name</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="package" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Package</FormLabel>
                    <FormControl>
                      <select {...field} className={selectClass}>
                        <option value="">Select package</option>
                        {packages.map((p) => <option key={p.value} value={p.label}>{p.label}</option>)}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
            </div>

            {/* Parent Information */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Parent / Guardian Information</h3>
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="parentName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="parentSurname" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Surname</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="parentPhone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone / WhatsApp Number</FormLabel>
                      <FormControl><Input type="tel" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="parentEmail" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl><Input type="email" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>
            </div>

            {/* Agreements */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Agreements</h3>
              <div className="space-y-4">
                <FormField control={form.control} name="agreeOnlineLessons" render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal">I agree to participate in online lessons</FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )} />
                <FormField control={form.control} name="agreeTerms" render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal">I agree to the terms and conditions</FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )} />
                <FormField control={form.control} name="agreePayment" render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal">I agree to the payment plan</FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )} />
              </div>
            </div>

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
