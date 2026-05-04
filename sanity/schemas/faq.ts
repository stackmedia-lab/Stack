import { defineField, defineType } from "sanity";
export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string", validation: r => r.required() }),
    defineField({ name: "answer", type: "text", validation: r => r.required() }),
    defineField({ name: "category", type: "string", options: {
      list: ["General", "Pricing", "Process", "Channels", "Reporting"]
    }}),
    defineField({ name: "orderRank", type: "number" }),
  ],
});
