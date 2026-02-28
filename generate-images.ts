import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage(prompt: string, filename: string) {
  try {
    console.log(`Generating image for: ${filename}`);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        const buffer = Buffer.from(base64EncodeString, "base64");
        const publicDir = path.join(process.cwd(), "public");
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir);
        }
        fs.writeFileSync(path.join(publicDir, filename), buffer);
        console.log(`Saved ${filename}`);
        return;
      }
    }
    console.log(`Failed to find image data for ${filename}`);
  } catch (error) {
    console.error(`Error generating ${filename}:`, error);
  }
}

async function main() {
  await generateImage(
    "A warm, painterly illustration of a mother gently placing her hand on a closed wooden bedroom door, soft golden light coming from under the door. Emotional, hopeful, not sad. Watercolor style with warm browns and amber tones. No text in the image.",
    "hero-image.png"
  );
  await generateImage(
    "A warm illustrated icon or small image of an open Bible with a bread loaf beside it, watercolor style, warm amber tones. No text in the image.",
    "bible-bread.png"
  );
  await generateImage(
    "A beautiful 3D ebook cover mockup of 'Amar Sem Pregar' with warm brown and gold tones, mother and son silhouette on cover, clean elegant design. No text in the image.",
    "ebook-mockup.png"
  );
}

main();
