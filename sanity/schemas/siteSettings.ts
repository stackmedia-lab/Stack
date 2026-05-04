import { defineField, defineType } from "sanity";
export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "brandName", type: "string", initialValue: "Stack Media" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "contactEmail", type: "string" }),
    defineField({ name: "contactPhone", type: "string" }),
    defineField({ name: "address", type: "text", rows: 2 }),
    defineField({
      name: "socials", type: "array", of: [{
        type: "object", fields: [
          { name: "platform", type: "string" }, { name: "url", type: "url" }
        ]
      }]
    }),
    defineField({
      name: "navLinks", type: "array", of: [{
        type: "object", fields: [
          { name: "label", type: "string" }, { name: "href", type: "string" }
        ]
      }]
    }),
    defineField({ name: "footerText", type: "text" }),
  ],
});
