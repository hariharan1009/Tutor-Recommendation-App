import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    // Get random names
    const userRes = await fetch("https://randomuser.me/api/?results=3&nat=in");
    const userData = await userRes.json();

    const names = userData.results.map(
      (u: any) => `${u.name.first} ${u.name.last}`
    );

    // Get subjects from AI
    const aiRes = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Give 3 subjects related to ${query} in JSON array format`,
        },
      ],
      model: "llama-3.1-8b-instant",
    });

    let text = aiRes.choices[0].message.content || "[]";
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    let subjects: string[] = [];

    try {
      subjects = JSON.parse(text);
    } catch {
      subjects = [query, "General", "Basics"];
    }

    const tutors = names.map((name: string, i: number) => ({
      name,
      subject: subjects[i] || query,
      experience: `${Math.floor(Math.random() * 5) + 1} years`,
      rating: Number((Math.random() * 2 + 3).toFixed(1)),
    }));

    return NextResponse.json(tutors);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch tutors" },
      { status: 500 }
    );
  }
}