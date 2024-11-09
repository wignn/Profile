"use server";
import nodemailer from "nodemailer";
import { z } from "zod";

interface Message {
    firstName: string;
    lastName?: string;
    email: string;
    phoneNumber: string;
    service: string;
    message: string;
}

export const Message = async ({ firstName, lastName, email, phoneNumber, service, message }: Message) => {
    try {
        const schema = z.object({
            firstName: z.string().min(3),
            lastName: z.string().optional(),
            email: z.string().email().min(3),
            phoneNumber: z.string().min(11),
            service: z.string().min(3),
            message: z.string().min(3),
        });

        schema.parse({ firstName, lastName, email, phoneNumber, service, message });

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.SEND,
            },
        });

        const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
            <h2 style="color: #333; text-align: center;">New Contact Request</h2>
            
            <div style="margin-top: 20px; padding: 20px; background-color: #fff; border-radius: 8px;">
                <h3 style="color: #5c2fb7; margin-bottom: 15px;">Contact Details</h3>
                <p style="margin: 8px 0;"><strong style="color: #333;">First Name:</strong> ${firstName}</p>
                <p style="margin: 8px 0;"><strong style="color: #333;">Last Name:</strong> ${lastName || "N/A"}</p>
                <p style="margin: 8px 0;"><strong style="color: #333;">Email:</strong> ${email}</p>
                <p style="margin: 8px 0;"><strong style="color: #333;">Phone Number:</strong> ${phoneNumber}</p>
            </div>
    
            <div style="margin-top: 20px; padding: 20px; background-color: #fff; border-radius: 8px;">
                <h3 style="color: #5c2fb7; margin-bottom: 15px;">Service Requested</h3>
                <p style="margin: 8px 0; color: #333;">${service}</p>
            </div>
    
            <div style="margin-top: 20px; padding: 20px; background-color: #fff; border-radius: 8px;">
                <h3 style="color: #5c2fb7; margin-bottom: 15px;">Message</h3>
                <p style="margin: 8px 0; color: #333;">${message}</p>
            </div>
    
            <div style="text-align: center; margin-top: 30px;">
                <p style="color: #555;">Thank you for using our contact form.</p>
                <p style="font-size: 0.9em; color: #888;">Please respond to this email if you have any further questions.</p>
            </div>
        </div>
    `;


        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.TO,
            subject: "New Contact Form Submission",
            html: htmlContent,
        });

        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        throw new Error(`Failed to send email: ${String(error)}`);
    }
};
