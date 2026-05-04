import { defineField, defineType } from "sanity";
export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: r => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: r => r.required() }),
    defineField({ name: "number", type: "string", description: "e.g. 01" }),
    defineField({ name: "orderRank", type: "number" }),
    defineField({ name: "short", type: "text", rows: 2 }),
    defineField({ name: "channel", type: "string" }),
    defineField({ name: "hero", type: "string" }),
    defineField({ name: "intro", type: "text" }),
    defineField({ name: "tone", type: "string", description: "Tailwind gradient classes" }),
    defineField({ name: "whatYouGet", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "deliverables", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "metrics", type: "array", of: [{
        type: "object", fields: [
          { name: "label", type: "string" }, { name: "value", type: "string" }
        ]
      }]
    }),
    defineField({
      name: "process", type: "array", of: [{
        type: "object", fields: [
          { name: "n", type: "string" }, { name: "t", type: "string" }, { name: "d", type: "text" }
        ]
      }]
    }),
    defineField({
      name: "faqs", type: "array", of: [{
        type: "object", fields: [
          { name: "q", type: "string" }, { name: "a", type: "text" }
        ]
      }]
    }),
  ],
});
