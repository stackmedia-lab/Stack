import { defineField, defineType } from "sanity";
export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", type: "text", validation: r => r.required() }),
    defineField({ name: "author", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "company", type: "string" }),
    defineField({ name: "avatar", type: "image" }),
  ],
});
