export async function POST(req) {
  try {
    const data = await req.json();

    const { firstName, lastName, email, service, message } = data;

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",

      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        sender: {
          name: "Website Contact",
          email: "celebrationojingulu5@gmail.com",
        },

        to: [
          {
            email: "celebrationojingulu5@gmail.com",
            name: "Admin",
          },
        ],

        replyTo: {
          email,
          name: `${firstName} ${lastName}`,
        },

        subject: `New Contact: ${service}`,

        htmlContent: `
  <div style="font-family: Arial, sans-serif; color: #151E47; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
      <h2 style="color: #FFA205; text-align: center;">New Contact Message</h2>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 120px;">Name</td>
          <td style="padding: 8px;">${firstName} ${lastName}</td>
        </tr>
        <tr style="background: #f6f6f6;">
          <td style="padding: 8px; font-weight: bold;">Email</td>
          <td style="padding: 8px;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Service</td>
          <td style="padding: 8px;">${service}</td>
        </tr>
        <tr style="background: #f6f6f6;">
          <td style="padding: 8px; font-weight: bold;">Message</td>
          <td style="padding: 8px;">${message}</td>
        </tr>
      </table>

      <p style="margin-top: 30px; font-size: 14px; color: #555;">
        This message was sent via your website contact form.
      </p>

      <div style="text-align: center; margin-top: 20px;">
        <a href="https://yourwebsite.com" 
           style="display: inline-block; background: #FFA205; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: bold;">
          Visit Website
        </a>
      </div>
    </div>
  </div>
`,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error(result);
      throw new Error("Brevo error");
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);

    return Response.json({ error: "Send failed" }, { status: 500 });
  }
}
