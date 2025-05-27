import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const { name, email, message } = contactFormSchema.parse(body);
    
    // Validar que las variables de entorno necesarias estén definidas
    if (!process.env.MY_EMAIL || !process.env.EMAIL_APP_PASSWORD) {
      console.error("Missing email environment variables");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
    
    // Email para ti (propietario del sitio)
    const mailOptionsToOwner = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL, 
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
    
    // Email de agradecimiento para el remitente
    const mailOptionsToSender = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: `Thank you for contacting me!`,
      text: `
        Dear ${name},
        
        Thank you for reaching out to me through my portfolio website. I have received your message and will review it as soon as possible.
        
        I appreciate your interest and will do my best to respond to your inquiry within the next 24-48 hours.
        
        This is an automated response, please do not reply to this email.
        
        Best regards,
        Santiago Iturri
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for contacting me!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to me through my portfolio website. I have received your message and will review it as soon as possible.</p>
          <p>I appreciate your interest and will do my best to respond to your inquiry within the next 24-48 hours.</p>
          <p><em>This is an automated response, please do not reply to this email.</em></p>
          <p>Best regards,<br>Santiago Iturri</p>
        </div>
      `,
    };
    
    // Enviar ambos correos
    try {
      await transporter.sendMail(mailOptionsToOwner);
      console.log("Email sent to owner successfully");
      
      try {
        await transporter.sendMail(mailOptionsToSender);
        console.log("Thank you email sent to sender successfully");
      } catch (senderError) {
        console.error("Error sending thank you email:", senderError);
        // No devolvemos error aquí porque al menos el mensaje principal se envió correctamente
      }
      
      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    } catch (ownerError) {
      console.error("Error sending email to owner:", ownerError);
      throw ownerError; // Propagar el error para que se maneje en el catch externo
    }
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
