export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }

  const key = process.env.OPENROUTER_API_KEY;
  if (!key) {
    res.status(500).json({ error: "Server is missing OPENROUTER_API_KEY" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      res.status(400).json({ error: "Invalid JSON" });
      return;
    }
  }

  const prompt = (body && body.prompt) || "";
  const model = "google/gemini-2.5-flash";
  if (!prompt.trim()) {
    res.status(400).json({ error: "Missing prompt" });
    return;
  }

  try {
    const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + key,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://oneteacher-app-richfeyn.vercel.app",
        "X-Title": "OneTeacher",
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              "You are OneTeacher, a practical assistant for Indian government primary schools with one teacher and many grades.\n" +
              "Write COMPLETE materials. Never stop mid-heading or mid-list.\n" +
              "Format in clean Markdown:\n" +
              "- Use ## for main sections and ### for subsections\n" +
              "- Use short bullet lists, not long paragraphs\n" +
              "- Bold key times and grade labels\n" +
              "- Separate sections with a blank line\n" +
              "- End with a one-line checklist titled ## Ready for class\n" +
              "Keep language simple. Do not invent school policies.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.5,
        max_tokens: 10000,
      }),
    });

    const data = await upstream.json();
    if (!upstream.ok) {
      const msg =
        (data && data.error && (data.error.message || data.error)) ||
        upstream.statusText;
      res.status(upstream.status).json({
        error: typeof msg === "string" ? msg : JSON.stringify(msg),
      });
      return;
    }

    const text =
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      data.choices[0].message.content;
    res.status(200).json({ text: text || "(Empty response)" });
  } catch (err) {
    res.status(500).json({ error: err.message || "OpenRouter request failed" });
  }
}
