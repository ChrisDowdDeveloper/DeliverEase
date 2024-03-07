import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
    defineField({
    name: "name",
    type: "string",
    title: "Restaurant Category name",
    validation: (Rule) => Rule.required(),
   }),
   defineField({
    name: "short_description",
    type: "string",
    title: "Short description",
    validation: (Rule) => Rule.max(200),
   }),
   defineField({
    name: "restaurant",
    type: "array",
    title: "Restaurants",
    of: [{ type: "reference", to: [{ type: "restaurant" }] }],
   }),
  ],
})
