import { defineField, defineType } from "sanity";
export default defineType({
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: r => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "intro", type: "text" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "orderRank", type: "number" }),
    defineField({ name: "challenges", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "playbook", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "kpis", type: "array", of: [{
        type: "object", fields: [
          { name: "label", type: "string" }, { name: "value", type: "string" }
        ]
      }]
    }),
  ],
});
