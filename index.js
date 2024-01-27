import { Resend } from 'resend';
import express from 'express';

const app = express();


const resend = new Resend('re_apJMmvNU_Fy34JpkSYGepaPJjy3aW8nNY');

app.get("/:email/:password",async(req,res)=>{
    const {email,password}=req.params;
    await resend.emails.send({
        from: 'UPlay <uplay@resend.dev>',
        to: ['khinezar70122107@gmail.com'],
        subject: 'Reset Password',
        html: `Your new password is <strong>${password}</strong>!`,
      });
    res.status(200).send({
        message:`We send a new password to ${email}!`
    })
})

app.listen(9000,()=>console.log('server alive'))