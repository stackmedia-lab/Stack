import { defineField, defineType } from "sanity";
export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: r => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "tag", type: "string" }),
    defineField({ name: "region", type: "string" }),
    defineField({ name: "tone", type: "string" }),
    defineField({ name: "problem", type: "text" }),
    defineField({ name: "actions", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "metrics", type: "array", of: [{
        type: "object", fields: [
          { name: "label", type: "string" }, { name: "value", type: "string" }
        ]
      }]
    }),
    defineField({ name: "cover", type: "image", options: { hotspot: true } }),
  ],
});
