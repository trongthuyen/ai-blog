import { NextResponse } from "next/server";
import OpenAI, { ClientOptions } from "openai";

const configuration: ClientOptions = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export async function POST(request: Request) {
  try {
    const { title, role } = await request.json();

    const apiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Create small blog post with html tags based on this title: ${title}`,
        },
        {
          role: "system",
          content: `${
            role || "I am a helpful assistant"
          }. Write with html tags.`,
        },
      ],
    });

    return NextResponse.json(
      {
        content: apiResponse.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "Error updating post" }, { status: 500 });
  }
}
