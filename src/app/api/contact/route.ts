import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/schema";

export async function POST(req: Request) {
  try {
    // Obtener los datos del formulario
    const body = await req.json();
    
    // Validar los datos con Zod
    const { name, email, message } = contactFormSchema.parse(body);
    
    // Configurar el transporte de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
    
    // Configurar el correo electrónico
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL, // Envía a tu propio correo
      subject: `Contact message from ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        
        Mensaje:
        ${message}
      `,
      html: `
        <h3>New contact message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };
    
    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending message:", error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { message: `Error sending message: ${error.message}` },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 }
    );
  }
}
