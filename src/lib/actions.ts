
"use server";

export async function submitContact(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log("Contact Form Submission:", { name, email, message });

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
