"use server";

export interface ContactState {
  success: boolean;
  message: string;
}

export async function submitContact(
  _prev: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (message.length < 20) {
    return {
      success: false,
      message: "Message must be at least 20 characters.",
    };
  }

  // Log for now — replace with Resend / Nodemailer for real email delivery
  console.log("Contact form submission:", { name, email, message });

  return {
    success: true,
    message: "Thanks for reaching out! I'll get back to you within 24 hours.",
  };
}
